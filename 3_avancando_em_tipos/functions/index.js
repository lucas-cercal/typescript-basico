function soma(a, b) {
    console.log(a + b);
}
soma(4, 2);
//soma("a", "b")
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
var pessoaObj = { name: "Lucas", surname: "Cercal Fontes" };
console.log(pessoaObj);
function showNumber(a, b, c) {
    console.log("A " + a);
    console.log("B " + b);
    if (c)
        console.log("C " + c);
}
showNumber(1, 2, 3);
showNumber(1, 2);
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined)
        return "Ol\u00E1, ".concat(firstName, " ").concat(lastName, ", tudo bem?");
    return "Ol\u00E1, ".concat(firstName, ", tudo bem?");
}
console.log(advancedGreeting("Lucas", "Cercal"));
console.log(advancedGreeting("Lucas"));
function showBalance(balance) {
    console.log("O saldo da conta \u00E9 R$".concat(balance));
}
showBalance(100);
showBalance("500");
// showBalance(true)
