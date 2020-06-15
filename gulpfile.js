var gulp = require('gulp'),   
notify = require("gulp-notify"),  
nib = require("nib"),  
plumber = require('gulp-plumber'),
stylus = require('gulp-stylus'),  a
autoprefixer = require('gulp-autoprefixer'),
cssmin = require('gulp-cssmin');
gulp.task('stylus', function() {return gulp.src(['./style/styl/*.styl'])
.pipe(plumber({      errorHandler: notify.onError()    }))   .pipe(stylus({      use: nib(),      compress: false,    }))  
.pipe(autoprefixer({      browsers: ['last 15 versions'],    }))    
.pipe(gulp.dest('./style/css'));});
gulp.task('watch', function() {  gulp.watch(['./style/styl/*.styl'], ['stylus']);});