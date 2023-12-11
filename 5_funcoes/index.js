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
