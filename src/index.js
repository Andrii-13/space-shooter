//import { Application, Assets, Container, Rectangle, Sprite } from "pixi.js";
import { createApp } from "./app/createApp";
import { addSpace } from "./space/addSpace";
import { addSpaceship } from "./spaceship/addSpaceship";


(async () => {
  const app = await createApp();
  await addSpace(app);
  await addSpaceship(app);
})();
