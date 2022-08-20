
const inputMensaje = document.querySelector("#inputE");
const inputResultado = document.querySelector("#inputS");

const btnEncriptar = document.querySelector("#btn-encriptar");
const btnDesencriptar = document.querySelector("#btn-desen");
const btnCopiar = document.querySelector("#btn-copiar");

const condicion = document.querySelector("#condict");

function encriptar(){
    if((inputMensaje.value.match(/^[a-z ]*$/))){
        var mensaje = inputMensaje.value;

        var mensajeEncriptado = mensaje.replace(/e/igm, "enter");
        var mensajeEncriptado = mensajeEncriptado.replace(/o/igm, "ober");
        var mensajeEncriptado = mensajeEncriptado.replace(/i/igm, "imes");
        var mensajeEncriptado = mensajeEncriptado.replace(/a/igm, "ai");
        var mensajeEncriptado = mensajeEncriptado.replace(/u/igm, "ufat");
    
        inputResultado.value = mensajeEncriptado;

        //Resets de valores
        inputMensaje.value = "";
        condicion.style.color = "black";
        inputMensaje.style.border = "none";

    }else{
      btnCopiar.style.display = "none";
      inputResultado.value = "";
      condicion.style.color = "red";
      inputMensaje.style.border = "2px solid red";
    }

    if(mensaje === "" ){   
      btnCopiar.style.display = "none";
    }else{
      btnCopiar.style.display = "show";
      btnCopiar.style.display = "initial"; 
    }

}

function desencriptar(){

    if((inputMensaje.value.match(/^[a-z ]*$/))){
        var mensaje = inputMensaje.value;
        
        var mensajeEncriptado = mensaje.replace(/enter/igm, "e");
        var mensajeEncriptado = mensajeEncriptado.replace(/ober/igm, "o");
        var mensajeEncriptado = mensajeEncriptado.replace(/imes/igm, "i");
        var mensajeEncriptado = mensajeEncriptado.replace(/ai/igm, "a");
        var mensajeEncriptado = mensajeEncriptado.replace(/ufat/igm, "u");
      
        inputResultado.value = mensajeEncriptado;

        //Resets de valores

        inputMensaje.value = "";
        condicion.style.color = "black";
        inputMensaje.style.border = "none";

  }else{
    inputResultado.value = "";
    inputMensaje.style.border = "2px solid red";
    condicion.style.color = "red";
  }
  
   if(mensaje === "" ){
      btnCopiar.style.display = "none";
   }else{
        btnCopiar.style.display = "show";
        btnCopiar.style.display = "initial";  
    }
    
}

function copiar(){
    inputMensaje.value = "";
    resultado = inputResultado.value;
    navigator.clipboard.writeText(resultado);
    resultado.value = "";
    btnCopiar.classList.add("active");
    setTimeout(function(){
      btnCopiar.classList.remove("active");
    },1200);
}

btnEncriptar.onclick = encriptar;

btnDesencriptar.onclick = desencriptar;

btnCopiar.onclick = copiar;