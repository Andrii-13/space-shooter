import { createAsteroid } from "../asteroid/createAsteroid";
import { setGameTime } from "../helpers/setGameTime";
import { setQuantityBullets } from "../helpers/setQuantityBullets";
import { createSpaceship } from "../spaceship/createSpaceship";
import { createSpace } from "../space/createSpace";
import { initDataLevel1 } from "../helpers/initDataLevel1";

export async function startGame(app) {
  initDataLevel1(app);
  await createSpace(app);
  await createSpaceship(app);
  await createAsteroid(app);
  setQuantityBullets(app);
  setGameTime(app);
}
