const path = require('path');
const config = require('config');

const CURRENT_PATH = path.resolve(__dirname);
const ROOT_PATH = path.join(__dirname, '../');
const MODULES_PATH = path.join(ROOT_PATH, './node_modules');
const BUILD_PATH = path.resolve(ROOT_PATH, './public/assets');
const DLL_PATH = path.resolve(ROOT_PATH, './public/dll');
const SERVER_PATH = '/assets/';
const SOURCE_PATH = path.join(ROOT_PATH, './frontend');
const ENTRY_PATH = path.join(SOURCE_PATH, './entries');
const TEMPLATES_PATH = path.join(ROOT_PATH, './src/templates');

module.exports = {
  ROOT_PATH,
  BUILD_PATH,
  DLL_PATH,
  MODULES_PATH,
  SERVER_PATH,
  CURRENT_PATH,
  ENTRY_PATH,
  TEMPLATES_PATH,
  SOURCE_PATH
};
