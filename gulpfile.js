const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('assets/sass/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets/css/style.css'));
});

gulp.task('watch', function () {
  gulp.watch('assets/sass/*.scss', gulp.parallel('sass'));
});