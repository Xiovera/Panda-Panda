//Para que cierren las imágenes
var span = document.getElementsByClassName('close');
for(i= 0; i < span.length; i++){
 span[i].addEventListener("click",out);
}
function out(){
  var img=this.parentNode;
    img.style.display="none";
  }

//Botón restaurar imágenes
document.getElementById("rest").addEventListener("click", function(){
  var imagenes = document.getElementsByClassName("cont-img");
  for(i= 0; i < imagenes.length; i++){
   imagenes[i].style.display="inline-block";
  }
})


//Para primera columna con botón Origen
document.getElementById("or").addEventListener("click", function(){
    if (document.getElementById("origen").style.visibility == "hidden") {
    	    document.getElementById("origen").style.visibility = "visible";}
    else {
    	    document.getElementById("origen").style.visibility = "hidden";
    }
});

//Para segunda columna con botón Extinción
document.getElementById("ex").addEventListener("click", function(){
    if (document.getElementById("extincion").style.visibility == "hidden") {
    	    document.getElementById("extincion").style.visibility = "visible";}
    else {
    	    document.getElementById("extincion").style.visibility = "hidden";
    }
});