import { refs } from "../common/data";

export function initDataLevel1(app) {
    app.level1 = {
        remainingTime: refs.gameTime,
        quantityUsedBullets: refs.totalBullets,
        quantityDistractionAsteroid: refs.totalAsteroid,
        stopGame: false,
      }
}