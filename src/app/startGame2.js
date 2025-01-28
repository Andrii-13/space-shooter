import { createBoss } from "../boss/createBoss";
import { initDataLevel2 } from "../helpers/initDataLevel2";
import { setGameTime } from "../helpers/setGameTime";
import { setQuantityBullets } from "../helpers/setQuantityBullets";
import { createSpaceship } from "../spaceship/createSpaceship";

export async function startGame2(app) {
  console.log("запуск 2 рівня");
  app.ticker.start();
  initDataLevel2(app);
  await createBoss(app);
  await createSpaceship(app);
  setQuantityBullets(app);
  setGameTime(app);
}
