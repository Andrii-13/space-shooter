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

  let level;

  if (app.level1 && !app.level2) {
    level = app.level1;

    
  }else if(app.level1 && app.level2){
    level = app.level2;
  }

  const timeInterval = setInterval(() => {
    startTime -= 1;
    numericEl.textContent = startTime;
    level.remainingTime = startTime;

    let clearIntervalStatus = false;

    if (startTime <= 0 && !level.stopGame) {
      clearInterval(timeInterval);
      stopGame(app);
      level.stopGame = true;
      clearIntervalStatus = true;
    }

    if (level.stopGame && !clearIntervalStatus) {
      clearInterval(timeInterval);
    }
  }, 1000);
}
