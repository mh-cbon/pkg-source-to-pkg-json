# pkg-source-to-pkg-json

Transforms a downloadable package source string into its package.json equivalent.

# Install

```sh
npm i @mh-cbon/pkg-source-to-pkg-json -g
```

# Usage

```sh
npm-pkg-json <package source> <-d|--dir target-path> <-r|--registry https://registry.url/>

npm-pkg-json [<@scope>/]<name>
npm-pkg-json [<@scope>/]<name>@<tag>
npm-pkg-json [<@scope>/]<name>@<version>
npm-pkg-json [<@scope>/]<name>@<version range>
npm-pkg-json <tarball file>
npm-pkg-json <tarball url>
npm-pkg-json <folder>
```

# Api

```js
var smthignToPkg = require('./index.js')

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


```

# Examples

```sh
$ npm-pkg-json minimist@">0.0.5" -d some
{
  // content of the package json file
}
```

# Read more

- https://github.com/mh-cbon/npm-pkg-dl
