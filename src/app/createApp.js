import { createSpace } from "../space/createSpace";
import { createSpaceship } from "../spaceship/createSpaceship";
import { createAsteroid } from "../asteroid/createAsteroid";
import { checkCollisions } from "../common/collisions";
import { initApp } from "./initApp";

export async function createApp() {
  const app = await initApp();
  await createSpace(app);
  await createSpaceship(app);
  await createAsteroid(app);
  checkCollisions(app);
  
}
