// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from "electron";

// Expose functions to the renderer process
contextBridge.exposeInMainWorld("electronAPI", {
  // Example function that communicates with the main process via IPC
  sendToMain: async (channel: string, data: any) => {
    const response = await ipcRenderer.invoke(channel, data);
    return response;
  },
  License: {
    verifyKey: async (key: string, userInfo: any) =>
      await ipcRenderer.invoke("license-verify-key", key, userInfo),
    saveKey: async (args: any) => {
      await ipcRenderer.invoke("license-save-key", args);
    },
    getText: async () => await ipcRenderer.invoke("license-get-text"),
  },
  permissions: async (channel: string, data: any) => {
    const response = await ipcRenderer.invoke(channel, data);
    return response;
  },
});
