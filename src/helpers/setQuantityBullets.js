import { refs } from "../common/data";

export function setQuantityBullets(app) {
  const initialBullets = refs.totalBullets;
  const gameWidth = app.screen.width;
  const bulletsrHTLM = `<div class="bullets" style="width: ${gameWidth}px"><span>bullets: </span><span class="remaindBullets">${initialBullets}</span><span > / ${initialBullets}</span> </div>`;
  const bulletsEl = document.getElementById("one");
  bulletsEl.insertAdjacentHTML("beforeend",bulletsrHTLM);

}


export function showRemaindBullets(bullets) {
    const bulletsEl = document.querySelector(".remaindBullets");
    bulletsEl.textContent =bullets
}