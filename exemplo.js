const temIgresso = true;
const censura = 16;
const idade = 16;
// ter ingresso e ter a idade igual ou maior permitida
if (temIgresso === true) {
    if (idade >= censura) {
        console.log("Pode entrar");
    } else {
        console.log("Barrada");
    }
} else {
    console.log("Barrada");
}