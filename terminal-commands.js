const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = (fileName) => {
  fs.open(`${fileName}`, 'w', function(err, file) {
    if (err) throw err;
  });
};

module.exports.mkdir = (directoryName) => {
    fs.mkdir(`${directoryName}`, (err) => {
        if(err) throw err;
    });
};