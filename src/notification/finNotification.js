import { Text, TextStyle } from "pixi.js";
import { titleStylePixi } from "./notificationStyles";

export function finNotification(app) {
  const titleStyle = new TextStyle(titleStylePixi);

  const winner = app.level1.gamerStatus;

  const titleLevelStyle = new TextStyle({ ...titleStyle, _fontSize: 80})
  const subTitle = new Text({ text: (winner ? "YOU WIN" : "YOU LOSE"), style: titleLevelStyle });

  subTitle.x = app.screen.width / 2;
  subTitle.y = 300;
  subTitle.anchor.set(0.5);

  app.stage.addChild(subTitle);
}
