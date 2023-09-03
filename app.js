/*------------------------------------metodos---------------------------------------------------- 
Document.getElementsByClassName(String className)
Document.getElementsByTagName(String tagName)
Document.getElementById(String id)
Document.querySelector(String selector)
Document.querySelectorAll(String selector)
Document.createDocumentFragment()
Document.createElement(String name)
#getElementById
-----------------------------------------------------------------------------------------------*/
// document.addEventListener("DOMContentLoaded",()=>{

//     console.log(document.getElementById("tituloWeb"));
//     console.log(document.getElementById("tituloWeb").textContent);

// });//permite carga el navegador html y arbol dom esta construido pero el codigo debe estar dentro (el codigo que acceda al DOM)

console.log(document.getElementById("tituloWeb"));
console.log(document.getElementById("tituloWeb").textContent);
//console.log(document.getElementById("tituloWeb").innerHTML);
console.log(document.querySelector( " .text-primary "));//selecciona el primer elemento
console.log(document.querySelectorAll(".text-danger"));

//todos estos elementos seleccionados generalmente se guardan:

const h1 = document.querySelector("h1.tagName");
console.log(h1);
//className es una propiedad que muestra el nombre de la clase que lleva el elemento




//revisar el enlace
const url= "https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/JavaScript_basics";
