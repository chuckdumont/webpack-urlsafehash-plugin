# webpack-preamble-plugin

Ensures chuck filenames have URL safe hashes when using base64 hash digest.

## Install

```bash
npm i -D webpack-urlsafehash-plugin
```
## Usage

```javascript
// webpack.config.js
var UrlSafeHashPlugin = require('webpack-urlsafehash-plugin');

module.exports = {
  // ... snip ...
  plugins: [
    new UrlSafeHashPlugin()
  ],
  // ... snip ...
}
```
