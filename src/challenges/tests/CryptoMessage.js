module.exports = {timeAllowed: 2, points: 2, category: 'Securite', isCodingChallenge: true, tests: [
	{name: 'Message Philosophique', inputs: ['EFYAHFJ9bFYKJxMzFAETPl1ZHgAQBhNULhI=='], outputs: [`Ceci N'est Pas un M3ssage!`]},
	{name: 'Humility', inputs: ['GVZDBgdaOBMVNhMOEBtfJ1YMIRMABwtDP1weIVITHRdGORMdJhMOGhxXLhI='], outputs: [`Je suis le meilleur cryptographeur du monde!`]}],python: `cipger = raw_input()`, javascript:
`"use strict";

const fs = require("fs");

const BUFSIZ = 65536;
let buf = new Buffer(BUFSIZ);
buf.fill('\x00');
let response = [""];
try {
  fs.readSync(process.stdin.fd, buf, 0, BUFSIZ, null);
  const stopIdx = buf.indexOf(0);
  buf = buf.slice(0,stopIdx);
} catch(e) {
  console.warn(e);
  console.warn("No inputs in defi");
  process.exit(1);
}

response = buf.toString("utf-8");
let idx__ = 0;
let lines__ = response.split('\r\n');

var readline = () => {
    idx__++;
    return lines__[idx__-1];
};


var cipher = readline();
`};