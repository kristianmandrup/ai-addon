module.exports = {
  install: require('./install'),
  uninstall: require('./uninstall'),

  create: function(name) {
    console.log('create addon', name);
  }
}