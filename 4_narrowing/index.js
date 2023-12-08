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
// 2 - checando se valor existe
function operations(arr, operation) {
    if (operation) {
        if (operation === 'sum') {
            var sum_1 = arr.reduce(function (i, total) { return i + total; });
            console.log(sum_1);
        }
        else if (operation === 'multiply') {
            var multiply = arr.reduce(function (i, total) { return i * total; });
            console.log(multiply);
        }
    }
    else
        console.log('Por favor, defina uma operação!');
}
operations([1, 2, 3], 'sum');
operations([1, 2, 3], 'multiply');
operations([1, 2, 3]);
