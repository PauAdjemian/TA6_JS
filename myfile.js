function convertToCelsius(temp) {
    return ((temp - 32) * 5 / 9).toFixed(1);
};

function convertToFahrenheit(temp) {
    return ((temp * 9 / 5) + 32).toFixed(1);
};


const a = document.getElementById('a');
const boton = document.getElementById("Celsius");
const resultado = document.getElementById('resultado');
boton.addEventListener("click", () => {
    const valorA = parseInt(a.value, 10);
    const result = convertToCelsius(valorA);
    resultado.textContent = result;    
});

const boton1 = document.getElementById("Fahrenheit");
boton1.addEventListener("click", () => {
    const valorA = parseInt(a.value, 10);
    const result = convertToFahrenheit(valorA);
    resultado.textContent = result;    
});