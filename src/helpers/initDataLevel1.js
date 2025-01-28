import { refs } from "../common/data";

export function initDataLevel1(app) {
  app.level1 = {
    levelName: "level1",
    gamerStatus: "",
    remainingTime: refs.gameTime,
    quantityUsedBullets: 0,
    quantityDistractionAsteroid: 0,
    stopGame: false,
  };
}
