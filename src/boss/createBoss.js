import { Assets, Container, Sprite } from "pixi.js";
import { moveBoss } from "./moveBoss";
import { bossShoot } from "./bossShoot";
import { refs } from "../common/data";
import { hitPoints } from "./hitPoints";
import { woundBoss } from "./woundBoss";

export async function createBoss(app) {
  const bossContainer = new Container();
  app.stage.addChild(bossContainer);
  const bossTexture = await Assets.load("/img/boss.png");

  const boss = new Sprite(bossTexture);

  boss.height = refs.bossHeight;
  boss.width = refs.bossWidth;

  const min = 0;
  const max = app.screen.width - boss.width;
  const moovingX = Math.floor(Math.random() * (max - min + 1)) + min;
  boss.x = moovingX;

  bossContainer.addChild(boss);

  moveBoss(app, boss);
  bossShoot(app, boss);
  hitPoints(app, boss.x);

  console.log(app);

}
