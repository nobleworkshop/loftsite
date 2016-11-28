#Учебная сборка Loftschool (выпускной проект №1) 

Stack:
 - Gulp 4.0
 
Getting started:

1. clone this repo
2. cd path/to/
3. npm install gulpjs/gulp-cli -g  // Install the latest Gulp CLI tools globally
4. npm install
6. run "gulp" command to start

## Что было сделано

1. Добавлен таск `copy:fonts` который копирует шрифты.
Таск для копирования картинок делать не стал, т.к. он уже был.

## Что не работает

1. Установлен пакет gulp.spritesmith который должен делать спрайты
2. Пож него написана таска `sprite:png` в файле `sprite.png.js` которая должна создавать png спрайт
3. Пакет `spritesmith` подключен в файле `gulpfile.js` на 28 строке
4. При запуске команды `gulp sprite:png` npm пишет ошибку:

>  $ gulp sprite:png
[14:51:47] Using gulpfile E:\LCOURSE\dz01\gulpfile.js
[14:51:47] Starting 'sprite:png'...
[14:51:47] 'sprite:png' errored after 19 ms
[14:51:47] ReferenceError: spritesmith is not defined
    at E:\LCOURSE\dz01\gulp\tasks\sprite.png.js:6:63


### Прошу помощи с решением этой ошибки.

Так как сам пакет подключил. Проверил уже 10 раз, и переустановил его.
Возможно где-то допустил синтаксическую ошибку, но не могу ее найти.