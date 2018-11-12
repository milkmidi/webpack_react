/* eslint no-console: 0, no-bitwise: 0, no-mixed-operators: 0 */
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const merge = require('merge-stream');

gulp.task('m', () => {
  const imgSrc = [
    'src/assets/img_src/**/*.+(jpg|png|gif|svg)',
    '!src/assets/img_src/_*',
  ];
  const otherSrc = imgSrc.map(imgPath => (imgPath.indexOf('!') === 0 ? imgPath.substr(1) : `!${imgPath}`));
  const imgDest = 'src/asset/img';
  const imageminPngquant = require('imagemin-pngquant');
  const imageminMozjpeg = require('imagemin-mozjpeg');

  const taskOtherSrc = gulp.src(otherSrc)
    .pipe($.changed(imgDest))
    .pipe($.size({ showFiles: true }))
    .pipe(gulp.dest(imgDest));

  const taskImgSrc = gulp.src(imgSrc)
    .pipe($.changed(imgDest))
    .pipe($.size({ showFiles: true }))
    .pipe($.imagemin([
      imageminMozjpeg({ quality: 90 }),
      imageminPngquant({ quality: 90 }),
    ]))
    .pipe(gulp.dest(imgDest));

  return merge(taskOtherSrc, taskImgSrc);
});


gulp.task('watch', () => {
  gulp.watch('src/assets/img_src/**/*', ['m']);
});

gulp.task('default', ['m', 'watch']);

