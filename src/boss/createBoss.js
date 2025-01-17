import { Assets, Container, Sprite } from "pixi.js";

export async function createBoss(app) {
  const bossContainer = new Container();
  app.stage.addChild(bossContainer);
  const bossTexture = await Assets.load("/img/boss.png");

  const boss = new Sprite(bossTexture);

  boss.height = 150;
  boss.width = 100;

  bossContainer.addChild(boss);
}
