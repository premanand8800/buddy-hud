// Signs release zips for the in-app updater: writes <file>.sig = base64(Ed25519("<name>:<sha256>")).
// usage: RELEASE_SIGNING_KEY="$(cat private.pem)" node scripts/sign-release.js dist/*.zip
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const key = process.env.RELEASE_SIGNING_KEY;
if (!key) { console.error('RELEASE_SIGNING_KEY is not set'); process.exit(1); }
const files = process.argv.slice(2);
if (!files.length) { console.error('no files given'); process.exit(1); }
const priv = crypto.createPrivateKey(key);
for (const f of files) {
  const sha = crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex');
  fs.writeFileSync(f + '.sig', crypto.sign(null, Buffer.from(`${path.basename(f)}:${sha}`), priv).toString('base64') + '\n');
  console.log('signed', path.basename(f), sha.slice(0, 12));
}
