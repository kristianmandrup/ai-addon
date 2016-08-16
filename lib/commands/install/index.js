const Installer = require('./installer');

module.exports = function(name) {
  console.log('install addon', name);
  new Installer().install();
}