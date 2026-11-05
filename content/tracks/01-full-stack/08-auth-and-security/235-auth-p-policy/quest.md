---
slug: "auth-p-policy"
title: "Practice: Attribute-Based Permissions"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Compute a few booleans up front (isAuthor, isStaff, isAdmin, isDraft). Then each rule is one line.", "The `default` case of the switch should deny: secure systems default to \"no\"."]
---
# Practice: Attribute-Based Permissions

Role checks (`admin` vs `member`) get you far, but real rules usually depend on the **resource** too: "authors can edit their own drafts", "anyone can read published posts". Centralise them in one `can()` function instead of scattering `if`s across handlers.

## Your task
Write `can(user, action, post)`, where `user` may be `null` (logged out), `user.role` is `'admin'`, `'editor'` or `'member'`, and `post` has `authorId` and `status` (`'draft'` or `'published'`). Rules:
- `'read'`: published posts are readable by anyone (including logged out). Drafts only by their author, editors and admins.
- `'update'`: the author, while it's a draft. Editors and admins can always update.
- `'publish'`: editors and admins only, and only drafts.
- `'delete'`: admins always. Authors can delete their own drafts.
- Any other action → `false`. Logged-out users can only `read` published posts.
