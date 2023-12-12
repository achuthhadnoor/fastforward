import { app, BrowserWindow, ipcMain } from "electron";
import { hostname } from "os";
import { PRE_LOAD_URL, ROUTES } from "../utils/constants";

interface Ilapse {
  hostname: string;
}
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Electron {
    interface App {
      lapse: Ilapse;
    }
  }
}
app.lapse = {
  hostname: "",
};
export const readyApp = () => {
  /**
   * check license
   * check permissions
   *
   */
  // ready app code
  console.log("====================================");
  console.log("hostname", hostname());
  console.log("====================================");

  app.lapse.hostname = hostname();
  createWindow();
};

export const createWindow = (): void => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height: 570,
    width: 400,
    alwaysOnTop: true,
    webPreferences: {
      preload: PRE_LOAD_URL,
    },
    transparent: true,
    vibrancy: "sidebar",
    titleBarStyle: "customButtonsOnHover",
    trafficLightPosition: { x: 16, y: 16 },
  });
  console.log("====================================");
  console.log(ROUTES.home);
  console.log("====================================");
  // and load the index.html of the app.
  mainWindow.loadURL(ROUTES.home);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // Example IPC handler in the main process
  ipcMain.handle("license-verify-key", (event, data) => {
    console.log("Received data from renderer process:", data);
    // Process data and send a response back if needed
    return "Response from main process";
  });
};
