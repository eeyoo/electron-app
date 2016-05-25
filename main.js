const {app} = require('electron');
const {BrowserWindow} = require('electron');

let win;
app.on('ready', () => {
  console.log('app is ready...');

  win = new BrowserWindow({width : 800, height : 600});
  win.show();
})
