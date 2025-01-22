import { createBoss } from "../boss/createBoss";
import { moveBoss } from "../boss/moveBoss";
import { initDataLevel2 } from "../helpers/initDataLevel2";
import { createSpaceship } from "../spaceship/createSpaceship";

export async function startGame2(app) {
  console.log("запуск 2 рівня");
  initDataLevel2(app);
  await createBoss(app);
  await createSpaceship(app);
}
