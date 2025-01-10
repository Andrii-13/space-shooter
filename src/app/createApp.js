
import { initApp } from "./initApp";
import { createStartScreensaver } from "../screensavers/startScreensaver";

export async function createApp() {
  const app = await initApp(); 
  createStartScreensaver(app);
}
