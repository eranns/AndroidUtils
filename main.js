const electron = require('electron');

const remote=electron.remote;
const BrowserWindow = electron.BrowserWindow;
const ipc = electron.ipcMain
const app=electron.app

// remote.getGlobal("adb").favourites = favourites;

function createWindow () {
    // Create the browser window.
    let win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    })

    // and load the index.html of the app.
    win.loadFile('app/index.html')
}

app.on('ready', createWindow);


ipc.on('adb-getdevice', async (event, arg) => {
        event.returnValue=adb.getDevices();


});
//     console.log("adb");
//     result = new Promise()
//      adb.getDevices().then(function(result){
//         console.log(result);
//         console.log("aaa")
//         event.reply('adb-getdevice', result)
//         // event.returnValue=result;
//     }).catch(function(error){
//         console.log(error)
//     })
//
// });