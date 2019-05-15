const gulp = require('gulp')

gulp.task('default', () => {
    gulp.start('copiar', 'fim')
})

gulp.task('copiar', ['antes1', 'antes2'], () => {
    //copia todos os arquivos dentro de pastas e subpastas
    gulp.src(['pastaA/**/arquivo1.txt', 'pastaA/arquivo2.txt'])
    // transformando os arquivos
    // .pipe(transform1())
    // .pipe(transform2())
    .pipe(gulp.dest('partaB'))
})

gulp.task('antes1', () => {
    console.log('antes1')
})

gulp.task('antes2', () => {
    console.log('antes2')
})

gulp.task('fim', () => {
    console.log('Fim!!!')
})