var istanbul = require('gulp-istanbul');
var isparta = require('isparta');
var gulp = require('gulp');
// We'll use mocha in this example, but any test framework will work 
var mocha = require('gulp-mocha');
//var remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');

gulp.task('pre-test', function () {
  return gulp.src(['src/*.js'])
    // Covering files 
    .pipe(istanbul({
      instrumenter: isparta.Instrumenter,
      includedUntested: true
    }))
    // Force `require` to return covered files 
    .pipe(istanbul.hookRequire());
});
 
gulp.task('test', ['pre-test'], function () {
  return gulp.src(['tests/*.js'])
    .pipe(mocha())
    // Creating the reports after tests ran 
    .pipe(istanbul.writeReports())
    // Enforce a coverage of at least 90% 
    .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }));
});

