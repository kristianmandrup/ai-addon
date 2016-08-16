const Creator = require('./creator');

module.exports = function(name) {
  console.log('create addon', name);
  new Creator().create();
}

