import { createAsteroid } from "../asteroid/createAsteroid";
import { setGameTime } from "../helpers/setGameTime";
import { setQuantityBullets } from "../helpers/setQuantityBullets";
import { createSpaceship } from "../spaceship/createSpaceship";
import { createSpace } from "../space/createSpace";
import { refs } from "../common/data";

export function startGame(app) {
  const startBtn = document.querySelector(".startBtn");
  const screensaver = document.querySelector(".screensaver");
  const handleClickStartBtn = async () => {
    screensaver.remove();
    await createSpace(app);
    await createSpaceship(app);
    await createAsteroid(app);
    setQuantityBullets(app);
    setGameTime(app);
    app.level1 = refs.level1
  };
  startBtn.addEventListener("click", handleClickStartBtn);
}
