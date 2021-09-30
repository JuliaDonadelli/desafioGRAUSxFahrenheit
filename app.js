function ConverterTemperaturas(){
    let temperaturaEmCelsius = document.querySelector("#temperaturaEmCelsius").value  
    let celsiusConvertido = parseFloat(temperaturaEmCelsius); 
    
    let temperaturaEmFarenheit = 1.8 * celsiusConvertido + 32


/**INSERIR O RESULTADO NA TELA */
document.querySelector("#resultadoEmFahrenheit").innerHTML = "Fahrenheit:" + temperaturaEmFarenheit
}