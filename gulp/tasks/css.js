import autoprefixer from "gulp-autoprefixer";
import groupMediaQueries from "gulp-group-css-media-queries";

export const css = () => {
    return app.gulp.src(app.path.source.css, { sourcemap: true })
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(groupMediaQueries())
        .pipe(autoprefixer({
            grid: true,
            overrideBrowserslist: ["last 3 versions"],
            cascade: true
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream())
};