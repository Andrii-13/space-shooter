import { destructionAsteroid } from "../asteroid/destruction";
import { refs } from "../common/data";
import { stopGame } from "../helpers/stopGame";
import { createBullet } from "../bullet/createBullet";
import { showRemaindBullets } from "../helpers/setQuantityBullets";

export function isShoot(app, spaceship) {
  const keys = {};
  const activeBullets = [];
  let totalBullets = refs.totalBullets;
  let quantityMissedShoots = 0;

  window.addEventListener("keydown", (e) => {
    if (app.level1 && !app.level2) {
      if (app.level1.asteroids !== app.level1.quantityDistractionAsteroid) {
          keys[e.code] = true;
          if (e.code === "Space" && !keys["SpaceFired"] && totalBullets) {
            keys["SpaceFired"] = true;
            const bullet = createBullet();
            bullet.x = spaceship.x;
            bullet.y = spaceship.y - refs.spaceshipHeight / 1.1;
            app.stage.addChild(bullet);
            activeBullets.push(bullet);
            totalBullets -= 1;
            showRemaindBullets(totalBullets);
            app.level1.quantityUsedBullets = refs.totalBullets - totalBullets;
          }
      }
    }
  });

  window.addEventListener("keyup", (e) => {
    keys[e.code] = false;
    if (e.code === "Space" && keys["SpaceFired"]) {
      keys["SpaceFired"] = false;
    }
  });

  app.ticker.add(() => {
    for (let i = activeBullets.length - 1; i >= 0; i -= 1) {
      const bullet = activeBullets[i];
      bullet.y -= refs.speedBullet; // Рух кулі вгору
      const destructions = destructionAsteroid(activeBullets);
      app.level1.quantityDistractionAsteroid = destructions;
      // Видалення кулі, якщо вона виходить за межі екрану
      if (bullet.y < 0) {
        quantityMissedShoots += 1;
        app.stage.removeChild(bullet);
        activeBullets.splice(i, 1);
      }
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
    }
  });
}
