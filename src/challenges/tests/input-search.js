module.exports = {timeAllowed: 5, points: 8, category: 'Reverse', isCodingChallenge: true, tests: [
	{name: 'Exemple', inputs: ['0xe5e7fe10'], outputs: ['12','32','2r','4r']},
	{name: 'Overflow test', inputs: ['0x63cdfe10'], outputs: ['f1','h1','eq','gq']},
	{name: 'Random test', inputs: ['0x67cbfe10'], outputs: ['j3', 'l3', 'is', 'ks']}
]};