/*

 == Gulp configuration

 */

// Require variables
var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer');

// Paths variables
var inputPath = './';
var scssInputPath = inputPath + 'scss/**/**/*.scss';
var cssOutputPath = inputPath + 'css/';

// Compile styles
gulp.task('compilestyles', function () {
    return gulp.src([
        inputPath + 'scss/style.scss',
        inputPath + 'scss/style-high-contrast.scss'
    ])
        .pipe(sass({ // Compile Sass to CSS
            errLogToConsole: true,
            outputStyle: 'compressed'
        }))
        // Autoprefix CSS rules
        // https://www.npmjs.com/package/gulp-autoprefixer
        // https://www.npmjs.com/package/autoprefixer
        .pipe(autoprefixer({
            browsers: ['last 4 versions', 'IE 11'],
            cascade: false
        }))
        .pipe(gulp.dest(cssOutputPath));
});

// Watching for modifications and compile styles
gulp.task('watch', ['compilestyles'], function () {
    // Start watching changes and update page whenever changes are detected
    gulp.watch([scssInputPath], ['build']);
});

// Final build
gulp.task('build', [
    'compilestyles',
    'watch'
]);
