import { Assets, Sprite, Container } from "pixi.js";
import { refs } from "../common/data";
import { moveSpaceship } from "./moveSpaceship";
import { isShoot } from "./isShoot";

export async function createSpaceship(app) {
  let level;

  const spaceshipContainer = new Container();
  app.stage.addChild(spaceshipContainer);
  const spaceshipTexture = await Assets.load("/img/spaceship.png");

  const spaceship = new Sprite(spaceshipTexture);

  spaceship.height = refs.spaceshipHeight;
  spaceship.width = refs.spaceshipWidth;

  spaceship.anchor.set(0.5, 1);

  spaceship.position.set(app.screen.width / 2, app.screen.height);

  app.stage.eventMode = "static"; //Цей рядок встановлює режим обробки подій для всієї сцени (app.stage). У режимі "static" Pixi.js активує обробку подій, але не виконує додаткових перевірок на зміни положення чи розміру елементів, що підвищує продуктивність для статичних об'єктів.
  app.stage.hitArea = app.screen; //Цей рядок визначає область (hitArea) сцени, в межах якої обробляються події (наприклад, натискання, наведення тощо). Тут область встановлюється рівною всьому екрану (app.screen).
  
  
  console.log("створено корабель")
  
  moveSpaceship(app, spaceship);

  if (app.level1 && !app.level2) {
    level = app.level1;
  } else if (app.level1 && app.level2) {  
    level = app.level2;
  }

  isShoot(app, spaceship, level);

  spaceshipContainer.addChild(spaceship);
  
}
