import { hitPoints } from "./hitPoints";

export function moveBoss(app, boss) {
  console.log("запуск руху боса");
  const min = 0;
  const max = app.screen.width - boss.width;
  setInterval(() => {
    const moovingX = Math.floor(Math.random() * (max - min + 1)) + min;
    boss.x = moovingX

   hitPoints(app, boss.x)
    //console.log(app.stage.children)
  }, 2000);
}
