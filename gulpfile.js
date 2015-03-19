var gulp = require('gulp');
var plug = require('gulp-load-plugins')();

var source = [
    './app/**/*.module.js',
    './app/**/*.js'
];

gulp.task('hint', function() {
    return gulp
        .src(source)
        .pipe(plug.jshint('./.jshintrc'))
        .pipe(plug.jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
    return gulp
        .watch(source, ['hint'])
        .on('change', function (event) {
            console.log('*** File ' + event.path + ' was ' + event.type + ', running tasks...');
        });
});