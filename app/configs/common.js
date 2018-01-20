const path = require('path')

class Common {}

Common.SHOW_DEV_TOOLS = false;

//Main Client Config
Common.BLOG_WINDOW_PARAMS = {
    title: 'Blog-Client',
    resizable: true,
    width: 1560,
    height: 960,
    center: true,
    show: true,
    frame: true,
    autoHideMenuBar: true,
    titleBarStyle: 'hidden-inset',
    webPreferences: {
        javascript: true,
        plugins: true,
        nodeIntegration: false,
        webSecurity: false
    },
};

module.exports = Common;