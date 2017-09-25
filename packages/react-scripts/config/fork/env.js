'use strict';

function getDevPublicPath() {
  const port = parseInt(process.env.PORT, 10) || 3000;
  const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
  const host = process.env.HOST || '0.0.0.0';
  return `${protocol}://${host}:${port}/`;
}

function getDevSocketHostname() {
  return process.env.HOST || '0.0.0.0';
}

function getDevSocketPort() {
  return parseInt(process.env.PORT, 10) || 3000;
}

module.exports = { getDevPublicPath, getDevSocketHostname, getDevSocketPort };
