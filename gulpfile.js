var gulp = require('gulp');
var coffee = require('gulp-coffee');
var sourcemaps = require('gulp-sourcemaps');
var gulpif = require('gulp-if');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');


var src = {
    js: 'src/**/*.coffee'
};


gulp.task('js', function() {
    gulp.src(src.js)
        .pipe(plumber({
            errorHandler: notify.onError("Error:\n<%= error %>")
        }))
        .pipe(sourcemaps.init())
        .pipe(gulpif(/[.]coffee$/, coffee({
            bare: true
        })))
        .pipe(concat('script.js'))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('./build/js/'))
        ;
});


gulp.task('default', ['js']);


gulp.task('watch', ['js'], function() {
    gulp.watch(src.js, ['js']);
});