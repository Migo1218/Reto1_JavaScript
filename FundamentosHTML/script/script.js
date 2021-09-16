function imprimir(nombre, apellido) {
    console.log(nombre);
    console.log(apellido);
}

function suma(a, b) {
    console.log(a + b)
    var c = a + b +10
    console.log(c)
}

var danger = `
<div class="alert alert-danger" role="alert">
Inserte bien los datos
</div>`
function convertir() {
    var amount = document.getElementById('amount')
    var fromCurrency = document.getElementById('fromCurrency')
    var toCurrency = document.getElementById('toCurrency')
    console.log(amount.value)
    console.log(toCurrency.value)
    console.log(fromCurrency.value)
    fetch(`https://api.frankfurter.app/latest?amount=${amount.value}&from=${fromCurrency.value}&to=${toCurrency.value}`)
.then(function obtenerRespuesta(response) {
    
    return response.json()
})
.then(function name(data) {
    console.log(data)
    var value = Object.values(data.rates)[0]
    console.log(value)
    alert(`${data.amount} ${data.base} = ${value} ${toCurrency.value}`)
}).catch(function catchError(error) {
    document.body.innerHTML = document.body.innerHTML + danger
})
}
console.log('pagina cargada');
fetch('https://api.frankfurter.app/latest?amount=20&from=GBP&to=USD')
.then(function obtenerRespuesta(response) {
    return response.json()
})
.then(function name(data) {
    console.log(data)
})
var name = 'migueel'
console.log(name)
// console.log(Math.pow(2, 5))
suma(10, 2)
suma(10, 3)
console.log('terminado')
// imprimir(name, 'hernandez');
// imprimir('edward', 'ramirez');



