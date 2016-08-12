const gulp    = require('gulp')
const babel   = require('gulp-babel')
const plumber = require('gulp-plumber')
const jshint  = require('gulp-jshint')

gulp.task('scripts', () => {
  gulp.src('src/*.js')
    .pipe(plumber())
    .pipe(babel())
    .pipe(gulp.dest('dist'))
})

gulp.task('lint:js', () => {
  gulp.src('src/*.js')
    .pipe(jshint())
})

gulp.task('watch', () => {
  gulp.watch('src/*.js', ['scripts', 'lint:js'])
})
