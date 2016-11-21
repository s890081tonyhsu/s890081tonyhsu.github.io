var gulp = require('gulp');
var webpack = require('webpack-stream');
var connect = require('gulp-connect');
var gulpCompass = require('gulp-compass');
var gulpImagemin = require('gulp-imagemin');

// Run webpack
gulp.task('webpack', function () {
    "use strict";
    return gulp.src('src/main.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('dist/js/'))
        .pipe(connect.reload());
});

// Run the webserver
gulp.task('webserver', function () {
    "use strict";
    connect.server({
        livereload: true,
        root: '.'
    });
});

// Copy index.html file
gulp.task('build.index', function () {
    "use strict";
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('.'));
});


// generate css
gulp.task('styles', function () {
    "use strict";
    gulp.src('src/sass/**/*.sass') // sass 來源路徑
        .pipe(gulpCompass({
            css: 'dist/css',           // compass 輸出位置
            sass: 'src/sass',                   // sass 來源路徑
            image: 'src/images',                // 圖片來源路徑
            style: 'compressed',                // CSS 處理方式，預設 nested（expanded, nested, compact, compressed）
            comments: false,                    // 是否要註解，預設(true)
            require: []                         // 額外套件 susy
        }))
        .pipe(gulp.dest('dist'));               // 輸出位置(非必要)
});

// move image
gulp.task('images', function () {
    gulp.src('src/images/**')
        .pipe(gulpImagemin())
        .pipe(gulp.dest('dist/images'));
});

// Default task
gulp.task('default', ['webpack', 'images', 'styles', 'webserver', 'build.index']);
