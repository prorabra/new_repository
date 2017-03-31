var gulp = require('gulp');
var jade = require('gulp-jade');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var browserSync = require("browser-sync");
var	reload = browserSync.reload;
 
var config = {
    server: {
        baseDir: "./app"
    },
    tunnel: true,
    host: 'localhost',
    port: 9001,
    logPrefix: "base"
};
gulp.task('webserver', function () {
    browserSync(config);
});



gulp.task('html', function() {
  var YOUR_LOCALS = {};
 
  gulp.src('./dev/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS,
      pretty: true
    }))
    .pipe(gulp.dest('./app/'))
});


gulp.task('sass', function () {
  return gulp.src('./dev/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
          browsers: ['last 50 versions'],
          cascade: false
      }))
    .pipe(gulp.dest('./app/css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({
      suffix: ".min",
      extname: ".css"
    }))
    .pipe(gulp.dest('./app/css'));
});


gulp.task('watch', function () {
	gulp.watch('./dev/*.jade',['html',reload])
  gulp.watch('./dev/sass/*.scss',['sass',reload])
  gulp.watch('./dev/includes/*.jade',['html',reload])
});
// gulp.task('watch', function () {
//     // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event 
//     return watch('./dev/*.jade', function () {
//          gulp.start(['html',reload])
//     });
// });

gulp.task('default' , ['html','watch','webserver','sass']);