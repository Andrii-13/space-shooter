import { createBullet } from "../bullet/createBullet";
import { refs } from "../common/data";

export function bossShoot(app, boss) {
  console.log("бос вистрелив");
  const bullet = createBullet();

  setInterval(() => {
    bullet.x = boss.x + boss.width / 2;
    bullet.y = boss.y + boss.height;
    app.stage.addChild(bullet);
  }, 2000);

  app.ticker.add(() => {
    if (bullet.y < refs.appHeight + refs.bulletDiametr) {
      bullet.y += refs.speedBullet;
    }
  });
}
