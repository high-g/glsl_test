const gulp = require('gulp')
const sass = require('gulp-sass')
const plumber = require('gulp-plumber')
const autoprefixer = require('gulp-autoprefixer')

const dev = 'src'
const prod = 'dist'

const scss = `${dev}/scss/**/**.scss`
const dist_css = `${prod}/css`



gulp.task('scss-compile', () => {
    gulp.src(scss)
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 version'],
            cascade: false
        }))
        .pipe(gulp.dest(dist_css))
})

gulp.task('watch', () => {
  gulp.watch(scss, ['scss-compile']);
})

gulp.task('default', ['scss-compile', 'watch'])