function matrix(){
    var horario = [
        ["mate", "deportes"], 
        ["ingles", "geografia"], 
        ["español", "deportes", "musica"],
        ["ingles", "geografia"],
        ["fisica", "quimica"]
    ];

    for(var i=0; i < horario.length; i++){
        for(var j=0; j < horario[i].length; j++){
            console.log(horario[i][j]);
        }
    }
}