import { asteroids } from "./createAsteroid"; // Імпортуємо астероїди

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

        // Видаляємо спрайти з контейнерів
        bullet.parent.removeChild(bullet);
        asteroid.parent.removeChild(asteroid);

        break; // Виходимо з циклів, бо астероїд і куля вже видалені
      }
    }
  }
}

// Функція перевірки зіткнення між кулею і астероїдом
function checkCollision(bullet, asteroid) {
  const bounds1 = bullet.getBounds(); // Отримуємо межі кулі
  const bounds2 = asteroid.getBounds(); // Отримуємо межі астероїда
console.log(bounds1)
  // Перевіряємо, чи перетинаються ці межі
  return (
    bounds1.x + bounds1.width > bounds2.x && // Лівий край кулі за правим краєм астероїда
    bounds1.x < bounds2.x + bounds2.width && // Правий край кулі за лівим краєм астероїда
    bounds1.y + bounds1.height > bounds2.y && // Верхній край кулі за нижнім краєм астероїда
    bounds1.y < bounds2.y + bounds2.height // Нижній край кулі за верхнім краєм астероїда
  );
}
