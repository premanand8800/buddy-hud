# Security

Buddy HUD edits `~/.claude/settings.json`, listens on `127.0.0.1`, and (on macOS) can update itself, so please report problems privately.

**Report a vulnerability:** use GitHub's "Report a vulnerability" (Security tab) on this repository, or email the maintainer. Please do not open a public issue for security problems.

**What is signed:** macOS update zips carry an Ed25519 signature (`*.zip.sig`) verified against the public key in `lib/macupdate.js`. The private key lives only in the `release` environment secret `RELEASE_SIGNING_KEY`.

**Rotating the signing key:** generate a new pair, replace `PUBLIC_KEY` in `lib/macupdate.js`, update the secret, and ship that version as a manual install (older apps will reject the new signatures).
