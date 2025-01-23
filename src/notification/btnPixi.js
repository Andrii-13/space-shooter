import { Graphics, Text, TextStyle, Container, BlurFilter } from "pixi.js";

export function createButton(app) {
  // 1. Створення контейнера для кнопки
  const btn = new Container();

  // 2. Створення фону кнопки за допомогою Graphics

  const btnWidth = 300; // Ширина кнопки
  const btnHeight = 60; // Висота кнопки

  btn.x = app.screen.width / 2 - btnWidth / 2;
  btn.y = app.screen.height / 2 + 200;

  const buttonText = new Text({ text: "Start game", style: textStyle });
  buttonText.anchor.set(0.5); // Центрування тексту

  // Центрування тексту в кнопці
  buttonText.x = btnWidth / 2;
  buttonText.y = btnHeight / 2;

  // Додавання тексту до кнопки

  const stroke = new Graphics();
  stroke.fill(0x004620).roundRect(0, 0, btnWidth, btnHeight, 10).fill();

  stroke
    .fill(0x7ba05b)
    .roundRect(6, 6, btnWidth - 12, btnHeight - 12, 10)
    .fill();

  const btnShadow = new Graphics();
  btnShadow
    .fill({ color: 0xffffff, alpha: 0.8 }) // Чорна тінь з прозорістю 0.4
    .roundRect(-5, -5, btnWidth + 10, btnHeight + 10, 10) // Зміщення тіні (5, 5)
    .fill();

  btn.addChild(btnShadow);
  const blurFilter = new BlurFilter();
  blurFilter.strength = 5;

  btnShadow.filters = [blurFilter];

  btn.addChild(stroke);
  btn.addChild(buttonText);

  // 5. Додавання подій для ховера
  btn.interactive = true;
  btn.buttonMode = true; // робить кнопку "клікабельною"

  btn.on("pointerover", () => {
    stroke.tint = 0x7ba05b; // Зміна кольору кнопки на ховер
    btnShadow.tint = 0x3d3d3d;
    buttonText.style.fill = 0xffffff;
  });

  btn.on("pointerout", () => {
    stroke.tint = 0xffffff; // Відновлення кольору кнопки
    btnShadow.tint = 0xffffff;
    buttonText.style.fill = 0x000000;

    app.startBtn = true;
  });

  btn.on("pointerdown", () => {
    window.removeEventListener("keydown", keydownListener);
    window.removeEventListener("keyup", keyupListener);
  });


  const keys = {};

  const keydownListener = (e) => {
    if (
      !keys.pressed &&
      (e.code === "Enter" || e.code === "NumpadEnter")
    ) {
      btn.emit("pointerdown");
      keys.pressed = true;

      stroke.tint = 0x7ba05b; // Зміна кольору кнопки
      btnShadow.tint = 0x3d3d3d;
      buttonText.style.fill = 0xffffff;
    }
  };

  const keyupListener = (e) => {
    if (
      keys.pressed &&
      (e.code === "Enter" || e.code === "NumpadEnter")
    ) {
      keys.pressed = false;

      // Відновлення кольору після відпускання клавіші
      stroke.tint = 0xffffff;
      btnShadow.tint = 0xffffff;
      buttonText.style.fill = 0x000000;
    }
  };

  window.addEventListener("keydown", keydownListener);

  window.addEventListener("keyup", keyupListener);

  return btn;
}

const textStyle = new TextStyle({
  fontFamily: "Space", 
  fontSize: 24,
  fill: "#000000", 
  align: "center",
});
