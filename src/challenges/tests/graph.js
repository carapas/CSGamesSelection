module.exports = {
  timeAllowed: 2, points: 4, category: 'AI', isCodingChallenge: true, tests: [
    {
      name: "There's only one way",
      inputs: ['15',
               '25',
               '5',
               '2',
               '0 3 1',
               '0 4 1',
               '1 0 7',
               '1 3 3',
               '2 9 15',
               '3 0 1',
               '3 4 2',
               '4 6 4',
               '5 0 3',
               '5 7 2',
               '6 2 4',
               '6 5 2',
               '6 8 1',
               '6 11 11',
               '7 10 1',
               '7 11 6',
               '9 13 4',
               '10 14 15',
               '11 9 1',
               '11 12 8',
               '11 13 6',
               '11 14 9',
               '12 14 2',
               '13 12 1',
               '14 10 4',
              ],
      outputs: ['5', '0', '4', '6', '2']
    },
    {
      name: "That's long",
      inputs: ['15',
               '25',
               '1',
               '14',
               '0 3 1',
               '0 4 1',
               '1 0 7',
               '1 3 3',
               '2 9 15',
               '3 0 1',
               '3 4 2',
               '4 6 4',
               '5 0 3',
               '5 7 2',
               '6 2 4',
               '6 5 2',
               '6 8 1',
               '6 11 11',
               '7 10 1',
               '7 11 6',
               '9 13 4',
               '10 14 15',
               '11 9 1',
               '11 12 8',
               '11 13 6',
               '11 14 9',
               '12 14 2',
               '13 12 1',
               '14 10 4',
              ],
      outputs: ['1', '3', '4', '6', '5', '7', '11', '9', '13', '12', '14']
    }
  ]
  ,python:
  `
nb_nodes = int(raw_input())
nb_arcs = int(raw_input())
initial_node = int(raw_input())
final_node = int(raw_input())
arcs = []
for i in xrange(nb_arcs):
   arcs.append(raw_input().replace("\n", "").replace("\r", ""))
`, javascript:
  `
"use strict";

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

var nbNodes = parseInt(readline())
var nbArcs = parseInt(readline())
var initialNode = parseInt(readline())
var finalNode = parseInt(readline())
var arcs = []
for(var i=0; i < nbArcs; i++) {
  arcs.push(readline());
}
`};
