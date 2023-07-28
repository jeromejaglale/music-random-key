const notes = [
	'C',
	'G',
	'D',
	'A',
	'E',
	'B',
	'F#',
	'C#',
	'F',
	'B♭',
	'E♭',
	'A♭',
	'D♭',
	'G♭',
	'C♭'
];

const modes = [
	'major',
	'minor'
];

const i = Math.floor(Math.random() * notes.length);
const note = notes[i];

const j = Math.floor(Math.random() * modes.length);
const mode = modes[j];

const key = note + ' ' + mode;
console.log(key);

document.getElementById('key').innerHTML = key;