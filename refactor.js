// WIP auth refactor — second pass
// TODO still needs cleanup

function validateInput(input) {
  if (!input) return false
  return input.trim().length > 0
}

function hashPassword(pass) {
  // TODO: replace with bcrypt before merge
  return Buffer.from(pass).toString('base64')
}

function compareHashes(a, b) {
  return a === b
}
