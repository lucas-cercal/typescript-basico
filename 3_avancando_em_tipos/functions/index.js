function soma(a, b) {
    console.log(a + b);
}
soma(4, 2);
//soma('a', 'b')
function greeting(name) {
    return "Ol\u00E1 ".concat(name);
}
console.log(greeting('Lucas'));
setTimeout(function () {
    var sallary = 1000;
    //console.log(sallary)
}, 2000);
function passCoordinates(coord) {
    console.log('X coordinates: ' + coord.x);
    console.log('X coordinates: ' + coord.y);
}
var objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
var pessoaObj = { name: 'Lucas', surname: 'Cercal Fontes' };
console.log(pessoaObj);
function showNumber(a, b, c) {
    console.log('A ' + a);
    console.log('B ' + b);
    if (c)
        console.log('C ' + c);
}
showNumber(1, 2, 3);
showNumber(1, 2);
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined)
        return "Ol\u00E1, ".concat(firstName, " ").concat(lastName, ", tudo bem?");
    return "Ol\u00E1, ".concat(firstName, ", tudo bem?");
}
console.log(advancedGreeting('Lucas', 'Cercal'));
console.log(advancedGreeting('Lucas'));
function showBalance(balance) {
    console.log("O saldo da conta \u00E9 R$".concat(balance));
}
showBalance(100);
showBalance('500');
// showBalance(true)
function showUserRole(role) {
    if (typeof role === 'boolean')
        return 'Usuário não aprovado!';
    return "A fun\u00E7\u00E3o do usu\u00E1rio \u00E9: ".concat(role);
}
console.log(showUserRole('Admin'));
console.log(showUserRole(false));
function showId(id) {
    console.log("O ID \u00E9: ".concat(id));
}
showId(1);
showId('1');
function showCoords(obj) {
    console.log("X: ".concat(obj.x, " Y: ").concat(obj.y, " Z: ").concat(obj.z));
}
var coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
var somePerson = { name: 'Lucas', age: 23 };
console.log(somePerson);
function showDirection(direction) {
    console.log("A dire\u00E7\u00E3o \u00E9: ".concat(direction));
}
showDirection('center');
showDirection('left');
showDirection('right');
// showDirection('error')
var p = document.getElementById('some-p');
console.log(p.innerText);
var n;
n = 1000n;
console.log(n);
console.log(typeof n);
console.log(n + 100n);
