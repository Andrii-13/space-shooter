// import { checkCollision } from "../helpers/checkCollision";
// import { functionsInit.isShootTickerLevel2 } from "../spaceship/isShoot";

export function woundBoss(app, boss) {
  let displacement;

  app.ticker.add(() => {
    if (displacement !== boss.x) {
      displacement = boss.x;
      console.log(displacement);
      //console.log(functionsInit.isShootTickerLevel2)
    }
  });
}
