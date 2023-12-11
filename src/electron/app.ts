import { BrowserWindow } from "electron";
import { hostname } from "os";
import { PRE_LOAD_URL, ROUTES } from "../utils/constants";

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
  createWindow();
};

export const createWindow = (): void => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height: 550,
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
};
