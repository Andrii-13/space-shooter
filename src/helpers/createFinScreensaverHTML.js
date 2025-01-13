export function createFinScreensaverHTML(gameWidth, gameHeight) {

  
  return `
      <div
      class="screensaver"
      style="width: ${gameWidth}px; height: ${gameHeight}px;"
    >
      <div class="inner-container inner-container-screensaver">
        <p class="titleGame title">Space shooter</p>
        <p class="titleLevel title">YOU LOSE</p>
        <div class="buttons-wrap">
          <button class="playAgainBtn btn" type="button">PLAY AGAIN</button>
          <button class="exitBtn btn" type="button">EXIT GAME</button>
        </div>
      </div>
    </div>`;
}
