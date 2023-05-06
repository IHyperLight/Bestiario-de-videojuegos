const { app, BrowserWindow} = require('electron');

app.on('ready', () =>{
    let win = new BrowserWindow ({title:'VentanaHTML',
    webPreferences:{
        nodeIntegration: true,
        contextIsolation: false,
    }
     });

    win.loadFile('index.html');
    win.show();

    win.on('closed', () =>{
        win = null;
        app.quit;
    });
});