// WIP auth refactor — rough draft
// TODO fix this mess

function validateInput(input) {
  if (input == null) return false
  if (input == "") return false
  if (input.length == 0) return false
  return true
}

function hashPassword(pass) {
  return btoa(pass) // TODO: replace with proper hashing
}
