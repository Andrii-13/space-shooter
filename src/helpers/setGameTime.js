import { refs } from "../common/data";
import { createTimerHTML } from "./createTimerHTML";
import { stopGame } from "./stopGame";

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
    app.level1.remainingTime = startTime;

    let clearIntervalStatus = false;

    if (startTime <= 0 && !app.level1.stopGame) {
      clearInterval(timeInterval);
      stopGame(app);
      app.level1.stopGame = true;
      console.log("кінчився час", app.level1)
      clearIntervalStatus = true
    }

    if (app.level1.stopGame && !clearIntervalStatus) {
      clearInterval(timeInterval);
      console.log("стоп таймер");
    }
  }, 1000);
}
