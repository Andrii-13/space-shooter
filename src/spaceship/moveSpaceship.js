import { Container } from "pixi.js";
import { refs } from "../common/data";
import { createBullet } from "./bullet/createBullet";

export function moveSpaceship(app, spaceship) {
  // Контейнер для куль
  const bulletsContainer = new Container();
  app.stage.addChild(bulletsContainer);

  const bullets = []; // Масив для збереження куль

  // Рух корабля
  const keys = {};
  window.addEventListener("keydown", (e) => {
    keys[e.code] = true;

    // Стрільба
    if (e.code === "Space" && !keys["SpaceFired"]) {
      keys["SpaceFired"] = true; // Запобігання багатьом пострілам на одне
      const bullet = createBullet(
        spaceship.x,
        spaceship.y - refs.spaceshipHeight
      );
      bulletsContainer.addChild(bullet);
      bullets.push(bullet);
    }
  });

  window.addEventListener("keyup", (e) => {
    keys[e.code] = false;

    if (e.code === "Space") {
      keys["SpaceFired"] = false;
    }
  });

  app.ticker.add(() => {
    // Рух корабля
    if (keys["ArrowLeft"]) {
      spaceship.x = Math.max(
        spaceship.x - refs.speedSpaceship,
        spaceship.width / 2
      );
    }
    if (keys["ArrowRight"]) {
      spaceship.x = Math.min(
        spaceship.x + refs.speedSpaceship,
        app.screen.width - spaceship.width / 2
      );
    }

    // Анімація куль
    for (let i = bullets.length - 1; i >= 0; i--) {
      const bullet = bullets[i];
      bullet.y -= refs.speedBullet; // Рух кулі вгору

      // Видалення кулі, якщо вона виходить за межі екрану
      if (bullet.y < 0) {
        bulletsContainer.removeChild(bullet);
        bullets.splice(i, 1);
      }
    }
  });
}
