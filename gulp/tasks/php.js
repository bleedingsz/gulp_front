import versionNumber from "gulp-version-number";

export const php = () => {
    return app.gulp.src(app.path.source.php)
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        .pipe(
            versionNumber({
                'value': '%DT%',
                'append': {
                    'key': '_v',
                    'cover': 0,
                    'to': [
                        'css',
                        'js',
                        'image'
                    ]
                },
                'output': {
                    'file': 'gulp/version.json'
                }
            })
        )
        .pipe(app.gulp.dest(app.path.build.php))
        .pipe(app.plugins.browsersync.stream())
};