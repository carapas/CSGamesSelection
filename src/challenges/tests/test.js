module.exports = {timeAllowed: 2, tests: [
	{name: 'Successfull Test', inputs: [1,1,'html text/html', 'hey.html'], outputs: ['text/html']},
	{name: 'Fail Test', inputs: [1,1,'html text/html', 'hey.html'], outputs: ['undefined']}
]};
