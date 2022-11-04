const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#n1')
const input2 = document.querySelector('#n2')
const btn = document.querySelector('#calcular')
const pResult = document.querySelector('#resultado')

form.addEventListener('submit', sumarInputValues)

function sumarInputValues (event) {
    event.preventDefault()
    const sumaInputs = (Number(input1.value) + Number(input2.value))
    pResult.innerText = "Resultado: " + sumaInputs
}