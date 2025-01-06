import { Application } from "pixi.js";
import { refs } from "../common/data";

export async function createApp() {
    const app = new Application();

    await app.init({ background: "green", width: refs.appWidth, height: refs.appHeight });
  
    document.body.appendChild(app.canvas);

    return app;
}