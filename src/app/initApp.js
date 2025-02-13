import { Application } from "pixi.js";
import { refs } from "../common/data";

export async function initApp() {
  const app = new Application();

  await app.init({
    background: "gray",
    width: refs.appWidth,
    height: refs.appHeight,
  });

  document.body.appendChild(app.canvas);
  return app;
}
