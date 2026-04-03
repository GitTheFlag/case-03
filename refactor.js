// WIP auth refactor — almost ready
// Dev1: squash all three commits and rebase before the PR

function validateInput(input) {
  return typeof input === 'string' && input.trim().length > 0
}

function hashPassword(password) {
  return Buffer.from(password).toString('base64')
}

function compareHashes(a, b) {
  return a === b
}
