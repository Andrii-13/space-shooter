import { createAsteroid } from "../asteroid/createAsteroid";
import { setGameTime } from "../helpers/setGameTime";
import { setQuantityBullets } from "../helpers/setQuantityBullets";
import { createSpaceship } from "../spaceship/createSpaceship";
import { initDataLevel1 } from "../helpers/initDataLevel1";

export async function startGame(app) {
  initDataLevel1(app);
  await createSpaceship(app);
  await createAsteroid(app);
  setQuantityBullets(app);
  setGameTime(app);
}

// добавити заставки перемога і програш
// пофіксити збиття астероіда саме коли дотик до астероіда
// пофіксити секунди в ХТМЛ
// пофіксити збірку ВІТ
// пофіксити завантаження шрифта в Ріхі
// додати лоадер
