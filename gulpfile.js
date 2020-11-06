const {series, parallel, src, dest} = require("gulp");

const gulp = require("gulp"),
    svgmin = require("gulp-svgmin"),
    svgstore = require("gulp-svgstore"),
    inject = require("gulp-inject"),
    less = require("gulp-less"),
    autoprefixer = require("gulp-autoprefixer"),
    browserSync = require("browser-sync").create(),
    rename = require("gulp-rename");

gulp.task("svgstore", function () {
    const svgs = gulp
        .src("./src/assets/icons/**/*.svg")
        .pipe(
            svgmin(function () {
                return {
                    plugins: [
                        {
                            removeTitle: true,
                        },
                        {
                            removeStyleElement: true,
                        },
                    ],
                };
            })
        )
        .pipe(rename({prefix: "icon-"}))
        .pipe(svgstore({inlineSvg: true}));

    function fileContents(filePath, file) {
        return file.contents.toString();
    }

    return gulp
        .src("./src/*.html")
        .pipe(inject(svgs, {transform: fileContents}))
        .pipe(gulp.dest("./src"));
});

gulp.task("less", function () {
    return src("./src/assets/styles/main.less")
        .pipe(less())
        .pipe(
            autoprefixer({
                cascade: false,
            })
        )
        .pipe(dest("./dist"));
});

gulp.task("html", function () {
    return gulp.src("./src/*.html").pipe(gulp.dest("./dist"));
});

gulp.task("images", function () {
    return gulp.src("./src/assets/images/*").pipe(gulp.dest("./dist/images"));
});

gulp.task("fonts", function () {
    return gulp.src("./src/assets/fonts/*").pipe(gulp.dest("./dist/fonts"));
});

gulp.task("serve", function () {
    browserSync.init({
        server: {
            baseDir: "dist",
        },
    });

    gulp.watch("./src/assets/styles/**/*.less").on("change", series("less"));
    gulp.watch("./src/*.html").on("change", series("html"));
    gulp.watch("./src/assets/images/*").on("add", series("images"));
    gulp.watch("./src/assets/fonts/*").on("add", series("fonts"));

    gulp.watch("./dist/style.css").on("change", browserSync.reload);
    gulp.watch("./dist/*.html").on("change", browserSync.reload);
    gulp.watch("./dist/images/*").on("add", browserSync.reload);
    gulp.watch("./dist/fonts/*").on("add", browserSync.reload);
});

gulp.task("build", series("svgstore", "less", "html", "images", "fonts"));

gulp.task("default", series("svgstore", parallel("html", "less", "images", "fonts"), "serve"));
