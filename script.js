const navegacion=document.getElementById("menu");
const abrir=document.getElementById("abrir");
const cerrar=document.getElementById("CERRAR");

abrir.addEventListener("click",()=>{
    navegacion.classList.add("visible");
})
cerrar.addEventListener("click",()=>{
    navegacion.classList.remove("visible");
})