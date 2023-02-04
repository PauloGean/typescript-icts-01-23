import promptSync from "prompt-sync";
import { Aluno } from "./Aluno";
/**
Algoritmo de cadastro de Alunos usando orientacao a Objeto
IF e FOR
 */


const teclado = promptSync();

const nome = teclado("Informe seu nome: ");

console.log("Olá " + nome +"! Quantos registros deseja fazer? ")

const qt:number = +teclado("Informe a quantidade: ");

if (qt == 0){
    console.log("Você informou zero.")
}
if (qt < 0){
    console.log("Você informou um numero menor que zero.")
}

let alunoLista:Aluno[]=[]
// for (<inicializar valor>; <condicao para executar novamente>; <incremento do valor>)
for(let i=0;i<qt ; i=i+1){
    console.log("Cadastro Aluno =" + i);
    let aluno:Aluno =new Aluno();
    aluno.nome = teclado("Informe o nome: ");
    aluno.idade = +teclado("Informe a Idade: ")
    aluno.serieFavorita = teclado("Informe a serie Favorita: ")
    alunoLista.push(aluno)
    console.clear()
}


 console.log("Lista de Alunos");

 //console.log("Nome  |Idade  |Serie Favorita");
 for(let x=0;x<qt ; x=x+1){
   const aluno= alunoLista[x];
   console.log(`Nome: ${aluno.nome}   | Idade:${aluno.idade} | Série:${aluno.serieFavorita}`);
}
