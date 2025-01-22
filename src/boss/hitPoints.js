import { refs } from "../common/data";
import { createHitpoins } from "./createHitpoins";

export function hitPoints(app, x) {
  const y = 10;

    // Шукаємо існуючий контейнер хіт-поінтів
    const existingHitPoints = app.stage.children.find(child => child.label === "hitPoints");

    // Видаляємо його, якщо він є
    if (existingHitPoints) {
      app.stage.removeChild(existingHitPoints);
    }

  const quantityHitPoints = refs.totalHitPoints;
  const hitPoints = createHitpoins(x, y, quantityHitPoints);
  app.stage.addChild(hitPoints);
}
