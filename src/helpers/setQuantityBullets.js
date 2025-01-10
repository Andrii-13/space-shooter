import { refs } from "../common/data";
import { createBulletsrHTML } from "./createBulletsrHTML";

export function setQuantityBullets(app) {
  const initialBullets = refs.totalBullets;
  const gameWidth = app.screen.width;
  const bulletsrHTLM = createBulletsrHTML(gameWidth, initialBullets);
  const bulletsEl = document.getElementById("one");
  bulletsEl.insertAdjacentHTML("beforeend", bulletsrHTLM);
}

export function showRemaindBullets(bullets) {
  const bulletsEl = document.querySelector(".remaindBullets");
  bulletsEl.textContent = bullets;
}
