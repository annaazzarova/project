var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();


gulp.task('sass', function () {
    gulp.src([
        './scss/style.scss'
    ])
        .pipe($.plumber({errorHandler: $.notify.onError()}))
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.concat('style.css'))
        .pipe($.csso())
        .pipe(gulp.dest('./public/'))
});


gulp.task('js', function() {
    gulp.src([
        './js/*.js'

    ])
        .pipe($.plumber({errorHandler: $.notify.onError()}))
        .pipe($.concat('min.js'))
        .pipe($.uglify())
        .pipe(gulp.dest('./public/'))
});


gulp.task('serve', $.serve({
    root: '../public/',
    port: 3000
}));

gulp.task('watch', function () {
    gulp.watch(['./scss/*.scss'], ['sass']);
    gulp.watch(['./js/*.js'], ['js']);
    // gulp.watch('./images/**/*', ['images']);
});

gulp.task('default', ['watch', 'serve']);