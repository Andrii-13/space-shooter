export function createTimerHTML(gameWidth, startTime) {
    return `<div class="timer" style="width: ${gameWidth}px"><span class="numeric">${startTime}</span> <span>sec</span></div>`
  }
  