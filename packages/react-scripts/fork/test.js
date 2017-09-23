// @remove-on-eject-begin

'use strict';

const reactScriptsPkg = require('../package.json');
const reactDevUtilsPkg = require('../../react-dev-utils/package.json');

// As part of a workaround for websocket port in react-scripts,
// we had to pull in a copy of a dependency from react-dev-utils, which
// depends on react-error-overlay. Since we had to add the dependency,
// we want to make sure it never goes out of sync of version.

const hasSameReactErrorOverlay =
  reactScriptsPkg.dependencies['react-error-overlay'] ==
  reactDevUtilsPkg.dependencies['react-error-overlay'];
if (!hasSameReactErrorOverlay) {
  process.exit(1);
}
