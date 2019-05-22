const gulp = require('gulp')
const concat = require('gulp-concat')
const babel = require('gulp-babel')

const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

gulp.task('default', () => {
    return tsProject.src()
    .pipe(tsProject())
    .pipe(babel({
        minified: true,
        comments: false,
        presets: ['env']
    }))
    .on('error', function (err) { console.log(err) })
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('build'))
})
