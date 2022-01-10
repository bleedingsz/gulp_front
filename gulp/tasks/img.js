export const img = () => {
    return app.gulp.src(app.path.source.img)
        .pipe(app.gulp.dest(app.path.build.img))
        .pipe(app.plugins.browsersync.stream())
};