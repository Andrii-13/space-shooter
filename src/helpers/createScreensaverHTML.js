export function createScreensaverHTML(gameWidth, gameHeight) {
    
    return `
      <div class="screensaver" style="width: ${gameWidth}px; height: ${gameHeight}px;">
        <div class="inner-container inner-container-screensaver">
          <p class="titleGame title">Space shooter</p>
          <p class="titleLevel title"><span>Level </span><span class="numberLevel">1</span></p>
          <button class="startBtn btn" type="button">START NEW GAME</button>
        </div>
      </div>`
}