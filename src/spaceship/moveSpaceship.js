import { refs } from "../common/data";

export function moveSpaceship(app, spaceship) {
  
  const keys = {};

  window.addEventListener("keydown", (e) => {
    keys[e.code] = true;
  });

  window.addEventListener("keyup", (e) => {
    keys[e.code] = false;
  });

  app.ticker.add(() => {
   
    if (keys["ArrowLeft"]) {
      spaceship.x = Math.max(
        spaceship.x - refs.speedSpaceship,
        spaceship.width / 2
      );
    }
    if (keys["ArrowRight"]) {
      spaceship.x = Math.min(
        spaceship.x + refs.speedSpaceship,
        app.screen.width - spaceship.width / 2
      );
    }

  });
}
