function saludar() {
    alert("Hola!!!");
}

function sumar() {
    var numA = 113;
    var numB = 72;

    var resultado = numA + numB;

    alert(resultado);
}

function restar(){
    alert("Aqui vamos a restar");
}

function multiplicar(){
    alert("Aqui vamos a multiplicar");
}

function dividir(){
    alert("Aqui vamos a dividir");
}

function modulo() {
    var numA = 37;
    var numB = 8;

    var resultado = numA % numB;

    alert(resultado);
}

function comparar() { 
    var numA = 10;
    var numB = 80;

    if(numA > numB){
        alert("El primer número es mayor");
    } else { 
        alert("El primer número es menor");
    }
}

function esPar() {
    var numeroDeEntrada = 14321;
    var residuo = numeroDeEntrada % 2;

    if(residuo == 0){
        alert("Tu número es par");
    } else {
        alert("Tu número es impar")
    }
}

function repetir() {
    var cuantasVeces = 92;

    for(var contador=0; contador < cuantasVeces; contador++){
        console.log("Hola");
    }
}

function contar() { 
    var hastaQueNumero = 99;

    for(var i=0; i<=hastaQueNumero; i++){
        console.log(i);
    }
}

function checkINE() {
    var nombre = "";
    var anho = 0;

    nombre = document.getElementById("campoNombre").value;
    anho = document.getElementById("campoAnho").value;

    //calcular la edad
    var edad = 2023 - anho;

    console.log(edad);

    //evaluamos la mayoría de edad e imprimimos mensaje
    // ejercicio adicional, Personalizar mensajes de aceptación o rechazo
    if(edad > 18 ){
        console.log("Puedes entrar al bar 🍻");
    } else {
        console.log("Prohibida la entrada ❌");
    }

    // refinar el algoritmo para que tome en cuenta mes y año
}