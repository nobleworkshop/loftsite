'use strict';

module.exports = function() {


  $.gulp.task('css:foundation', function() {

  	// Выбираем вс CSS файлы вендоров
    return $.gulp.src($.path.cssFoundation)

    	// Конкатинируем их - т.е. объединяем в один файл foundation.css 
      .pipe($.gp.concatCss('foundation.css'))

      // Сжимаем
      .pipe($.gp.csso())

      // Отпавляем в  build/assets/css
      .pipe($.gulp.dest($.config.root + '/assets/css'))
  })


};
