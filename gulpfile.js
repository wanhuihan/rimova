
var gulp = require('gulp');

var sass = require('gulp-sass');

var watch = require('gulp-watch');

var connect = require('gulp-connect')

 
gulp.task('connect', function() {
  connect.server({
    root: 'site',
    livereload: true
  });
});
 
gulp.task('html', function () {
  gulp.src('./site/*.html')
    .pipe(connect.reload());
});
 
gulp.task('sass', function() {
	 gulp.src('site/scss/**/**/*.scss')
    // .pipe(sass().on('error', sass.logError))
    .pipe(sass({
    	outputStyle: 'compressed' 
    }))
    .pipe(gulp.dest('site/css'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('./site/*.html', ['html']);
  gulp.watch('site/scss/**/**/*.scss', ['sass']);
});
 

gulp.task('default', ['connect', 'watch']);

// gulp.task('sass', function() {
// 	return gulp.src('site/scss/**/*.scss')
//     // .pipe(sass().on('error', sass.logError))
//     .pipe(sass({
//     	outputStyle: 'compressed' 
//     }))
//     .pipe(gulp.dest('site/css'))
// });

// gulp.task('connect', function() {
// 	connect.server({
// 		root: 'site',
// 		livereload: true
// 	})
// })

// gulp.task('html', function () {
// 	 gulp.src('site/*.html')
//     .pipe(connect.reload());
// });


// gulp.task('watch', function() {
// 	gulp.watch('site/scss/**/*.scss', ['sass']);
// 	gulp.watch('site/*/*.html', ['html']);
// })

// gulp.task('default', ['watch', 'sass', 'html', 'connect'])