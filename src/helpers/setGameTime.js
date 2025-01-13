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

    if (startTime <= 0) {
      clearInterval(timeInterval);
      stopGame(app);
      app.level1.stopGame = true;
    }

    if (app.level1.stopGame) {
      clearInterval(timeInterval);
      app.level1.remainingTime = startTime;
      console.log(app.level1.quantityDistractionAsteroid);
      console.log(app.level1.quantityUsedBullets);
      console.log(app.level1.remainingTime);
    }
  }, 1000);
}
