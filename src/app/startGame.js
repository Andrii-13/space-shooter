import { createAsteroid } from "../asteroid/createAsteroid";
import { setGameTime } from "../helpers/setGameTime";
import { setQuantityBullets } from "../helpers/setQuantityBullets";
import { createSpaceship } from "../spaceship/createSpaceship";

export function startGame(app) {
  const startBtn = document.querySelector(".startBtn");
  const screensaver = document.querySelector(".screensaver");
  const handleClickStartBtn = async () => {
    screensaver.remove();
     //await createSpace(app);
    await createSpaceship(app);
    await createAsteroid(app);
    setQuantityBullets(app);
    setGameTime(app)
  };
  startBtn.addEventListener("click", handleClickStartBtn);
}
