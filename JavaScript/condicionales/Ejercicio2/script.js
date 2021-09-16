let nota1 = 0
let nota2 = 0
let nota3 = 0
let prom = 0

nota1 = Number(prompt("ingrese nota 1"))
nota2 = Number(prompt("ingrese nota 2"))
nota3 = Number(prompt("ingrese nota 3"))

prom = (nota1 + nota2 + nota3) / 3

if(prom >= 3){
    alert ("el estudiante ha aprobado con " + prom)
}else{
    alert ("el estudiante ha reprobado con " + prom)
}