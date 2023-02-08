function comprobacion(){
    var check1 = false;
    var check2 = false;
    var check3 = false;
    var check4 = false;
    if(document.getElementById(nombre) == " "){
        document.getElementById(nombreNo).innerHTML = "No has colocado el nombre.";
        check1 = true;
    } 
    if(document.getElementById(email) == " "){
        document.getElementById(emailNo).innerHTML = " No has colocado el email.";
        check2 = true;
    } 
    if(document.getElementById(comentario) == " "){
        document.getElementById(comentarioNo).innerHTML = " No has colocado el comentario.";
        check3 = true;
    } 
    var busca = "@"
    if(email.includes(busca[0]) == false){
        document.getElementById(arrobaNo).innerHTML = "No has colocado el @";
        check4 = true;

    } 
    if(check1 && check2 && check3 && check4 == true){
        alert("Formulario enviado");
    }
}