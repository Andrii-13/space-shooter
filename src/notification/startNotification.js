import { Text, TextStyle } from "pixi.js";
import { titleStylePixi } from "./notificationStyles";
import { createButton } from "./btnPixi";
import { createSpace } from "../space/createSpace";
import { startGame } from "../app/startGame";

export function startNotification(app) {
  createSpace(app);
  const titleStyle = new TextStyle(titleStylePixi);

  const titleGameName = new Text({ text: "Space shooter", style: titleStyle });

  const titleLevelStyle = new TextStyle({ ...titleStyle, _fontSize: 40 });
  const titleGameLevel = new Text({ text: "Level 1", style: titleLevelStyle });

  titleGameName.x = app.screen.width / 2;
  titleGameName.y = 200;
  titleGameName.anchor.set(0.5);

  titleGameLevel.x = app.screen.width / 2;
  titleGameLevel.y = 300;
  titleGameLevel.anchor.set(0.5);

  const startButton = createButton(app);

  startButton.on("pointerdown", () => {
    // Видалити або сховати заставку
    app.stage.removeChild(titleGameName);
    app.stage.removeChild(titleGameLevel);
    app.stage.removeChild(startButton);

    startGame(app);
  });

  app.stage.addChild(titleGameName);
  app.stage.addChild(titleGameLevel);
  app.stage.addChild(startButton);
}
