module.exports = {timeAllowed: 5, points: 8, category: 'Reverse', isCodingChallenge: true, tests: [
	{name: 'Exemple', inputs: ['0xe5e7fe10'], outputs: ['12','32','2r','4r']},
	{name: 'Overflow test', inputs: ['0x63cdfe10'], outputs: ['f1','h1','eq','gq']},
	{name: 'Random test', inputs: ['0x67cbfe10'], outputs: ['j3', 'l3', 'is', 'ks']}],python: `ecx = raw_input()`, javascript:
`var fs = require('fs');
try{
  var BUFSIZ = 65536;
  var buf = new Buffer(BUFSIZ);
  var nbytes = fs.readSync(process.stdin.fd, buf, 0, BUFSIZ, null);
  var stopIdx = buf.indexOf(0);
  buf = buf.slice(0,stopIdx);
} catch(e) {
  var response = [''];
  console.warn(e);
  console.warn('No inputs in scrabble');
}

var response = buf.toString('utf-8');
var lines__ = response.split('\r\n');
var idx__ = 0;

var readline = () => {
    idx__++;
    return lines__[idx__-1];
};


var ecx = readline();
`};