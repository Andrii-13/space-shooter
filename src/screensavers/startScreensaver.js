import { startGame } from "../app/startGame";
import { createScreensaverHTML } from "../helpers/createScreensaverHTML";

export function createStartScreensaver(app) {
  const gameWidth = app.screen.width; 
  const gameHeight = app.screen.height; 

  const screensaverHTML = createScreensaverHTML(gameWidth, gameHeight);
  const screensaver = document.getElementById("one");

  screensaver.insertAdjacentHTML("beforeend", screensaverHTML);
  startGame(app);
}


