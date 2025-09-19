{
	const str = 'hello';
const num = 12;
const bool = true;
const nul = null;
const undef = undefined;
const sym = ("unique");
const bigIntNum = 109876543210;

const primitive = [str,num,bool,nul,undef,sym,bigIntNum];

for (const value of primitive) {console.log
	(value, "=> typeof:", typeof value)};
}