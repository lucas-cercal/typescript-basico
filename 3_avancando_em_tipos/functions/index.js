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
