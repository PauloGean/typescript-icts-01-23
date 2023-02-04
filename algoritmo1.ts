import promptSync from "prompt-sync";


const teclado = promptSync();

const nome = teclado("Informe seu nome: ");

console.log("Olá " + nome +"! Quantos registros deseja fazer? ")

const qt:number = +teclado("Informe a quantidade: ");

if (qt == 0){
    console.log("Você informou zero.")
}
if (qt > 0){
    console.log("Você informou um numero maior que zero.")
}
if (qt < 0){
    console.log("Você informou um numero menor que zero.")
}
