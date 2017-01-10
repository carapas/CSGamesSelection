module.exports = {timeAllowed: 5, points: 8, category: 'Reverse', isCodingChallenge: true, tests: [
	{name: 'Exemple', inputs: ['0xe5e7fe10'], outputs: ['12','32','2r','4r']},
	{name: 'Overflow test', inputs: ['0x63cdfe10'], outputs: ['f1','h1','eq','gq']},
	{name: 'Random test', inputs: ['0x67cbfe10'], outputs: ['j3', 'l3', 'is', 'ks']}],python: `ecx = raw_input()`, javascript:
`var fs = require('fs');
try{
  var response = fs.readSync(process.stdin.fd, 10000, 0, "utf8");
} catch(e) {
  var response = [''];
  console.warn('No inputs in input-search');
}
var lines__ = response[0].split('\\r\\n');
var idx__ = 0;


var readline = () => {
    idx__++;
    return lines__[idx__-1];
};

var ecx = readline();
`};