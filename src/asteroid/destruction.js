import { asteroids } from "./createAsteroid"; // Імпортуємо астероїди

let destructions = 0;

export function destruction(activeBullets) {
  for (let i = activeBullets.length - 1; i >= 0; i--) {
    const bullet = activeBullets[i];

    for (let j = asteroids.length - 1; j >= 0; j--) {
      const asteroid = asteroids[j];
      if (checkCollision(bullet, asteroid)) {
        // Якщо сталося зіткнення:
        // Видаляємо кулю і астероїд
        activeBullets.splice(i, 1);
        asteroids.splice(j, 1);
        // Видаляємо спрайти з контейнерів, перевіряючи, чи існують вони
        if (bullet.parent) {
          bullet.parent.removeChild(bullet);
        }

        if (asteroid.parent) {
          asteroid.parent.removeChild(asteroid);
        }
        destructions += 1;
        break; // Виходимо з циклів, бо астероїд і куля вже видалені
      }
    }
  }
  //app.level1.quantityDistractionAsteroid = destructions;
  return destructions;
}

// Функція перевірки зіткнення між кулею і астероїдом
function checkCollision(bullet, asteroid) {
  const bounds1 = bullet.getBounds(); // Отримуємо межі кулі
  const bounds2 = asteroid.getBounds(); // Отримуємо межі астероїда
  // Перевіряємо, чи перетинаються ці межі
  return (
    bounds1.x + bounds1.width > bounds2.x && // Лівий край кулі за правим краєм астероїда
    bounds1.x < bounds2.x + bounds2.width && // Правий край кулі за лівим краєм астероїда
    bounds1.y + bounds1.height > bounds2.y && // Верхній край кулі за нижнім краєм астероїда
    bounds1.y < bounds2.y + bounds2.height // Нижній край кулі за верхнім краєм астероїда
  );
}
