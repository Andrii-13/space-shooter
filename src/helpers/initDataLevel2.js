import { refs } from "../common/data";

export function initDataLevel2(app) {
  app.level2 = {
    remainingTime: refs.gameTime,
    quantityUsedBullets: 0,
    quantityDistractionAsteroid: 0,
    stopGame: false,
  };
}
