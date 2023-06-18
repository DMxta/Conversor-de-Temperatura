function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmCelsius = parseFloat(valor);
    
    var valorEmFahrenheit = (valorEmCelsius*1.8) + 32;
    console.log(valorEmFahrenheit);
    var elementoFahConvertido = document.getElementById("valorConvertido")
    var valorFahConvertido = "O valor em Fahrenheit é de °F " + valorEmFahrenheit;
    elementoFahConvertido.innerHTML = valorFahConvertido;
    
  
    var valorEmKelvin = valorEmCelsius + 273.15;
    console.log(valorEmKelvin);
    var elementoKelConvertido = document.getElementById("kelvin")
    var valorKelConvertido = "O valor em Kelvin é de K " + valorEmKelvin;
    elementoKelConvertido.innerHTML = valorKelConvertido;
  }