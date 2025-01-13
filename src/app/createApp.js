
import { initApp } from "./initApp";
import { createStartScreensaver } from "../screensavers/startScreensaver";
import { startNotification } from "../notification/startNotification";

export async function createApp() {
  const app = await initApp(); 
 // createStartScreensaver(app);
 startNotification(app)
}
