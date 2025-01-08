import { Container } from "pixi.js";
import { refs } from "../common/data";
import { createBullet } from "./bullet/createBullet";
import { createModal } from "../modal/modal";

export const bullets = []; // Масив для збереження куль

export let totalBullets = refs.totalBullets;
export let stateBullet = false;

export function moveSpaceship(app, spaceship) {
  // Контейнер для куль
  const bulletsContainer = new Container();
  app.stage.addChild(bulletsContainer);

  // Рух корабля
  const keys = {};
  window.addEventListener("keydown", (e) => {
    keys[e.code] = true;

    // Стрільба
    if (e.code === "Space" && !keys["SpaceFired"] && totalBullets > 0) {
      keys["SpaceFired"] = true; // Запобігання багатьом пострілам на одне
      const bullet = createBullet(
        spaceship.x,
        spaceship.y - refs.spaceshipHeight
      );
      bulletsContainer.addChild(bullet);
      bullets.push(bullet);
      totalBullets -= 1;
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
let j = 0;
    // Анімація куль
    for (let i = 0; i < bullets.length; i += 1) {
      console.log(j)
      j+=1
      const bullet = bullets[i];
      bullet.y -= refs.speedBullet; // Рух кулі вгору
     // Видалення кулі, якщо вона виходить за межі екрану
      if (bullet.y < 0) {
        //console.log(j, bullets.length)
        if (totalBullets === 0 && j === bullets.length) {
          console.log(totalBullets);
          const title = "YOU LOSE";
          createModal(app, title);
        }
        bulletsContainer.removeChild(bullet);
        bullets.splice(i, 1);
      }
    }
  });
  return bullets;
}
