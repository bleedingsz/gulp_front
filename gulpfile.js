import gulp from "gulp";

import { path } from "./gulp/config/path.js";

/*imports*/
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { server } from "./gulp/tasks/server.js";
import { css } from "./gulp/tasks/css.js";
import { scripts } from "./gulp/tasks/jscripts.js";
import { php } from "./gulp/tasks/php.js";
import { img } from "./gulp/tasks/img.js";
import { other } from "./gulp/tasks/other.js";
import { fonts } from "./gulp/tasks/fonts.js";
/*imports end*/

import { plugins } from "./gulp/config/plugins.js";

global.app ={
    path: path,
    gulp: gulp,
    plugins: plugins
};

const watcher = () => {
    gulp.watch(path.watch.html, copy);
    gulp.watch(path.watch.php, php);
    gulp.watch(path.watch.css, css);
    gulp.watch(path.watch.img, img);
    gulp.watch(path.watch.files, other);
    gulp.watch(path.watch.fonts, fonts);
    gulp.watch(path.watch.js, scripts);
};

const mainTask = gulp.parallel(copy,php,css,other,fonts,img,scripts);

const dev = gulp.series(reset, mainTask, gulp.parallel(watcher, server));

gulp.task('default', dev);
