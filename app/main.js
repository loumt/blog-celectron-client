'use strict'
//init
const imageFactory = require('./utils/imagesFactory');

const { app, ipcMain } = require("electron")
const localshortcut = require("electron-localshortcut")

const BlogWindow = require('./windows/BlogWindow')

const Common = require('./configs/Common');
const logger = require('./utils/logger').app();

class BlogClient {
    constructor() {
        this.blogWindow = null;
    }

    init() {
        if (this.checkInstance()) {
            this.initApp();
            this.initIpc();
        }
    }

    initApp() {
        app.on('ready', () => {
            this.createBlogWindow();
        })

        app.on('window-all-closed', () => {
            app.quit()
        })
    }

    checkInstance() {
        return !app.makeSingleInstance((commandLine, workingDirectory) => {
            if (this.blogWindow) {
                this.blogWindow.show();
            }
        });
    }

    initIpc() {
        ipcMain.on('console-log', (msg) => {
            logger.info(`${msg}`);
        })
    }

    createBlogWindow() {
        this.blogWindow = new BlogWindow();
    }
}

new BlogClient().init();