import { destruction } from "../asteroid/destruction";
import { refs } from "../common/data";
import { createBullet } from "./bullet/createBullet";

export function isShoot(app, spaceship) {
  const keys = {};
  const activeBullets = [];
  let totalBullets = refs.totalBullets;

  window.addEventListener("keydown", (e) => {
    keys[e.code] = true;
    if (e.code === "Space" && !keys["SpaceFired"] && totalBullets) {
      keys["SpaceFired"] = true;
      const bullet = createBullet();
      bullet.x = spaceship.x;
      bullet.y = spaceship.y - refs.spaceshipHeight / 1.1;
      app.stage.addChild(bullet);
      activeBullets.push(bullet);
      totalBullets -= 1;
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
      bullet.y -= 10; // Рух кулі вгору
      destruction(activeBullets);

      // Видалення кулі, якщо вона виходить за межі екрану
      if (bullet.y < 0) {
        app.stage.removeChild(bullet);
        activeBullets.splice(i, 1);
      }
    }
  });
}
