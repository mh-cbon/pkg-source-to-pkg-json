#!/usr/bin/env node

var smthignToPkg = require('./index.js')

var argv = require('minimist')(process.argv.slice(2));

if (!argv._[0]) {
  console.log("Wrong usage")
  console.log("Usage :")
  console.log("npm-pkg-json <package>")
  console.log("npm-pkg-json <package@version>")
  console.log("npm-pkg-json <@scope/package>")
  console.log("npm-pkg-json <@scope/package@version>")
  console.log("npm-pkg-json <tarball url (zip|tar|tgz)>")
  console.log("npm-pkg-json <folder path>")
  process.exit(1)
}

smthignToPkg(argv._[0], {
  dir: argv.dir || argv.d || null,
  registry: argv.regisry || argv.r || null
}, function (err, json) {
  if (err) {
    console.error(err);
    process.exit(1)
  }
  console.log("%s", JSON.stringify(json, null, 2));
})
