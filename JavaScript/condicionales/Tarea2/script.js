let calT = 0
let reposoT = 0
let dormidoT = 0
let estadoP

estadoP = prompt("ingrese estado del paciente. Elija uno de los siguientes estados y escríbalo: REPOSO o DORMIDO")



if(estadoP == "REPOSO"){
    reposoT = Number(prompt("Ingrese el tiempo EN MINUTOS en reposo"))
    calT = reposoT * 1.08
    alert("El paciente ha consumido " + calT)
}if(estadoP == "DORMIDO"){
    dormidoT = Number(prompt("Ingrese el tiempo EN MINUTOS dormido"))
    calT = dormidoT * 1.66
    alert("El paciente ha consumido " + calT)
}


