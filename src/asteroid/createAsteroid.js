import { Assets, Container, Sprite, Color } from "pixi.js";
import { refs } from "../common/data";

export async function createAsteroid(app) {
  const asteroidContainer = new Container();
  app.stage.addChild(asteroidContainer);

  const asteroidTexture = await Assets.load("/img/asteroid.png");

  for (let i = 0; i < 5; i += 1) {
    const asteroid = new Sprite(asteroidTexture);

    asteroid.width = refs.asteroidWidth;
    asteroid.height = refs.asteroidHeight;

    asteroid.x = Math.random() * (app.screen.width - refs.asteroidWidth / 2);
    asteroid.y =
      Math.random() * (app.screen.height / 2 - refs.asteroidHeight / 2);

    asteroidContainer.addChild(asteroid);
  }

}
