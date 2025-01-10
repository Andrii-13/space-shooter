import { createSpace } from "../space/createSpace";
import { createSpaceship } from "../spaceship/createSpaceship";
import { createAsteroid } from "../asteroid/createAsteroid";
import { initApp } from "./initApp";
import { setGameTime } from "../helpers/setGameTime";

export async function createApp() {
  const app = await initApp();
  //await createSpace(app);
  await createSpaceship(app);
  await createAsteroid(app);
  setGameTime(app);
}
