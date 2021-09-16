let n1,n2,n3
let mayor = 0

n1 = Number(prompt("Ingrese número 1"))
n2 = Number(prompt("Ingrese número 2"))
n3 = Number(prompt("Ingrese número 3"))

if((n1>n2) && (n1>n3)){
    mayor = n1
}else if((n2>n1) && (n2>n3)){
    mayor = n2
}else{
    mayor = n3
}

alert("El numero mayor es " + mayor)