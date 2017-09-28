/**
 * Created by ifelsc on 9/16/2017.
 */
//call in the dependencies
var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var fs = require('fs');


//read in all files under /gulp
fs.readdirSync(__dirname + '/gulp').forEach(function (task){
   require('./gulp/' + task)
});

//run gulp dev and it will watch css and js at the same time
gulp.task('dev', ['dev:server', 'watch:css', 'watch:js'], function(){
   
})

//gulp is used to build things automatically
//gulp build for everything under the js folder into assets/app.js that the application uses
gulp.task('js', function(){
   //build the module file first, and then build the rest
   gulp.src(['ng/module.js', 'ng/**/*.js'])
   //initiate sourcemaps, becuase the minified code will show everything as a single line, and you cant debug easily
       .pipe(sourcemaps.init())
       //concatenate everything under /ng into a single file named app.js  
       .pipe(concat('app.js'))
         //annotate the code, so that variables can still be read and the app doenst break  
       .pipe(ngAnnotate())
       //minify the code  
       .pipe(uglify())
       //write the sourcemap, so that all the code is mapped nicely and easy to debug 
       .pipe(sourcemaps.write())
       //build the file under the assets folder
       .pipe(gulp.dest('assets'))
});

//this task will watch for changes in js files in the ng folder, and automatically build them
gulp.task('watch:js', ['js'], function(){
   gulp.watch('ng/**/*.js', ['js'])
})

