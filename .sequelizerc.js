const path= require('path');

module.exports = {
    config: path.resolve('./dataBase/config', 'config.js'),
    'models-path': path.resolve('./dataBase/models'),
    'seeders-path': path.resolve('./dataBase/seeders'),
    'migrations-path': path.resolve('./dataBase/migrations'),
}