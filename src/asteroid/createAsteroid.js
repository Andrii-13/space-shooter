import { Assets, Container, Sprite } from "pixi.js";
import { refs } from "../common/data";

export const asteroids = [];

export async function createAsteroid(app) {
  const asteroidContainer = new Container();
  app.stage.addChild(asteroidContainer);

  const asteroidTexture = await Assets.load("/img/asteroid.png");



  for (let i = 0; i < refs.totalAsteroid; i += 1) {
    const asteroid = new Sprite(asteroidTexture);

    asteroid.width = refs.asteroidWidth;
    asteroid.height = refs.asteroidHeight;

    asteroid.x = Math.random() * (app.screen.width - refs.asteroidWidth);
    asteroid.y =
      Math.random() * (app.screen.height / 2 - refs.asteroidHeight);

    asteroids.push(asteroid);

      asteroidContainer.addChild(asteroid);
  }

}
