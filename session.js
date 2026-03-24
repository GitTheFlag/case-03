// Session management
// GTF{ch3rry_p1ck_c0p13s_c0mm1ts}
const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes

function createSession(userId) {
  if (!userId) throw new Error('userId required');
  return { userId, createdAt: Date.now(), expires: Date.now() + SESSION_TIMEOUT };
}

function isValid(session) {
  return session && Date.now() < session.expires;
}

function destroy(session) {
  session.expires = 0;
}

module.exports = { createSession, isValid, destroy };
