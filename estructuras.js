function arreglos(){
    var coleccion = ["azul", "rojo", "verde", "amarillo", "morado", "rosa", "negro", "gris"];

    for(var i=0; i<coleccion.length; i++){
        console.log(coleccion[i]);
    }
}

function objetos(){
    var caracteristicas = {nombre:"Jose Luis", edad:"30", estatura:100};

    console.log(caracteristicas.estatura);
}

function agenda(){
    var amigos = [
        {
            name:"Juan", 
            phone:12341234, 
            mail:"juan@mail.com"
        }, 
        {
            name:"Dahyna", 
            phone:12341234, 
            mail:"dahyna@mail.com"
        }, 
        {
            name:"Fernando", 
            phone:12341224, 
            mail:"fer@mail.com"
        }
    ];

    var constructorPersona = "";
    var result = "";

    for(var i=0; i<amigos.length; i++){
        constructorPersona = constructorPersona + amigos[i].name + amigos[i].phone + amigos[i].mail;
        console.log(constructorPersona);
    }

    result = constructorPersona;

    document.getElementById("listaAmigos").innerHTML = result;
}


function agenda2(){
    var amigos = [
        {
            name:"Juan", 
            phone:12341234, 
            mail:"juan@mail.com"
        }, 
        {
            name:"Dahyna", 
            phone:12341234, 
            mail:"dahyna@mail.com"
        }, 
        {
            name:"Fernando", 
            phone:12341224, 
            mail:"fer@mail.com"
        },
        {
            name:"Carlos", 
            phone:12341224, 
            mail:"carlos@mail.com"
        }
    ];

    var constructorPersona = "";
    var result = "";

    for(var i=0; i<amigos.length; i++){
        constructorPersona +=   "<div class='amigo'>";
        constructorPersona +=      "<h3>" + amigos[i].name + "</h3>";
        constructorPersona +=       "<br>";
        constructorPersona +=       amigos[i].phone;
        constructorPersona +=       "<br>";
        constructorPersona +=       amigos[i].mail;
        constructorPersona +=   "</div>";

        console.log(constructorPersona);
    }

    result = constructorPersona;

    document.getElementById("listaAmigos").innerHTML = result;
}