var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  return gulp.src('./app/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.stream());
});

gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: './app',
      index: 'index.html'
    }
  });

  gulp.watch("app/*.html").on("change", browserSync.reload);
  gulp.watch("app/sass/*.scss", ['sass'], browserSync.reload);
});

gulp.task('default', ['serve'], function () {

});
