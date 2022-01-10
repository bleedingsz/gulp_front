import babel from 'gulp-babel';
import uglify from 'gulp-uglify';

export const scripts = () => {
    return app.gulp.src(app.path.source.js)
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(uglify())
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream())
};
