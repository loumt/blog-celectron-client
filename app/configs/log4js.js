module.exports = {
    appenders: {
        app: {
            type: 'dateFile',
            filename: "./log/app",
            pattern: "-yyyy-MM-dd.log",
            alwaysIncludePattern: true
        }
    },
    categories: {
        default: {
            appenders: ['app'],
            level: 'error'
        },
        app: {
            appenders: ['app'],
            level: 'info'
        }
    }
}