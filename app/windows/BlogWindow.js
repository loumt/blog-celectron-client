'use strict';

const path = require('path');
const _ = require('lodash');
const ImageFactory = require('./../utils/imagesFactory')
const { app, shell, BrowserWindow } = require('electron');
const electronLocalShortcut = require('electron-localshortcut');
const Common = require('./../configs/Common');

class BlogWindow {
    constructor() {
        this.createWindow();
        this.initWindowContent();
        this.initWindowEvents();
        this.initWindowShortcut();
    }

    createWindow() {
        this.blogWindow = new BrowserWindow({
            title: 'Blog-Client',
            resizable: true,
            width: 1560,
            height: 960,
            center: true,
            show: true,
            icon: ImageFactory.getImageResource('icon', '256', 'png'),
            frame: true,
            autoHideMenuBar: true,
            titleBarStyle: 'hidden-inset',
            webPreferences: {
                javascript: true,
                plugins: true,
                nodeIntegration: false,
                webSecurity: false
            },
        });
    }

    loadURL(url) {
        this.blogWindow.loadURL(url);
    }

    show() {
        this.blogWindow.show();
        this.blogWindow.focus();
    }

    hide() {
        this.blogWindow.hide();
    }

    close() {
        this.blogWindow.close();
    }


    initWindowContent() {
        this.loadURL('http://www.baidu.com')
    }

    initWindowEvents() {
        this.blogWindow.on('close', (e) => {
            this.unregisterLocalShortCut();
        });

        this.blogWindow.on('show', () => {
            this.registerLocalShortcut();
        });
    }

    registerLocalShortcut() {
        electronLocalShortcut.register(this.blogWindow, 'Esc', () => {
            this.blogWindow.hide();
        });
    }

    unregisterLocalShortCut() {
        electronLocalShortcut.unregisterAll(this.blogWindow);
    }

    initWindowShortcut() {
        this.registerLocalShortcut();
    }


}

module.exports = BlogWindow;