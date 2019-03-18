var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require("gulp-notify");

sass.compiler = require('node-sass');

gulp.task('sass', function() {
  return gulp.src('./assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(notify('Styles Processed.'))
    .pipe(gulp.dest('./'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('./assets/scss/**/*.scss',['sass']);
});