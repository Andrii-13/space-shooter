import { TextStyle } from "pixi.js";
import { titleStylePixi } from "./notificationStyles";
import { refs } from "../common/data";

export function createTitleGame(app) {
  const titleStyle = new TextStyle(titleStylePixi);

  const titleGameName = new Text({
    text: refs.gameName,
    style: titleStyle,
  });

  titleGameName.x = app.screen.width / 2;
  titleGameName.y = 200;
  titleGameName.anchor.set(0.5);

  return {titleGameName, titleStyle}
}

