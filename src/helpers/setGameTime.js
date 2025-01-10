import { refs } from "../common/data";


export function setGameTime(app) {
  let startTime = refs.gameTime;

  const gameWidth = app.screen.width; // Отримуємо ширину гри

  const timerHTLM = `<div class="timer" style="width: ${gameWidth}px"><span class="numeric">${startTime}</span> <span>сек</span></div>`;

  const timerWrap = document.getElementById("one");

  timerWrap.insertAdjacentHTML("beforeend", timerHTLM);

  const numericEl = document.querySelector(".numeric");

  const timeInterval = setInterval(() => {
    startTime -= 1;
    numericEl.textContent = startTime;

    if (startTime <= 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
}
