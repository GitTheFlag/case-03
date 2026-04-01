# 🚩 Git The Flag — Case 03: The Rewritten Past

> **Mid level. Complete Case 01 and Case 02 first.**

---

## Story

Dev1 spent a week rewriting the auth module.
They rebased their branch. Cherry-picked a fix. Stashed work-in-progress.
Abandoned a draft and force-pushed it away.

They thought they cleaned everything up before going dark.

They left four things behind.

---

## Before you start

You should already know:
- `git clone`, `git branch -a`, `git checkout`
- `git log --oneline`, `git show`, `git diff`

If those feel unfamiliar, start with Case 01 and Case 02.

---

## New commands

### git stash

Saves your work-in-progress without committing it.

```bash
git stash list                         # list all saved stashes
git stash show -p                      # show what is inside the latest stash
git stash show -p stash@{n}            # show a specific stash by index
git stash apply                        # restore stash to your working directory
```

The stash is stored as a real git ref (`refs/stash`). It can be pushed to a remote.

```bash
git fetch origin refs/stash:refs/stash   # fetch a stash someone pushed
```

### git rebase

Replays commits from one branch on top of another, rewriting history.

```bash
git rebase main                    # replay current branch commits onto main
git log --oneline --graph --all    # visualize the rewritten history
```

Original commits become unreachable from the branch — but they still exist in the object store.

### git cherry-pick

Applies a specific commit from one branch onto the current branch.

```bash
git cherry-pick <hash>   # copy that commit here
```

The new commit has the same changes but a different hash. Any manual edits
made during the pick are invisible without comparing the source.

### git reflog

Shows every action ever taken locally — including commits lost after a force-push or rebase.

```bash
git reflog                    # full local history of HEAD movements
git reflog show <branch>      # history of a specific branch pointer
git show <hash>               # read a recovered commit
```

> `git reflog` is local — it records actions in your copy of the repo.
> In this case, a backup branch preserves what reflog would recover in practice.
> In your own repos, reflog is your safety net against accidental data loss.

---

## Objectives

Find all 4 flags. Each one requires a different command.

| # | Hint | Command |
|---|------|---------|
| 1 | Work was saved before a context switch — never committed | `git stash` |
| 2 | History was rewritten — the original commits still exist somewhere | `git log --all` |
| 3 | A fix was cherry-picked to main — but the source branch is different | `git diff` |
| 4 | A branch was abandoned and force-pushed away — but not gone | `git branch -a` |

**Final task:** Merge `feature/refactor` and `hotfix/session` into a new branch and open a Pull Request to `main`. CI validates both are included.

---

## How to submit a flag

Open a new [Issue](../../issues/new) and use the flag as the title:

```
GTF{the_flag_you_found}
```

A bot replies instantly and explains what you learned. ✅

> Stuck? Comment `hint` on any issue and the bot will guide you.

---

## Glossary

| Command | What it does |
|---------|--------------|
| `git stash` | Save work-in-progress without committing it |
| `git rebase` | Replay commits on top of a new base, rewriting history |
| `git cherry-pick` | Copy a specific commit to the current branch |
| `git reflog` | Show all local HEAD movements, including lost commits |
