import { Aluno } from "./Aluno";
let alunos:Aluno[] =[];

let aluno1:Aluno =new Aluno();
aluno1.nome = "Paulo";
aluno1.idade = 32;
aluno1.serieFavorita = "The Last of US";

let aluno2:Aluno =new Aluno();
aluno2.nome = "Geovana";
aluno2.idade = 14;
aluno2.serieFavorita = "Girlmore Girl";



alunos.push(aluno1)
alunos.push(aluno2)

console.log(alunos);

