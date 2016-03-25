var gulp = require('gulp');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');
var path = require('path');
var jade = require('gulp-jade');



// Config Sass

gulp.task('sass', function () {
  return gulp.src('sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    //Destino
    .pipe(gulp.dest('css/'));
});


// conf jade

gulp.task('templates', function() {
  var YOUR_LOCALS = {};

  gulp.src('jade/*.jade')
  .pipe(jade({
  locals: YOUR_LOCALS,
        pretty: true
  }))
  // destino
  .pipe(gulp.dest(''))
});


gulp.task('server', function() {
  gulp.src('')
    .pipe(webserver({
        port: 8080,
        //host: '192.168.12.144',
        livereload: true,
        open: true
    }));
});

// wacth

gulp.task('watch', function() {
  gulp.watch('jade/*.jade',['templates']);
  gulp.watch('sass/*.scss', ['sass']);
})

// tareas default
gulp.task('default', ['sass','watch','server','templates']);
