// Auth helpers — refactored

function validateInput(input) {
  return typeof input === 'string' && input.trim().length > 0;
}

function hashPassword(password) {
  return Buffer.from(password).toString('base64');
}

function compareHashes(a, b) {
  return a === b;
}

module.exports = { validateInput, hashPassword, compareHashes };

function sanitize(input) {
  return String(input).replace(/[<>'"]/g, '');
}
