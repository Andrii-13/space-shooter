// Функція перевірки зіткнення між кулею і мішенню
export function checkCollision(bullet, target) {
    const bounds1 = bullet.getBounds(); // Отримуємо межі кулі
    const bounds2 = target.getBounds(); // Отримуємо межі мішені
    // Перевіряємо, чи перетинаються ці межі
    return (
      bounds1.x + bounds1.width > bounds2.x && // Лівий край кулі за правим краєм мішені
      bounds1.x < bounds2.x + bounds2.width && // Правий край кулі за лівим краєм мішені
      bounds1.y + bounds1.height > bounds2.y && // Верхній край кулі за нижнім краєм мішені
      bounds1.y < bounds2.y + bounds2.height // Нижній край кулі за верхнім краєм мішені
    );
  }