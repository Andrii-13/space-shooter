import { refs } from "../common/data";
import { checkCollision } from "../helpers/checkCollision";
import { stopGame } from "../helpers/stopGame";
import { asteroids } from "./createAsteroid";

let destructions = 0;

export function destructionAsteroid(app, activeBullet, stopBullet, level) {
  let quantityMissedShoots = 0;
  for (let j = asteroids.length - 1; j >= 0; j--) {
    const asteroid = asteroids[j];
    if (checkCollision(activeBullet, asteroid)) {
      asteroids.splice(j, 1); // Якщо сталося зіткнення:Видаляємо астероїд

      app.stage.removeChild(activeBullet);
      level.quantityDistractionAsteroid += 1;

      if (asteroid.parent) {
        // Видаляємо спрайти з контейнерів, перевіряючи, чи існують вони
        asteroid.parent.removeChild(asteroid);
      }

      stopBullet();
      destructions += 1;

      if (
        quantityMissedShoots + destructions === refs.totalBullets &&
        destructions !== app.level1.asteroids
      ) {
        app.level1.stopGame = true;
        stopGame(app);
      }

      if (
        app.level1.quantityDistractionAsteroid === app.level1.asteroids &&
        app.level1.quantityUsedBullets >= 0 &&
        app.level1.remainingTime >= 0 &&
        !app.level1.stopGame
      ) {
        app.level1.gamerStatus = "win";
        app.level1.stopGame = true;
        stopGame(app);
      }

      break; // Виходимо з циклів, бо астероїд і куля вже видалені
    }
  }

  return destructions;
}
