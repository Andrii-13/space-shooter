import { Assets, Sprite, Container } from "pixi.js";
import { refs } from "../common/data";
import { moveSpaceship } from "./moveSpasechip";

export async function addSpaceship(app) {
  const spaceshipContainer = new Container();

  app.stage.addChild(spaceshipContainer);
  const spaceshipTexture = await Assets.load("/img/spaceship.png");

  const spaceship = new Sprite(spaceshipTexture);

  spaceship.height = refs.spaceshipHeight;
  spaceship.width = refs.spaceshipWidth;

  spaceship.anchor.set(0.5, 1);

  spaceship.position.set(app.screen.width / 2, app.screen.height);

  app.stage.eventMode = "static";

  app.stage.hitArea = app.screen;

  moveSpaceship(app, spaceship);

  spaceshipContainer.addChild(spaceship);
}
