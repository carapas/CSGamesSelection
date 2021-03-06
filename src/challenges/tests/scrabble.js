module.exports = {timeAllowed: 2, points: 2, category: 'AI', isCodingChallenge: true, tests: [
	{name: 'Un mot', inputs: [1,'test','esttabc'], outputs: ['test']},
	{name: 'Deux mots même score', inputs: [2,'test','sett', 'esttabc'], outputs: ['test']},
	{name: 'Deux mots différent score', inputs: [2,'zup','wazzup', 'zzawpub'], outputs: ['wazzup']},
	{name: 'Gros dictionnaire', inputs: [477,'fawn','nunnery','deferment','sonja','circuitry','hanging','woody', 'satire', 'houyhnhnm','aileen','scold','originality','crossbar','eugenics','trimester','appropriation','rawhide','fractal','durocher','broiler','wednesday','woods','crotch','steadfastness','asama','thrace','kublai','precocity','feasibility','bannister','sooth','selassie','prosody','jinrikisha','dormancy','centimeter','cooking','warmongering','usenet','designing','numeral','crouch','china','chino','uniroyal','chink','doldrums','existentialist','cupful','controversy','kidd','neurologist','climber','golden','topography','projection','fretwork','stern','agassi','portugal','insecurity','cannibal','inevitable','definiteness','music','crooner','yahoo','alphecca','meteorologist','adventist','equilateral','murchison','simper','kampala','locker','locket','busyness','transom','wang','wand','wane','fluorite','disparagement','titanium','want','rayon','pinto','cocksucker','absolute','travel','cutback','propane','playback','dangerfield','canaries','shirker','cadence','barbra','uselessness','flossie','ptarmigan','apocrypha','wrong','pigment','arranger','glenna','caisson','kiloton','concoction','chandon','romper','transvestism','suwanee','concurrence','patricide','stoicism','ungainliness','playhouse','...','onexempt','column','whiz','condominium','advancement','proof','indulgence','tar','earnestness','tax','tad','tag','kidnapper','tam','serial','tao','rape','squealer','legging','twizzlers','jape','guru','inaugural','goldsmith','panic','administrator','hurdler','heckling','perjury','expatriation','ethnic','footpath','skullduggery','rutledge','bluebell','emanuel','irregularity','muskogee','theft','suharto','humaneness','accompanist','karakul','obeisance','gunslinger','hilary','ginsu','dogfish','reilly','bye','jukebox','contrail','crash','nihilist','flour','practice','hygrometer','flout','transmitter','easel','excitability','kornberg','cygnus','tran','fiddle','brontosaurus','blacktop','tray','muralist','imperiousness','firepower','sectional','category','semen','cheekbone','billfold','grits','zimmerman','sacrifice','proviso','dictionary','digitalis','abductor','diva','obliteration','yore','kipper','fitzpatrick','conversation','calvary','cain','ionic','boondoggle','firehouse','bleakness','harmlessness','probation','endemic','salient','droop','intention','nomination','overdraft','myspace','galley','triumvirate','anaemia','motorcar','drool','dschubba','transubstantiation','constituent','institution','bismuth','enticement','clemson','sculpture','bodice','lateness','alfonso','muezzin','agronomy','florin','agency','bagel','sindhi','wetback','gracelessness','optometry','siphon','noggin','deena','fortieth','weeper','dent','dena','deng','fief','myrna','aquafresh','seaweed','chicken','debate','brainteaser','dandruff','moet','storekeeper','cache','ninepin','forfeit','daydreamer','sagittarius','silas','dope','inseam','watercolor','ophthalmology','suet','ghetto','heretic','expertness','netzahualcoyotl','handspring','jaime','quaternary','proprietorship','sediment','inconspicuousness','goldfinch','ebb','bekesy','churchman','gerrymander','criminologist','weller','caginess','closet','genius','panty','linebacker','caracul','foetus','addie','salesgirl','spoil','dependance','memento','barrett','soapbox','wilbur','profanity','heterosexuality','broadside','grain','canopy','premise','hyphen','neighborliness','fishhook','softie','window','reindeer','cordite','emirate','zenger','verizon','butchery','buffy','shuttlecock','waggle','repetition','rasher','kerchief','wilt','vanilla','cursor','wild','wile','hobbyhorse','jehovah','ideogram','whorl','whore','vintage','headlight','fomentation','zilch','firmament','parthenon','premiere','diploma','octagon','issuance','antipasto','overwork','declamation','english','breaker','rocker','rocket','boot','wren','miniscule','happiness','temerity','disturbance','harare','sky','micronesia','sweetener','thermodynamics','adoption','ski','armonk','knob','saturation','branch','knot','alisha','obliqueness','iberia','pygmalion','cutlet','hitchhike','dancer','nominative','lance','sequence','dispossession','birthmark','eventfulness','preposition','holler','empire','holley','leaf','lead','zanuck','leak','lean','lear','leap','friskiness','saltcellar','voluptuousness','leader','haywood','murderer','thoroughfare','slur','mitt','slut','wesley','corpuscle','mite','slug','slue','throne','throng','incline','hausdorff','biscuit','dependence','shipping','sidekick','uccello','dependency','epiphany','lardner','warranty','bugle','hotcake','headphone','brush','registration','maize','grapevine','preferment','hypnotism','footwork','clampdown','wight','brashness','nassau','goose','tab','daffodil','gelatine','windfall','benetton','hilfiger','jewel','horsewoman','dearth','carbohydrate','hardiness','goodness','attributive','boor','percent','illinois','book','boom','boon','boob','malefactor','junk','juno','xenon','june','jung','sherd','dissension','sheri','emery','flatfish','northerly','jawbone','aretsui'],
	outputs: ['satire']}
], python:
`N = parseInt(raw_input())
for i in xrange(N):
	word = raw_input()

letters = raw_input()
`, javascript:
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


var letters = readline();
`};