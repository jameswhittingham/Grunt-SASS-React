console.log('********************');
console.log('** GULP SASS REACT Boilerplate **');
console.log('********************');

var gulp = require('gulp'),
  requireDir = require('require-dir'),
  tasks = requireDir('./config/tasks');

/* Default task */
gulp.task('default', ['serve']);