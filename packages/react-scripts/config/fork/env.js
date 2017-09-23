'use strict';

function getPublicPath(env) {
  const port = parseInt(process.env.PORT, 10) || 3000;
  const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
  return env == 'dev' ? `${protocol}://localhost:${port}/` : '/';
}

module.exports = { getPublicPath };
