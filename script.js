
const inputMensaje = document.querySelector("#inputE");
const inputResultado = document.querySelector("#inputS");

const btnEncriptar = document.querySelector("#btn-encriptar");
const btnDesencriptar = document.querySelector("#btn-desen");
const btnCopiar = document.querySelector("#btn-copiar");



function encriptar(){
    if((inputMensaje.value.match(/^[a-z ]*$/))){
        var mensaje = inputMensaje.value;

        var mensajeEncriptado = mensaje.replace(/e/igm, "enter");
        var mensajeEncriptado = mensajeEncriptado.replace(/o/igm, "ober");
        var mensajeEncriptado = mensajeEncriptado.replace(/i/igm, "imes");
        var mensajeEncriptado = mensajeEncriptado.replace(/a/igm, "ai");
        var mensajeEncriptado = mensajeEncriptado.replace(/u/igm, "ufat");
    
        inputResultado.value = mensajeEncriptado;
  

    }else{
      inputResultado.value = "";
    }

    if(mensaje === ""){
      btnEncriptar.style.dispaly =
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
    


  }else if(inputMensaje.value == ""){
    inputResultado.value = "";
  }
  
    if(mensaje === ""){
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
    },1500);
}

btnEncriptar.onclick = encriptar;

btnDesencriptar.onclick = desencriptar;

btnCopiar.onclick = copiar;