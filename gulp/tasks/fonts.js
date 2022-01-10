export const fonts = () => {
    return app.gulp.src(app.path.source.fonts)
        .pipe(app.gulp.dest(app.path.build.fonts))
        .pipe(app.plugins.browsersync.stream())
};