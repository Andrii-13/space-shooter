import { shot } from "../bullet/shot";
import { refs } from "../common/data";
import { showRemaindBullets } from "../helpers/setQuantityBullets";

export function isShoot(app, spaceship, level) {
    console.log(app)
 
  const keys = {};
  let totalBullets = refs.totalBullets

  const handleShotDown = (e) => {
    if (e.code === "Space" && !keys.shot && totalBullets) {        
      keys[e.code] = true;
      shot(app, spaceship, level);
      keys.shot = true;
      totalBullets -=1
      showRemaindBullets(totalBullets)
      level.quantityUsedBullets = refs.totalBullets - totalBullets
    }
  };

  const handleShotUp = (e) => {
    keys[e.code] = false;
    if (e.code === "Space" && keys.shot) {
      keys.shot = false;
    }
  };

  window.addEventListener("keydown", handleShotDown);
  window.addEventListener("keyup", handleShotUp);
}
