function saludar() {
    alert("Hola!!!");
}

function sumar() {
    var numA = 0;
    var numB = 0;

    numA = parseInt(document.getElementById("numeroA").value);
    numB = parseInt(document.getElementById("numeroB").value);

    var resultado = numA + numB;

    document.getElementById("result").innerHTML = resultado;
}

function restar(){
    var numA = 0;
    var numB = 0;

    numA = parseInt(document.getElementById("numeroA").value);
    numB = parseInt(document.getElementById("numeroB").value);

    var resultado = numA - numB;

    document.getElementById("result").innerHTML = resultado;
}

function multiplicar(){
    var numA = 0;
    var numB = 0;

    numA = parseInt(document.getElementById("numeroA").value);
    numB = parseInt(document.getElementById("numeroB").value);

    var resultado = numA * numB;

    document.getElementById("result").innerHTML = resultado;
}

function dividir(){
    var numA = 0;
    var numB = 0;

    numA = parseInt(document.getElementById("numeroA").value);
    numB = parseInt(document.getElementById("numeroB").value);

    var resultado = numA / numB;

    document.getElementById("result").innerHTML = resultado;
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


function bar(){
    var name = "";
    var birthYear = 0;
    var birthMonth = 0;
    var age = 0;
    var message = "";

    var today = new Date();
    var currentMonth = today.getMonth() + 1;
    var currentYear = today.getFullYear();
    console.log("Mes de hoy: " + currentMonth);
    console.log("Año actual: " + currentYear);

    name = document.getElementById("campoNombre").value;
    birthYear = document.getElementById("campoAnho").value;
    birthMonth = document.getElementById("campoMes").value;

    age = currentYear - birthYear;

    if(currentMonth > birthMonth){
        console.log("Ya paso");
    } else {
        console.log("Aún no pasa");
        age = age - 1;
    }

    console.log(age);

    if(age >= 18){
        message = "Te damos la bienvenida " + name + " tu edad es " + age + " años, puedes pasar al bar 🍻.";
    } else {
        message = "Lo siento " + name + ", tienes " + age + " años. Aún no puedes pasar ❌." + "<div class='support'> <h3>Crees que hubo un error?</h3> <button>SOLICITAR AYUDA</button> </div>";
    }

    document.getElementById("message").innerHTML = message;
}

function cine() {
    var tickets = 0;
    var popcorn = 0;
    var soda = 0;

    var totalTickets = "";
    var totalPopcorn = "";
    var totalSoda = "";

    var finalOrder = "";

    tickets = document.getElementById("tickets").value;
    popcorn = document.getElementById("popcorn").value;
    soda = document.getElementById("soda").value;

    console.log(tickets + popcorn + soda);

    for(var i=0; i < tickets; i++){
        totalTickets = totalTickets + "🎫 ";
    }

    for(var j=0; j < popcorn; j++){
        totalPopcorn = totalPopcorn + "🍿 ";
    }

    for(var k=0; k < soda; k++){
        totalSoda = totalSoda + "🥤 ";
    }

    finalOrder = totalTickets + totalPopcorn + totalSoda;

    console.log(finalOrder);

    document.getElementById("venta").innerHTML = "<h1>" +  finalOrder + "</h1>";

    // Select dulces
    // Mandar una alerta si compraste más de tres boletos: POCA DISPONIBILIDAD.
    // Mandar un mensaje de promos si compraste menos refresco que palomitas.

}