import { Assets, Sprite, Container } from "pixi.js";

export async function createSpace(app) {
  const container = new Container();

  app.stage.addChild(container);

  const texture = await Assets.load("/img/space-bcg.png");

  const space = new Sprite(texture);

  space.height = app.screen.height;
  space.width = app.screen.width;

  container.addChild(space);
}
