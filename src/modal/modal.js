export function createModal(app, title) {
  const gameWidth = app.screen.width; // Отримуємо ширину гри
  const gameHeight = app.screen.height; // Отримуємо висоту гри

  const modal = `<div class="modal" style="width: ${gameWidth}px; height: ${gameHeight}px;">
        <div class="inner-container">
          <p class="title">${title}</p>
          <button class="btn next-level" type="button">Next level</button>
          <button class="btn exit-game" type="button">Exit game</button>
        </div>
      </div>`;

  const modalEl = document.querySelector(".modal");
  modalEl.insertAdjacentHTML("beforeend", modal);

  app.ticker.stop();

  // Додаємо обробники для кнопок
  document.querySelector(".next-level").addEventListener("click", () => {
    window.location.reload(); // Перезапускаємо гру
  });

  document.querySelector(".exit-game").addEventListener("click", () => {
    window.location.reload(); // Перезапускаємо гру
  });
}
