let num

num = Number(prompt("ingrese numero"))

parImpar(num)

function parImpar (numero){
    if(numero%2==0){
        alert (`El numero ${numero} es par`)
    }else{
        alert (`El numero ${numero} es Impar`)
    }
}