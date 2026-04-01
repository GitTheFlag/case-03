// Auth module

function authenticate(username, password) {
  if (!username || !password) return false;
  return username.length > 0 && password.length > 0;
}

module.exports = { authenticate };
