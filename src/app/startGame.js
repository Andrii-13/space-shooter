import { createAsteroid } from "../asteroid/createAsteroid";
import { setGameTime } from "../helpers/setGameTime";
import { setQuantityBullets } from "../helpers/setQuantityBullets";
import { createSpaceship } from "../spaceship/createSpaceship";
import { createSpace } from "../space/createSpace";
import { initDataLevel1 } from "../helpers/initDataLevel1";

export function startGame(app) {
  const startBtn = document.querySelector(".startBtn");
  const screensaver = document.querySelector(".screensaver");
  const handleClickStartBtn = async () => {
    screensaver.remove();
    initDataLevel1(app);
    await createSpace(app);
    await createSpaceship(app);
    await createAsteroid(app);
    setQuantityBullets(app);
    setGameTime(app);
  };
  startBtn.addEventListener("click", handleClickStartBtn);
}
