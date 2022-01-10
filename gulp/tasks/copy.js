import versionNumber from "gulp-version-number";

export const copy = () => {
    return app.gulp.src(app.path.source.html)
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
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream())
};