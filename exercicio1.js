const valorCompra = 128;
const numeroDeParcelas = 5;

if (numeroDeParcelas === 1) {
    //a vista - com 10% de desconto
    const desconto = valorCompra * 10 / 100
    valorApagar = valorCompra - desconto;
    console.log(`Você deve pagar ${valorApagar}`)
} else {
    //parcelado
    const valorDaParcela = valorCompra / numeroDeParcelas
    console.log(`Você deve pagar ${numeroDeParcelas} Parcelas de R$${valorDaParcela.toFixed(2)}`)
}