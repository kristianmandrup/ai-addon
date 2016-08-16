const UnInstaller = require('./uninstaller');

module.exports = function(name) {
  console.log('uninstall addon', name);
  new UnInstaller().uninstall(name);
}