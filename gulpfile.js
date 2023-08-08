import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

gulp.task("default", async function(){
    return console.log("running.");
});

gulp.task('imageMin', () =>
	gulp.src('src/img/*/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'))
);

gulp.task ("copyHTML", async function(){
	gulp.src('src/*html')
	.pipe(gulp.dest('dist'));
});