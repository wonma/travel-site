var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	watch = require('gulp-watch');
	

gulp.task('watch',function(){

	watch('./app/index.html', function(){
		browserSync.reload();
	});

	watch('./app/assets/**/*.css', function(){
		gulp.start('cssInject');
	});

	browserSync.init({
		server:{
			baseDir: "app"
		}
	});

});



gulp.task('cssInject', ['styles'] , function(){
	return gulp.src('./app/temp/styles/styles.css')
	.pipe(browserSync.stream());
});
