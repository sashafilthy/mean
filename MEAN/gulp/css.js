/**
 * Created by ifelsc on 9/16/2017.
 */
var gulp = require('gulp');
var stylus = require('gulp-stylus');




//build anything under the /css folder into the assets folder
gulp.task('css', function(){
    gulp.src('css/**/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('assets'))
        
        
});

gulp.task('watch:css', function(){
    
    gulp.watch('css/**/*.styl', ['css'])
});