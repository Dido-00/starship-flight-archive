(() => {
  'use strict';

  const flights = Array.isArray(window.STARSHIP_FLIGHTS) ? window.STARSHIP_FLIGHTS : [];
  const stage = document.getElementById('timeline-stage');
  const route = document.getElementById('flight-route');
  const pointsLayer = document.getElementById('flight-points');
  const card = document.getElementById('mission-card');
  const details = document.getElementById('mission-details');
  const closeButton = document.getElementById('close-mission');
  const sourceGrid = document.getElementById('source-flight-grid');
  const countEl = document.getElementById('flight-count');
  let selectedId = null;
  let lastFocusedPoint = null;
  let resizeFrame = null;

  countEl.textContent = String(flights.length);

  const pad = (number) => String(number).padStart(2, '0');
  const prettyDate = (date) => date.replaceAll('-', '.');
  const svgNs = 'http://www.w3.org/2000/svg';
  const make = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  };

  function getGeometry(width, length) {
    // 依畫面寬度決定每一次折返大約容納幾個任務，無須手動修改 15 / 16 次。
    const compact = width < 620;
    const capacity = compact ? 3 : width < 960 ? 5 : 8;
    const legs = Math.max(1, Math.ceil(length / capacity));
    const side = width * (compact ? 0.14 : 0.095);
    const left = side;
    const right = width - side;
    const top = compact ? 98 : 105;
    const rise = compact ? 255 : width < 960 ? 280 : 320;
    const bottom = top + legs * rise;
    const height = bottom + (compact ? 85 : 110);
    const corners = [];
    for (let i = 0; i <= legs; i += 1) {
      corners.push({ x: i % 2 === 0 ? left : right, y: top + i * rise });
    }
    // 等比例在整條折返線上分配節點，末端永遠留一小段，象徵下一次試飛。
    const nodes = Array.from({ length }, (_, i) => {
      const step = (i + .35) / (legs * capacity);
      const portion = step * legs;
      const leg = Math.min(legs - 1, Math.floor(portion));
      const alpha = portion - leg;
      return {
        x: corners[leg].x + (corners[leg + 1].x - corners[leg].x) * alpha,
        y: corners[leg].y + (corners[leg + 1].y - corners[leg].y) * alpha
      };
    });
    return { width, height, corners, nodes };
  }

  function drawPath(geometry) {
    route.setAttribute('viewBox', `0 0 ${geometry.width} ${geometry.height}`);
    const coords = geometry.corners.map(({x, y}) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
    route.replaceChildren();
    for (const cls of ['flight-route__glow', 'flight-route__main']) {
      const line = document.createElementNS(svgNs, 'polyline');
      line.setAttribute('points', coords);
      line.setAttribute('class', cls);
      route.appendChild(line);
    }
    const last = geometry.corners.at(-1);
    const previous = geometry.corners.at(-2);
    const extension = document.createElementNS(svgNs, 'line');
    const startRatio = .95;
    const endX = last.x + (last.x - previous.x) * .09;
    const endY = last.y + (last.y - previous.y) * .09;
    extension.setAttribute('x1', previous.x + (last.x - previous.x) * startRatio);
    extension.setAttribute('y1', previous.y + (last.y - previous.y) * startRatio);
    extension.setAttribute('x2', Math.max(2, Math.min(geometry.width - 2, endX)));
    extension.setAttribute('y2', endY);
    extension.setAttribute('class', 'flight-route__future');
    route.appendChild(extension);
  }

  function createPoint(flight, position) {
    const point = make('button', 'flight-point');
    point.type = 'button';
    point.dataset.flight = String(flight.id);
    point.style.left = `${position.x}px`;
    point.style.top = `${position.y}px`;
    point.setAttribute('aria-label', `Flight ${flight.id}，${prettyDate(flight.launchDate)}，查看任務`);
    point.setAttribute('aria-pressed', String(selectedId === flight.id));
    const date = make('span', 'flight-point__date', prettyDate(flight.launchDate));
    const dot = make('span', 'flight-point__dot');
    const label = make('span', 'flight-point__number', `FLIGHT ${pad(flight.id)}`);
    point.append(date, dot, label);
    point.addEventListener('click', () => selectFlight(flight, point));
    return point;
  }

  function updatePoints() {
    pointsLayer.querySelectorAll('.flight-point').forEach((point) => {
      const isCurrent = Number(point.dataset.flight) === selectedId;
      point.classList.toggle('is-selected', isCurrent);
      point.classList.toggle('is-dimmed', selectedId !== null && !isCurrent);
      point.setAttribute('aria-pressed', String(isCurrent));
      point.tabIndex = selectedId === null || isCurrent ? 0 : -1;
    });
    stage.classList.toggle('has-selection', selectedId !== null);
  }

  function appendSection(name, content) {
    const section = make('section', 'mission-card__section');
    section.append(make('h4', null, name), make('p', null, content));
    details.appendChild(section);
  }

  function renderDetails(flight) {
    details.replaceChildren();
    const heading = make('div', 'mission-card__heading');
    const name = make('h3', null, `Flight ${pad(flight.id)}`);
    const time = make('time', null, prettyDate(flight.launchDate));
    time.dateTime = flight.launchDate;
    heading.append(name, time);
    details.appendChild(heading);
    appendSection('基本資訊', `發射日期：${prettyDate(flight.launchDate)}（台灣時間）；型號：${flight.vehicle}。`);
    appendSection('任務目標', flight.goal);
    appendSection('飛行過程', flight.process);
    appendSection('測試結果', flight.outcome);
    appendSection('待改進之處', flight.improvement);
    if (flight.image) {
      const figure = make('figure', 'mission-card__image');
      const image = make('img');
      image.src = flight.image;
      image.alt = `Starship Flight ${flight.id} 任務照片`;
      image.loading = 'lazy';
      image.addEventListener('error', () => figure.remove(), { once: true });
      figure.appendChild(image);
      if (flight.imageCredit) figure.appendChild(make('figcaption', null, flight.imageCredit));
      details.appendChild(figure);
    }
  }

  function selectFlight(flight, point) {
    lastFocusedPoint = point;
    selectedId = flight.id;
    renderDetails(flight);
    card.classList.add('is-open');
    card.setAttribute('aria-hidden', 'false');
    card.scrollTop = 0;
    updatePoints();
    // 將焦點移到關閉鈕，鍵盤使用者可以直接返回時間軸。
    closeButton.focus({ preventScroll: true });
    // 最後幾個圓點可能位於頁面較下方：讓資訊卡實際進入使用者視野。
    card.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' });
  }

  function closeFlight() {
    if (selectedId === null) return;
    selectedId = null;
    card.classList.remove('is-open');
    card.setAttribute('aria-hidden', 'true');
    updatePoints();
    if (lastFocusedPoint && lastFocusedPoint.isConnected) {
      lastFocusedPoint.focus({ preventScroll: true });
      lastFocusedPoint.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' });
    }
  }

  function layout() {
    const width = stage.getBoundingClientRect().width;
    if (!width) return;
    const geometry = getGeometry(width, flights.length);
    stage.style.height = `${geometry.height}px`;
    drawPath(geometry);
    pointsLayer.replaceChildren(...flights.map((flight, i) => createPoint(flight, geometry.nodes[i])));
    lastFocusedPoint = selectedId === null ? null : pointsLayer.querySelector(`[data-flight="${selectedId}"]`);
    updatePoints();
  }

  function listSources() {
    // 只提供查證過的官方獨立任務頁面；較早任務統一連到上方官方更新中心。
    const individual = flights.filter(f => /^https:\/\/www\.spacex\.com\/launches\/starship-flight-\d+\/?$/.test(f.sourceUrl));
    sourceGrid.replaceChildren(...individual.map(flight => {
      const a = make('a', null, `Flight ${pad(flight.id)} ↗`);
      a.href = flight.sourceUrl;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.setAttribute('aria-label', `Flight ${flight.id} 官方任務頁面（開新視窗）`);
      return a;
    }));
  }

  closeButton.addEventListener('click', closeFlight);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeFlight();
  });
  window.addEventListener('resize', () => {
    if (resizeFrame !== null) cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(() => { resizeFrame = null; layout(); });
  });

  // GitHub Pages 的專案網站會自動顯示對應 Repository 連結。
  // 在本機 file:// 開啟時隱藏，避免出現不能使用的假連結。
  const repoLink = document.getElementById('github-repo-link');
  const hostMatch = /^([a-zA-Z0-9-]+)\.github\.io$/.exec(window.location.hostname);
  if (repoLink && hostMatch) {
    const owner = hostMatch[1];
    const repo = window.location.pathname.split('/').filter(Boolean)[0] || `${owner}.github.io`;
    repoLink.href = `https://github.com/${owner}/${repo}`;
    repoLink.hidden = false;
  }

  listSources();
  layout();
})();
