const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { scan, cleanUserText } = require('../lib/chat');

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'buddy-chat-'));
const file = path.join(dir, 't.jsonl');
const L = (o) => JSON.stringify(o) + '\n';
const user = (text, extra = {}) => L({ type: 'user', uuid: 'u' + Math.random(), timestamp: new Date().toISOString(), message: { role: 'user', content: text }, ...extra });
const asst = (id, blocks, extra = {}) => L({ type: 'assistant', uuid: 'a' + Math.random(), timestamp: new Date().toISOString(), message: { id, role: 'assistant', model: 'claude-sonnet-5-5', content: blocks }, ...extra });
const h = {};

fs.writeFileSync(file,
  user('fix the bug in main.js') +
  asst('m1', [{ type: 'thinking', thinking: 'hmm' }]) +
  asst('m1', [{ type: 'text', text: 'Looking at it.' }]) +
  asst('m1', [{ type: 'tool_use', id: 't1', name: 'Read', input: { file_path: '/x/main.js' } }]) +
  L({ type: 'user', uuid: 'tr', message: { role: 'user', content: [{ type: 'tool_result', tool_use_id: 't1', content: 'file text' }] } }) +
  asst('m2', [{ type: 'text', text: '**Fixed.** Run `npm test`.' }]) +
  user('<system-reminder>hidden</system-reminder>', {}) +
  user('side chat', { isSidechain: true }) +
  user('meta line', { isMeta: true }) +
  user('<command-name>/model</command-name>\n<command-message>model</command-message>\n<command-args>opus</command-args>'));

let msgs = scan(h, file);
assert.deepStrictEqual(msgs.map((m) => m.role), ['user', 'assistant', 'assistant', 'user'], JSON.stringify(msgs.map((m) => [m.role, m.text])));
assert.strictEqual(msgs[0].text, 'fix the bug in main.js');
assert.strictEqual(msgs[1].text, 'Looking at it.');           // blocks of one message merge
assert.deepStrictEqual(msgs[1].tools.map((t) => t.name + ':' + t.text), ['Read:main.js']);
assert.strictEqual(msgs[2].text, '**Fixed.** Run `npm test`.');
assert.strictEqual(msgs[3].text, '/model opus');            // slash commands read like the terminal shows them

// incremental + partial line
const more = user('thanks!');
fs.appendFileSync(file, more.slice(0, 30));
assert.strictEqual(scan(h, file).length, 4);
fs.appendFileSync(file, more.slice(30));
msgs = scan(h, file); assert.strictEqual(msgs.length, 5); assert.strictEqual(msgs[4].text, 'thanks!');

// a message that gains a block later is updated in place, not duplicated
fs.appendFileSync(file, asst('m2', [{ type: 'tool_use', id: 't2', name: 'Bash', input: { command: 'npm test' } }]));
msgs = scan(h, file); assert.strictEqual(msgs.filter((m) => m.id === 'm2').length, 1); assert.strictEqual(msgs.find((m) => m.id === 'm2').tools.length, 1);

assert.strictEqual(cleanUserText('<local-command-caveat>x</local-command-caveat>'), '');
assert.doesNotThrow(() => scan({}, path.join(dir, 'missing.jsonl')));
console.log('chat: all tests passed');
