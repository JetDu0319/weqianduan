var gulp = require('gulp'),
    less = require('gulp-less'),
    notify = require('gulp-notify'),
    uglify = require('gulp-uglify'),	//压缩js文件
    plumber = require('gulp-plumber');
/*处理less文件*/ 
gulp.task('appLess', function () {
    gulp.src(['less/*.less'])
    	.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less())
        .pipe(gulp.dest('css'));
});
/*监听less*/
gulp.task('watchLess',function(){
	gulp.watch('less/*.less',['appLess']);
});