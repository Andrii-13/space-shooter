import { Graphics } from "pixi.js";
import { refs } from "../../common/data";

export function createBullet(x, y) {
    const bullet = new Graphics();
    bullet.fill(refs.bulletColor); 
    bullet.circle(0, 0, 5); 
    bullet.fill();
    bullet.x = x;
    bullet.y = y;
    return bullet;
  }