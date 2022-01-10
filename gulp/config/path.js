import * as nodePath from 'path';


const buildFolder = `./dist`,
    sourceFolder = `./source`,
    rootFolder = nodePath.basename(nodePath.resolve());

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        php: `${buildFolder}/`,
        files: `${buildFolder}/other/`,
        fonts: `${buildFolder}/fonts/`,
        img: `${buildFolder}/img/`
    },
    source: {
        js: `${sourceFolder}/js/main.js`,
        scss: `${sourceFolder}/scss/style.scss`,
        css: `${sourceFolder}/css/**/*.css`,
        html: `${sourceFolder}/*.html`,
        php: `${sourceFolder}/*.php`,
        files: `${sourceFolder}/other/**/*.*`,
        fonts: `${sourceFolder}/fonts/**/*.*`,
        img: `${sourceFolder}/img/**/*.*`
    },
    watch: {
        js: `${sourceFolder}/js/**/*.js`,
        css: `${sourceFolder}/css/**/*.css`,
        scss: `${sourceFolder}/scss/**/*.scss`,
        html: `${sourceFolder}/**/*.html`,
        php: `${sourceFolder}/**/*.php`,
        files: `${sourceFolder}/other/**/*.*`,
        fonts: `${sourceFolder}/fonts/**/*.*`,
        img: `${sourceFolder}/img/**/*.*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    sourceFolder: sourceFolder,
    rootFolder: rootFolder
};