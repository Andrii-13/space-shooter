import { refs } from "../common/data";
import { createTimerHTML } from "./createTimerHTML";
import { stopApp } from "./stopApp";

export function setGameTime(app) {
  let startTime = refs.gameTime;
  const gameWidth = app.screen.width;
  const timerHTML = createTimerHTML(gameWidth, startTime);
  const timerWrap = document.getElementById("one");
  timerWrap.insertAdjacentHTML("beforeend", timerHTML);
  const numericEl = document.querySelector(".numeric");

  const timeInterval = setInterval(() => {
    startTime -= 1;
    numericEl.textContent = startTime;

    if (startTime <= 0) {
      clearInterval(timeInterval);
      stopApp(app);
    }
  }, 1000);
}
