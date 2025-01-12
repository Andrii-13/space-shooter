import { startGame } from "../app/startGame";
import { createStartScreensaverHTML } from "../helpers/createStartScreensaverHTML";

export function createStartScreensaver(app) {
  const gameWidth = app.screen.width; 
  const gameHeight = app.screen.height; 

  const screensaverHTML = createStartScreensaverHTML(gameWidth, gameHeight);
  const screensaver = document.getElementById("one");

  screensaver.insertAdjacentHTML("beforeend", screensaverHTML);
  startGame(app);
}


