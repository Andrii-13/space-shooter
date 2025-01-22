import { Graphics } from "pixi.js";
import { refs } from "../common/data";

export function createHitPoint(x, y, colorHitPoints) {
  const hitPoint = new Graphics();
  hitPoint.rect(x, y, refs.hitPointsWidth, refs.hitPointsHeight); // (x, y, ширина, висота)
  hitPoint.fill({ color: colorHitPoints });

  return hitPoint;
}
