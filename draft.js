// Experimental rate-limiting feature
// Abandoned mid-development and force-pushed away.
//
// In your own repo, git reflog would show you this commit:
//   git reflog show main
//   git show <hash>
//
// GTF{r3fl0g_r3c0v3rs_c0mm1ts}

const requests = new Map();
const LIMIT = 100;
const WINDOW = 60 * 1000; // 1 minute

function rateLimited(userId) {
  const now = Date.now();
  const record = requests.get(userId) || { count: 0, start: now };
  if (now - record.start > WINDOW) {
    requests.set(userId, { count: 1, start: now });
    return false;
  }
  record.count += 1;
  requests.set(userId, record);
  return record.count > LIMIT;
}

module.exports = { rateLimited };
