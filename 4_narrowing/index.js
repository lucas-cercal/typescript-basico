// 1 - type guard
function sum(a, b) {
    if (typeof a === 'string' && typeof b === 'string')
        console.log(parseFloat(a) + parseFloat(b));
    else if (typeof a === 'number' && typeof b === 'number')
        console.log(a + b);
    else
        console.log('Impossível realizar a soma!');
}
sum('4', '59');
sum(12, 59);
sum('4', 59);
