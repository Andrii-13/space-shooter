import { Text, TextStyle } from "pixi.js";
import { titleStylePixi } from "./notificationStyles";
import { createButton } from "./btnPixi";
import { createSpace } from "../space/createSpace";
import { startGame } from "../app/startGame";
import { refs } from "../common/data";
import { startGame2 } from "../app/startGame2";

export function startNotification(app, level) {
  createSpace(app);
  const gameLevel = level ? refs.gameLevel2 : refs.gameLevel1;

  const titleStyle = new TextStyle(titleStylePixi);
  const titleGameName = new Text({ text: refs.gameName, style: titleStyle });
  const titleLevelStyle = new TextStyle({ ...titleStyle, _fontSize: 40 });
  const subTitle = new Text({ text: gameLevel, style: titleLevelStyle });

  titleGameName.x = app.screen.width / 2;
  titleGameName.y = 200;
  titleGameName.anchor.set(0.5);

  subTitle.x = app.screen.width / 2;
  subTitle.y = 300;
  subTitle.anchor.set(0.5);

  const startButton = createButton(app);

  startButton.on("pointerdown", () => {
    // Видалити або сховати заставку
    app.stage.removeChild(titleGameName);
    app.stage.removeChild(subTitle);
    app.stage.removeChild(startButton);
    
    switch (gameLevel) {
      case "Level 1":
       startGame(app);
        break;
      case "Level 2":
        startGame2(app)
        break;
    }
  });

  app.stage.addChild(titleGameName);
  app.stage.addChild(subTitle);
  app.stage.addChild(startButton);
}
