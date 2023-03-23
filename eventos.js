document.getElementById("bot_subm").addEventListener("click", function(){
    if (document.getElementById("nombre") !== "" && document.getElementById("mail").value !== ""){
        localStorage.horario = "Mensaje enviado el dia: "+Date();
        //console.log ("Mensaje enviado el dia: "+Date());
    }
});