'use strict';
var util = require('util');
var ScriptBase = require('../script-base.js');


var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);

  // if the controller name is suffixed with controller, remove the suffix
  // if the controller name is just "controller," don't append/remove "controller"
  if (this.name && this.name.toLowerCase() !== 'controller' && this.name.substr(-10).toLowerCase() === 'controller') {
    this.name = this.name.slice(0, -10);
  }
  
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createControllerFiles = function createControllerFiles() {
  this.generateSourceAndTest(
    'controller',
    'spec/controller',
    'controllers',
    this.options['skip-add'] || false
  );
};
