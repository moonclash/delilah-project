'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const fs = require('fs');

gulp.task('sass', () =>  {
  return gulp.src('styling/**.scss')
  .pipe(sass())
  .pipe(gulp.dest('.'))
  .pipe(browserSync.reload({
    stream : true
  }))
});


gulp.task('autoprefixer',() => {
  return gulp.src('./*.css')
  .pipe(autoprefixer({
    browsers : ['last 5 versions'],
    cascade : false
  }))
  .pipe(gulp.dest('.'));
});

gulp.task('browserSync', () => {
  browserSync.init({
    server: {
        baseDir: '.',
    },
  })
});

gulp.task('cssQuality', () =>  {
  var regex = /(\w+{)|:+\w{1,50}/gi;
  fs.readFile('src/styles/scss/site.scss','utf8',(err,data) => {
    var file = data;
    if (file.match(regex)) {
      throw new Error(`Please refactor the code quality of the following pieces: ${file.match(regex)}`)
    }
  });
});

gulp.task('babelify', () => {
  return gulp.src('src/scripts/*.js')
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(gulp.dest('src/scripts/es5'));
});

gulp.task('uglify', () => {
  return gulp.src('src/scripts/es5/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('src/scripts/es5/min'));
})


gulp.task('watch',['browserSync'], () =>  {
  gulp.watch('styling/**.scss',['sass']);
  gulp.watch('stylng/*.css',['autoprefixer']);
  gulp.watch('*.html', browserSync.reload);
});