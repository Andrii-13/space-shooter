import { refs } from "../common/data";
import { finNotification } from "../notification/finNotification";
import { startNotification } from "../notification/startNotification";

export function stopGame(app) {
  const bulletsEl = document.querySelector(".bullets");
  const timerEl = document.querySelector(".timer");

  timerEl.remove();
  bulletsEl.remove();

  // Очистка сцен, видалення елементів

  for (let i = app.stage.children.length - 1; i >= 0; i -= 1) {
    const child = app.stage.children[i];
    if (child.label !== "space") {
      app.stage.removeChild(child);
    }
  }


  if (app.ticker) {
    //app.ticker.stop(); // Зупиняє оновлення кадрів
    app.ticker.remove(); // Очищає всі функції, які були додані до ticker
    // app.ticker.removeAll(); // Видаляє всі функції з ticker
  }



  if (app.handleKeydown) {
    window.removeEventListener("keydown", app.handleKeydown);
  }
  if (app.handleKeyup) {
    window.removeEventListener("keyup", app.handleKeyup);
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
