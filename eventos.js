
const textoTitulo = document.getElementById("tituloWeb");
const boton = document.querySelector(".btn-primary");//primero se selecciona el elemento

//                     (evento, agente de escucha que puede ser una función)  
boton.addEventListener ("click",() =>{
    console.log("Este es un botón");
    textoTitulo.textContent = "Texto cambiado con evento en JS";
    textoTitulo.style.color = "green";
});