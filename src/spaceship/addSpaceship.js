import { Assets, Sprite, Container } from "pixi.js";
import { refs } from "../common/data";

export async function addSpaceship(app) {
  const spaceshipContainer = new Container();

  app.stage.addChild(spaceshipContainer);
  const spaceshipTexture = await Assets.load("/public/img/spaceship.png");

  const spaceship = new Sprite(spaceshipTexture);

  spaceship.height = refs.spaceshipHeight;
  spaceship.width = refs.spaceshipWidth;
  spaceship.x = app.screen.width / 2;
  spaceship.y = app.screen.height / 2;

  spaceshipContainer.addChild(spaceship);
}
