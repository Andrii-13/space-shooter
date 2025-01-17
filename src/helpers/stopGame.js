import { refs } from "../common/data";
import { finNotification } from "../notification/finNotification";
import { startNotification } from "../notification/startNotification";

export function stopGame(app) {
  const bulletsEl = document.querySelector(".bullets");
  const timerEl = document.querySelector(".timer");

  timerEl.classList.add("visually-hidden");
  bulletsEl.classList.add("visually-hidden");

  // Очистка сцен, видалення елементів

  for (let i = 0; i < app.stage.children.length; i += 1) {
    const child = app.stage.children[i];
    if (child.label !== "space") {
      app.stage.removeChild(child);
    }
  }

  switch (app.level1.gamerStatus) {
    case "":
      finNotification(app);
      break;
    case "win":
      startNotification(app, refs.gameLevel2);
      break;
  }
}
