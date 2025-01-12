export function stopApp(app) {
const bulletsEl = document.querySelector(".bullets");
const timerEl = document.querySelector(".timer")

timerEl.classList.add("visually-hidden");
bulletsEl.classList.add("visually-hidden")

    // Очистка сцен, видалення елементів
    while (app.stage.children.length > 0) {
      app.stage.removeChild(app.stage.children[0]);
    }
  
  }