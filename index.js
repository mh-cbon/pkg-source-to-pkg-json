var npmPkgDl = require('@mh-cbon/npm-pkg-dl');

var somethingToPackageJsonFile = function (what, opts, then) {
  npmPkgDl(what, opts, function (err, dirPath) {
    err && console.error(err);
    if (err) return then(err);
    var json;
    try{
      json = require(dirPath + '/package.json')
    } catch(ex) {
      return then(ex);
    }
    return then(null, json, dirPath + '/package.json')
  })
}

module.exports = somethingToPackageJsonFile;
