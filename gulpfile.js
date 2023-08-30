import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';

gulp.task("default", async function(){
    return console.log("running.");
});

gulp.task('imageMin', () =>
	gulp.src('img/*.*')
		.pipe(imagemin())
		.pipe(gulp.dest('minified'))
);

gulp.task ("copyHTML", async function(){
	gulp.src('src/*html')
	.pipe(gulp.dest('dist'));
});
 
gulp.task('toWebp', () =>
    gulp.src('img/*')
        .pipe(webp())
        .pipe(gulp.dest('dist'))
);