const temIngresso = true;
const censura = 16;
const idade = 14;
const estaComOsPais = false;
//Tem ingresso E
//Tem idade maior ou igual a censura OU está com os pais
if (temIngresso === true) {
    if (idade >= censura || estaComOsPais === true) {
        console.log("Pode entrar");
    } else {
        console.log("Barrada");
    }
} else {
    console.log("Barrada");
}

