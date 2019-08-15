const { app, BrowserWindow } = require('electron')

function createWindow () {
    // Create the browser window.
    let win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            width :700,
            height : 400
        }
    })

    // and load the index.html of the app.
    win.loadFile('app/index.html')
}

app.on('ready', createWindow)