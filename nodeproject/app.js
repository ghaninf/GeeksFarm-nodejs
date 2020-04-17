let a = 30;
let b = 10;
let c = 10;

console.log('Module Literal');
var tambah = require('./literal/tambah.js');
console.log(tambah);
var kurang = require('./literal/kurang.js');
console.log(kurang);
var kali = require('./literal/kali.js');
console.log(kali);
var bagi = require('./literal/bagi.js');
console.log(bagi);

console.log('Module Object');
var object = require('./object/aritmatic.js');
console.log(object.tambah);
console.log(object.kurang);
console.log(object.kali);
console.log(object.bagi);

console.log('Module Function');
var functionTambah = require('./function/tambah.js');
functionTambah(a,b,c);
var functionKurang = require('./function/kurang.js');
functionKurang(a,b,c);
var functionKali = require('./function/kali.js');
functionKali(a,b,c);
var functionBagi = require('./function/bagi.js');
functionBagi(a,b,c);

console.log('Module Class');
var classAritmathic = require('./class/aritmatic.js')
var classAritmathic1 = new classAritmathic(a,b,c,);
console.log(classAritmathic1.tambah());
console.log(classAritmathic1.kurang());
console.log(classAritmathic1.kali());
console.log(classAritmathic1.bagi());