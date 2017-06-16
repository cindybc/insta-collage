/* Validación formulario*/

function validar(){
    
	var email = document.getElementById("mail").value;
    var pw= document.getElementById("pass").value;

	if(!(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email))){
    document.getElementById("validacion").innerHTML= "* Ingrese un email valido";
    }
   else if(pw == "" || pw == "123456" || pw.length < 6){
  	document.getElementById("validacion").innerHTML= "* Ingrese una contraseña valida";
    }
    else{
  	document.getElementById("validacion").innerHTML="";
    document.getElementById("mail").value="";
    document.getElementById("pass").value="";
  }
};

/* Drag -Drop*/

function drag(ev){
  ev.dataTransfer.setData("text", ev.target.id);
}


function finalDrop(ev){
  ev.preventDefault();
}


function drop(ev){
  ev.preventDefault();

  var dato = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(dato));
}