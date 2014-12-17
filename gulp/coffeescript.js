// Generated by CoffeeScript 1.8.0
'use strict';
var $, cfg, clp, gulp, lazypipe, _coffeelint, _cs;

cfg = require('../config.json');

gulp = require('gulp');

$ = require('gulp-load-plugins')();

clp = require('./clp');

lazypipe = require('lazypipe');

_coffeelint = lazypipe().pipe($.coffeelint, 'coffeelint.json').pipe($.coffeelint.reporter);

_cs = lazypipe().pipe(function() {
  return $["if"](clp.coffeelint, _coffeelint());
}).pipe($.coffee, cfg.cs_opts);

gulp.task('coffeescript', function() {
  var gulpfile_src, iob_src, test_src;
  iob_src = gulp.src(cfg.path.dev + 'is.object.brace.coffee');
  test_src = gulp.src(cfg.path.dev + 'test.coffee');
  gulpfile_src = gulp.src(cfg.path.dev + 'gulpfile.coffee');
  iob_src.pipe($.changed(cfg.path.project_root)).pipe($.plumber()).pipe(_cs()).pipe($.rename({
    dirname: '',
    basename: 'index',
    extname: '.js'
  })).pipe(gulp.dest(cfg.path.project_root));
  test_src.pipe($.changed(cfg.path.test)).pipe($.plumber()).pipe(_cs()).pipe(gulp.dest(cfg.path.test));
  gulpfile_src.pipe($.changed(cfg.path.project_root)).pipe($.plumber()).pipe(_cs()).pipe(gulp.dest(cfg.path.project_root));
});
