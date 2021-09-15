let dolar = document.createElement('p')
dolar.textContent = '0$';
dolar.style.color = 'white';
dolar.style.fontSize = '30px';
document.body.appendChild(dolar)

let button = document.getElementById('converta');

button.addEventListener('click', () => {
    let num = document.querySelector('input#real');
    let value = Number(num.value) / 5.24;
    let valor = value.toFixed(2)
    dolar.textContent = `${valor}$`;
})