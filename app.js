// DevTeam — main application
// Status: stable

const auth = require('./auth');
const session = require('./session');

function start(config) {
  if (!config) throw new Error('Config required');
  console.log('App started');
  return { auth, session };
}

module.exports = { start };
