var gulp        = require('gulp');
var browserSync = require('browser-sync').create();


gulp.task('serve', function() {
    browserSync.init({
        server: './public'
    });

    gulp.watch(['./public/_css/*.css'], ['css']);
    gulp.watch(['./public/index.html']).on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('css', function() {
    return gulp.src('./public/_css/*.css')
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);