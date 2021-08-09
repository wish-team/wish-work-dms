"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass")(require('sass'));
var run = require("gulp-run");
var clean = require("gulp-clean");
var uglify = require('gulp-uglify');
var cssMin = require("gulp-css");
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
sass.compiler = require("node-sass");

gulp.task("sass", function () {
  console.log("sass");
  return gulp
    .src("./src/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./src"));
});

gulp.task("sass:watch", function () {
  console.log("sass:watch");
  gulp.watch("./src/**/*.scss", gulp.series("sass"));
});

gulp.task("clean", function () {
  console.log("clean");
  return gulp.src("dist", { read: false }).pipe(clean());
});

gulp.task("compile", function () {
  console.log("compile");
  return run("tsc").exec();
});

gulp.task("copy-css", function () {
  console.log("copy-css");
  return gulp.src("./src/**/*.css").pipe(gulp.dest("./dist"));
});

gulp.task("webpack", function(cb) {
  return new Promise((resolve, reject) => {
      webpack(webpackConfig, (err, stats) => {
          if (err) {
              return reject(err)
          }
          if (stats.hasErrors()) {
              return reject(new Error(stats.compilation.errors.join('\n')))
          }
          resolve()
      })
  })
})

gulp.task("default", async function () {
  const tasks = gulp.series("clean", "compile", "sass", "copy-css", "webpack");
  tasks();
});