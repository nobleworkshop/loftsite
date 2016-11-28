'use strict';

// Все пути описаны в gulp/path/
// Там отдельно пути всех вендорных CSS файлов
// также и jS файлов 
// Путь к app.js файлу нашего сайта


// Пути ко всем таскам нашегоgulp в файле gulp/path/tasks.js

// Внимание! Подключение всех путей, и пути к всем плагинам
// происходят здесь внутри переменной $
// поэтому внутри тасок мы обращаемся к ним через $
// например $.spritesmith   
// или    $.gp.svgmin  - к тем которые имеют префикс gulp-
global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {

    // Получаем путь к файлу который знает где находятся все наши gulp таски
    task: require('./gulp/paths/tasks.js'),

    jsFoundation: require('./gulp/paths/js.foundation.js'),

    // Путь к файлу где прописаны сторониии CSS файла вендоров
    cssFoundation: require('./gulp/paths/css.foundation.js'),

    app: require('./gulp/paths/app.js')
  },
  gulp: require('gulp'),
  del: require('del'),
  spritesmith: require('gulp.spritesmith'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')()
};


// Через цикл подключаем все наши таски, путь к ним мы узнали на 
// строке  выше task: require('./gulp/paths/tasks.js'),
$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});


// Вызываем наши таски, некторые последовательно, некоторые паралельно.
$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
    'pug',
    'js:foundation',
    'js:process',
    'copy:image',
    'css:foundation',
    'sprite:svg',
    'sprite:png',
    'copy:fonts'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));


// Итог каждая таска описан отдельно в файле - как и ранее
// пути от всех тасок находятся в отделдьном файле
// для выполнения таски нам все равно надо ее вызывать непосредственно

// Что раньше таски были в отдельных файлах и их можно было подключать через require
// Что сейчас, добавилось кучу оберток  module.exports = [ ... ];
// Усложнили структуру

// Профит:
// — Кажется профит есть, чтобы не подключать все пакеты 
// зависимости внутри каждой таски

// То есть у нас все "как бы"" разбито по модулям, 
// но по факту все подключается
// в один итоговый главный
// файл gulpfile.js - который видит наш сервер, и из него все работает
// в нем то какраз вверху уже подключены все пакеты npm для сборки
// и ниже через цикл require подключаем все пакеты

// ???? тогда опять вопрос обязательно ли в файлах с тасками 
// писать module.exports = function() { ... } 
// раз node и так умеет инклудить файлы друг в друга

// В $ все оборачиваем - потому что мы сами создали переменную с таким названием,
// сделали ее объектом и положили в ее поля пути ко всем модулям

