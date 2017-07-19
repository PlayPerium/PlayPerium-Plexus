var electron = require('electron');
var {app, BrowserWindow, Menu} = electron;

var mainForm;

class WindowManager {

    createForm() {
        mainForm = new BrowserWindow({
            width: 1500, 
            height: 870, 
            minWidth: 1500, 
            minHeight: 870, 
            center: true, 
            title: 'PlayPerium Plexus'
            })

            mainForm.maximize();
    }

    setFormMenu() {
        var formMenu = [
            {
                label: 'Plexus',
                submenu: [
                    {
                        label: 'Einstellungen',
                        click() {openSettinsWindow();}
                    },
                    {
                        label: 'Beenden',
                        click() {app.quit();}
                    }
                ]
            },
            {
                label: 'Hilfe',
                submenu: [
                    {
                        label: 'Über Plexus',
                        click() {openAboutWindow();}
                    }
                ]
            }, 
        ];

        Menu.setApplicationMenu(Menu.buildFromTemplate(formMenu));
    }
}

function openAboutWindow() {
    var aboutWindow = new BrowserWindow({
        width: 800,
        height: 330,
        parent: mainForm,
        modal: true,
        resizable: false,
        maximizable: false,
        minimizable: false
        })

    aboutWindow.setMenu(null);

    aboutWindow.loadURL(`file://${__dirname}/about.html`);

    aboutWindow.once('ready-to-show', () => {
    aboutWindow.show()
    })
}

function openSettinsWindow() {
    var settingsWindow = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 700, 
        minHeight: 400,
        center: true,
        maximizable: false
        })

    settingsWindow.setMenu(null);

    settingsWindow.loadURL(`file://${__dirname}/settings.html`);

    settingsWindow.once('ready-to-show', () => {
    settingsWindow.show()
    })
}

module.exports = new WindowManager();