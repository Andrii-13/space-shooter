export function createBulletsrHTML(gameWidth, initialBullets) {
  return `<div class="bullets" style="width: ${gameWidth}px"><span>bullets: </span><span class="remaindBullets">${initialBullets}</span><span > / ${initialBullets}</span> </div>`;
}
