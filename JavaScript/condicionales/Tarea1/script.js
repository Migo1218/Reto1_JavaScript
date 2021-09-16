let horas = 0
let horasext = 0
let SalarioSema = 0
let SalarioT = 0

horas = Number(prompt("Ingrese el número de horas"))

horasext = horas - 40

if(horas <= 40 ){
    SalarioSema = horas * 16
    alert("el salario total es " + SalarioSema)
}else{
    SalarioT = 640 + (horasext * 20)
    alert("el salario total es " + SalarioT)
}

