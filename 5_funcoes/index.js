var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 1 - void
function withoutReturn() {
    console.log('Esta função não tem retorno!');
}
withoutReturn();
// 2 - callback como argumento
function greeting(name) {
    return "Ol\u00E1 ".concat(name);
}
function isValidName(name) {
    return name.length >= 3;
}
function preGreeting(f, userName) {
    console.log('Preparando a função!');
    if (isValidName(userName)) {
        console.log('Nome válido. Realizando a saudação...');
        var greet = f(userName);
        console.log('Saudação realizada com sucesso!');
        console.log(greet);
    }
    else {
        console.log('Nome inválido para saudação.');
    }
}
preGreeting(greeting, 'Lucas');
preGreeting(greeting, 'Oi');
// 3 - generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(['a', 'b', 'c']));
// console.log(firstElement('Teste'))
function mergeObjects(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var newObject = mergeObjects({ name: 'Lucas' }, { age: 24, job: 'Programmer' });
console.log(newObject);
