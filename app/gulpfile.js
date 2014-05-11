var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');

var paths = {
  sass: ['./scss/**/*.scss'],
  watch: [
    'www/js/**/*.js',
    'www/css/**/*.css',
    'www/index.html',
    'www/templates/**/*.html',
    'www/img/**/*'
  ]
};

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('connect', function () {
  var connect = require('connect');
  var app = connect()
    .use(require('connect-livereload')({ port: 35729 }))
    .use(connect.static('www'))
    .use(connect.directory('www'));

  require('http').createServer(app)
    .listen(9000)
    .on('listening', function () {
        console.log('Started connect web server on http://localhost:9000');
      });
});

gulp.task('serve', ['connect'], function () {
  require('opn')('http://localhost:9000');
});

gulp.task('watch', ['connect', 'serve'], function () {
  var server = livereload();

  gulp.watch(paths.watch).on('change', function (file) {
    server.changed(file.path);
  });

  gulp.watch(paths.sass, ['sass']);
});

gulp.task('default', ['sass']);
