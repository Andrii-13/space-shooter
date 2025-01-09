import { asteroids } from "../asteroid/createAsteroid";
import { createModal } from "../modal/modal";
import { bullets } from "../spaceship/moveSpaceship";
import { totalBullets } from "../spaceship/moveSpaceship";

export function checkCollisions(app) {
  
  app.ticker.add(() => {
    
    for (let i = bullets.length - 1; i >= 0; i--) {
      console.log(bullets.length)
      const bullet = bullets[i];

      for (let j = asteroids.length - 1; j >= 0; j--) {
        const asteroid = asteroids[j];

        if (checkCollision(bullet, asteroid)) {
          // Видаляємо кулю і астероїд після зіткнення
          bullets.splice(i, 1);
          asteroids.splice(j, 1);

          // Видаляємо спрайти з контейнерів
          bullet.parent.removeChild(bullet);
          asteroid.parent.removeChild(asteroid);

          break;
        }
      }
      let title;
      if (asteroids.length === 0 && totalBullets >= 0) {
        title = "YOU WIN";
        createModal(app, title);
        return;
      } else if (asteroids.length > 0 && totalBullets <= 0) {
        title = "YOU LOSE";
        createModal(app, title);
        return;
      }
    }
  });
}

function checkCollision(bullet, asteroid) {
  const bounds1 = bullet.getBounds();
  const bounds2 = asteroid.getBounds();
  return (
    bounds1.x + bounds1.width > bounds2.x &&
    bounds1.x < bounds2.x + bounds2.width &&
    bounds1.y + bounds1.height > bounds2.y &&
    bounds1.y < bounds2.y + bounds2.height
  );
}
