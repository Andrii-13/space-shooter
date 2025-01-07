export function moveSpaceship(app, spaceship) {
    
  window.addEventListener("keydown", (e) => {
    const speed = 10;
    if (e.key === "ArrowLeft") {
      spaceship.x = Math.max(spaceship.x - speed, spaceship.width / 2);
    } else if (e.key === "ArrowRight") {
      spaceship.x = Math.min(
        spaceship.x + speed,
        app.screen.width - spaceship.width / 2
      );
    }
  });
}
