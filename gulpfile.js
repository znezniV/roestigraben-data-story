// modules
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

// paths
var paths = {

    src: {
        sass: 'css/*.scss',

        js: 'js/dev/*.js'
    },

    dist: {
        css: './css/',
        js: './js/'
    }
};

// tasks
gulp.task('sass', function() {
    gulp.src(paths.src.sass)
        .pipe(sass({outputStyle: 'expanded'},{includePaths: ['./src/styles']}).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS({advanced: false}))
        .pipe(gulp.dest(paths.dist.css));
});

gulp.task('js_hint', function() {
    gulp.src(paths.src.js.hint)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
});

// watch files
gulp.task('watch', function () {
    gulp.watch('css/*/*.scss', ['sass']);
    //gulp.watch(paths.src.js.main, ['js_hint']);
});

// run tasks
gulp.task('default', ['sass', 'js_hint', 'js_head', 'js_body', 'watch']);
