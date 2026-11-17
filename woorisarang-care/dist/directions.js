const mapContainer = document.getElementById('daumRoughmapContainer1794933093921');
const Roughmap = window.daum?.roughmap?.Lander;

if (Roughmap) {
  const width = mapContainer.parentElement.clientWidth;
  const height = Math.min(490, Math.max(325, Math.round(width * 0.55)));
  new Roughmap({
    timestamp: '1794933093921',
    key: '57kj6h2s5rg',
    mapWidth: String(width),
    mapHeight: String(height)
  }).render();
}
