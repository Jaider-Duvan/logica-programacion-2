
    const prompt = require("prompt-sync")();
    let temCelsius, temKelvin , temFahre ;

    temCelsius= Number(prompt("Ingrese la temperatura a convertir: "))

    temKelvin = temCelsius + 273.15;
    temFahre= (temCelsius *  1.8) + 32;
    
    console.log("la temperatura en kelvin es : ", temKelvin);
    console.log("la temperatura en Fahrenheit es : ", temFahre);
    

