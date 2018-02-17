var gulp = require("gulp");
var del = require('del');

//APAGANDO ARQUIVOS COM O PLUGIN DEL
gulp.task("delete", function(){
    del("./dist/css");//apaga só a css
});

//MOVENDO ARQUIVO PARA UMA OUTRA PASTA  
gulp.task('move-css', function () {
    return gulp.src('./src/css/style.css')//primeira forma
    //pipe ele server para que você continue sua tarefa 
        .pipe(gulp.dest('./dist/css'));
    //gulp.src('./src/**/*.')//as duas /**/ no meio serve para pegar todas as pasta da src /*./pega os arquivos de cada pasta
    //terceira forma de fazer é criando um array
    //gulp,src(['./src/css/style.css', 'você pode pegar quantos você quizer'])
});
//MOVENDO ARQUIVO PARA UMA OUTRA PASTA  
gulp.task('move-js', function () {
    return gulp.src('./src/js/index.js')//primeira forma
    //pipe ele server para que você continue sua tarefa 
        .pipe(gulp.dest('./dist/js'));
    //gulp.src('./src/**/*.')//as duas /**/ no meio serve para pegar todas as pasta da src /*./pega os arquivos de cada pasta
    //terceira forma de fazer é criando um array
    //gulp,src(['./src/css/style.css', 'você pode pegar quantos você quizer'])
});

//OBIRSERVANDO O QUE ACONTECE DENTRO das PASTA COM WATCH
gulp.task('background', function(){
    gulp.watch('./src/css/style.css',['move-css']);
    gulp.watch('./src/css/index.js',['move-js']);
});