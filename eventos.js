document.getElementById("fondo_n").addEventListener("click", function(){
    console.log ("Se activó el modo de lectura nocturna");
    document.body.style.backgroundColor = "grey";
});
document.getElementById("fondo_d").addEventListener("click", function(){
    console.log ("Se activó el modo de lectura diurna");
    document.body.style.backgroundColor = "white";
});
document.getElementById("bot_subm").addEventListener("click", function(){
    if (document.getElementById("nombre") !== "" && document.getElementById("mail").value !== ""){
        localStorage.horario = "Mensaje enviado el dia: "+Date();
    }
});
