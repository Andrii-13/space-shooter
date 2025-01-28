import { destructionAsteroid } from "../asteroid/destruction";
import { refs } from "../common/data";
import { createBullet } from "./createBullet";

export function shot(app, spaceship, level) {
  const bullet = createBullet(spaceship.x, spaceship.y - refs.spaceshipHeight);
  app.stage.addChild(bullet);

  let bulletStopped = false;

  const stopBullet = () => {
    bulletStopped = true;
  };

  app.ticker.add(() => {
    if (!bulletStopped) {
      if (level.levelName === "level1") {
        destructionAsteroid(app, bullet, stopBullet, level); // умова видалення кулі для 1 рівня
      }
      if (!bulletStopped) {
        flightDelBullet(app, bullet, stopBullet); // загальна умова для всіх рівнів
      }
    }
  });
}

function flightDelBullet(app, bullet, stopBullet) {
  bullet.y -= refs.speedBullet;
  if (bullet.y < 0) {
    // Видаляємо кулю зі сцени
    app.stage.removeChild(bullet);
    // Викликаємо callback, щоб зупинити рух кулі
    stopBullet();
    console.log("куля видалилась");
  }
}
