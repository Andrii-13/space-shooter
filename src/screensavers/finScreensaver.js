import { createFinScreensaverHTML } from "../helpers/createFinScreensaverHTML";

export function createFinScreensaver(app) {
  const gameWidth = app.screen.width; 
  const gameHeight = app.screen.height; 

  const screensaverHTML = createFinScreensaverHTML(gameWidth, gameHeight);
  const screensaver = document.getElementById("one");

  screensaver.insertAdjacentHTML("beforeend", screensaverHTML);
  
}


