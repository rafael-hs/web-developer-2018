Object.prototype.attr0 = '0'
const avo = {attr1: 'A'}
const pai = { __proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr1, filho.attr0)