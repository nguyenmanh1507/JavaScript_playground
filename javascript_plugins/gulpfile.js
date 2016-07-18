const gulp = require('gulp')
const babel = require('gulp-babel')
const plumber = require('gulp-plumber')
const autoprefixer = require('gulp-autoprefixer')

gulp.task('scripts', () => {
  gulp.src('src/modal.js')
    .pipe(plumber())
    .pipe(babel())
    .pipe(gulp.dest('dist'))
})

gulp.task('styles', () => {
  gulp.src('css/*.css')
    .pipe(plumber())
    .pipe(autoprefixer())
    .pipe(gulp.dest('css'))
})

gulp.task('default', ['scripts', 'styles'], () => {
  gulp.watch('src/*.js', ['scripts'])
  gulp.watch('css/*.css', ['styles'])
})
