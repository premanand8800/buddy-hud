const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('hud', {
  onState: (cb) => ipcRenderer.on('state', (_e, s) => cb(s)),
  onAura: (cb) => ipcRenderer.on('aura', (_e, a) => cb(a)),
  onPet: (cb) => ipcRenderer.on('pet', (_e, p) => cb(p)),
  onAlert: (cb) => ipcRenderer.on('alert', (_e, k) => cb(k)),
  onRefit: (cb) => ipcRenderer.on('refit', () => cb()),
  send: (channel, data) => ipcRenderer.send(channel, data),
});
