import { destructionAsteroid } from "../asteroid/destruction";
import { refs } from "../common/data";
import { stopGame } from "../helpers/stopGame";
import { createBullet } from "../bullet/createBullet";
import { showRemaindBullets } from "../helpers/setQuantityBullets";
import { functionsInit } from "../common/functionsInit";

export function isShoot(app, spaceship, level) {
  const keys = {};
  const activeBullets = [];
  let totalBullets = refs.totalBullets;
  let quantityMissedShoots = 0;

  function countingBullet(e) {
    keys[e.code] = true;
    if (e.code === "Space" && !keys["SpaceFired"] && totalBullets) {
      keys["SpaceFired"] = true;
      const bullet = createBullet(
        spaceship.x,
        spaceship.y - refs.spaceshipHeight / 1.1
      );
      app.stage.addChild(bullet);
      activeBullets.push(bullet);
      totalBullets -= 1;
      showRemaindBullets(totalBullets);
      level.quantityUsedBullets = refs.totalBullets - totalBullets;
    }
  }

  const handleKeydown = (e) => {
    if (level.levelName === "level1") {
      if (level.asteroids !== level.quantityDistractionAsteroid) {
        countingBullet(e);
      }
    } else if (level.levelName === "level2") {
      countingBullet(e);
    }
  };

  const handleKeyup = (e) => {
    keys[e.code] = false;
    if (e.code === "Space" && keys["SpaceFired"]) {
      keys["SpaceFired"] = false;
    }
  };

  window.addEventListener("keydown", handleKeydown);

  window.addEventListener("keyup", handleKeyup);

  app.handleKeydown = handleKeydown;
  app.handleKeyup = handleKeyup;

  if (!functionsInit.isShootTickerLevel1) {    
    functionsInit.isShootTickerLevel1 = function () {console.log("first")
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
    };
  }

  if (!functionsInit.isShootTickerLevel2) {
    
    functionsInit.isShootTickerLevel2 = function () {console.log("second");
      for (let i = activeBullets.length - 1; i >= 0; i -= 1) {
        const bullet = activeBullets[i];
        bullet.y -= refs.speedBullet; // Рух кулі вгору

        // Видалення кулі, якщо вона виходить за межі екрану
        if (bullet.y < 0) {
          quantityMissedShoots += 1;
          app.stage.removeChild(bullet);
          activeBullets.splice(i, 1);
        }

        app.level2.activeBullets = activeBullets;
      }
    };
  }
  if (level.levelName === "level1") {
    app.ticker.add(functionsInit.isShootTickerLevel1);
  } else if (level.levelName === "level2") {
    app.ticker.add(functionsInit.isShootTickerLevel2);
  }
}
