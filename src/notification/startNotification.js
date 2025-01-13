import { Color, FillGradient, Text, TextStyle } from "pixi.js";

export function startNotification(app) {
  const titleStyle = new TextStyle({
    fontFamily: "Space",
    dropShadow: {
      alpha: 0.8,
      angle: 2.1,
      blur: 4,
      color: "0x111111",
      distance: 10,
    },
    fill: "#7BA05B",
    stroke: { color: "#004620", width: 12, join: "round" },
    fontSize: 60,
    fontWeight: "lighter",
  });

  const gameName = new Text({ text: "Space shooter", style: titleStyle });

  const titleLevelStyle = new TextStyle({ ...titleStyle, _fontSize: 40 });
  console.log(titleLevelStyle)
  console.log(titleStyle)
  const gameLevel = new Text({ text: "Level 1", style: titleLevelStyle });

  gameName.x = app.screen.width / 2;
  gameName.y = 100;
  gameName.anchor.set(0.5);

  gameLevel.x = app.screen.width / 2;
  gameLevel.y = 200;
  gameLevel.anchor.set(0.5);

  app.stage.addChild(gameName);
  app.stage.addChild(gameLevel);
}
