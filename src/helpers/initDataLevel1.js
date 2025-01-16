import { refs } from "../common/data";

export function initDataLevel1(app) {
  app.level1 = {
    remainingTime: refs.gameTime,
    quantityUsedBullets: 0,
    quantityDistractionAsteroid: 0,
    stopGame: false,
  };
}
