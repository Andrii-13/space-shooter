import { createApp } from "./app/createApp";
import { createAsteroid } from "./asteroid/createAsteroid";
import { createSpace } from "./space/createSpace"; 
import { createSpaceship } from "./spaceship/createSpaceship";


(async () => {
  const app = await createApp();
  await createSpace(app);
  await createSpaceship(app);
  await createAsteroid(app)
})();
