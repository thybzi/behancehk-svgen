'use strict';
var gulp = require('gulp'),
    jade = require('gulp-jade'),
    watch = require('gulp-watch'),
    plumber = require('gulp-plumber');

var srcDir = '_src/',
    jadePageSrcFiles = srcDir + '*.jade',
    htmlDestDir = '',
    jsSrcFiles = srcDir + '*.js',
    genSrcDir = srcDir + 'gen/',
    jadeGenSrcFiles = genSrcDir + '*.jade',
    jsDestDir = '',
    buildTasks = ['html', 'gen-js', 'js'];

gulp.task('html', function () {
    gulp.src(jadePageSrcFiles)
        .pipe(plumber())
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest(htmlDestDir))
});

gulp.task('gen-js', function () {
    gulp.src(jadeGenSrcFiles)
        .pipe(plumber())
        .pipe(jade({client: true}))
        .pipe(gulp.dest(jsDestDir))
});

gulp.task('js', function () {
    return gulp.src(jsSrcFiles)
        .pipe(gulp.dest(jsDestDir));
});

gulp.task('watch', buildTasks, function () {
    gulp.watch(jadePageSrcFiles, ['html']);
    gulp.watch(jadeGenSrcFiles, ['gen-js']);
    gulp.watch(jsSrcFiles, ['js']);
});

gulp.task('default', buildTasks);
