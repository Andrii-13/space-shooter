import { hitPoints } from "../boss/hitPoints";
import { refs } from "../common/data";

export function initDataLevel2(app) {
  app.level2 = {
    levelName: "level2",
    remainingTime: refs.gameTime,
    quantityUsedBullets: 0,
    stopGame: false,
    boss: {
      hitPoints: refs.totalHitPoints,
    },
  };
}
