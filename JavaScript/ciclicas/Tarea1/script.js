let num = 0

for (i = 0; i = 15; i++){
    num = Number(prompt("ingrese le numero"))
    if(num < 0){
        num = num * (-1)
        alert("El numero en positivo es " + num)
    }
}