
import { initApp } from "./initApp";
import { startNotification } from "../notification/startNotification";
import { startGame2 } from "./startGame2";

export async function createApp() {
  const app = await initApp(); 
 //startNotification(app)
startGame2(app)
}
