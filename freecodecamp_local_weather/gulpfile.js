const gulp    = require('gulp')
const plumber = require('gulp-plumber')
const babel   = require('gulp-babel')

gulp.task('scripts', () => {
  gulp.src('src/app.js')
    .pipe(plumber())
    .pipe(babel())
    .pipe(gulp.dest('dist'))
})

gulp.task('default', ['scripts'], () => {
  gulp.watch('src/**/*.js', ['scripts'])
})
