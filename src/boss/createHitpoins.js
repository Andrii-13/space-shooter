import { Container, Graphics } from "pixi.js";
import { refs } from "../common/data";
import { createHitPoint } from "./createHitpoint";

export function createHitpoins(x, y, quantityHitPoints) {
  const hitPointsContainer = new Container();

  let colorHitPoints;

  switch (quantityHitPoints) {
    case 4:
      colorHitPoints = 0x00ff00;
      break;
    case 3:
      colorHitPoints = 0xffff00;
      break;
    case 2:
      colorHitPoints = 0xff6600;
      break;
    case 1:
      colorHitPoints = 0xff0000;
      break;
    default:
      colorHitPoints = 0x00ff00;
  }

  //hitPoint.stroke({ width: 1, color: 0x00ff00 }); // Обводка (чорна, товщина 4 пікселя)
  let coordX = x;
  for (let i = 0; i < refs.totalHitPoints; i += 1) {
    const hitPoint = createHitPoint(coordX, y, colorHitPoints);
    //hitPoints.push(hitPoint);
    coordX += refs.hitPointsWidth;
    hitPointsContainer.addChild(hitPoint);
  }

  hitPointsContainer.pivot.set(
    (refs.hitPointsWidth * refs.totalHitPoints) / 2,
    0
  );

  hitPointsContainer.x = refs.bossWidth / 2;

  hitPointsContainer.label = "hitPoints";

  return hitPointsContainer;
}
