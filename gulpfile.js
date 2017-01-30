var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var watch = require('gulp-watch');
var sass = require('gulp-sass');


gulp.task('serve', function() {
    browserSync.init({
        server: "./"
    });

    gulp.watch("/app/**/*").on('change', browserSync.reload);
});
