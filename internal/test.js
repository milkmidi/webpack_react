const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach((file) => {
    if (file !== 'asset') {
      // eslint-disable-next-line
      filelist = fs.statSync(path.join(dir, file)).isDirectory()
        ? walkSync(path.join(dir, file), filelist)
        : filelist.concat(path.join(dir, file));
    }
  });
  return filelist;
};

const buildPath = path.resolve('build');

Promise.resolve()
  .then(() => walkSync(buildPath))
  .then(paths => paths.filter(p => /index\.html$/.test(p)))
  .then(paths => console.log(paths));

