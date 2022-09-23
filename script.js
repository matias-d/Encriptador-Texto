
const inputMensaje = document.querySelector("#inputE");
const inputResultado = document.querySelector("#inputS");

const btnEncriptar = document.querySelector("#btn-encriptar");
const btnDesencriptar = document.querySelector("#btn-desen");
const btnCopiar = document.querySelector("#btn-copiar");

const condicion = document.querySelector("#condict");

function resetValue(){
  inputMensaje.value = "";
  condicion.style.color = "black";
  inputMensaje.style.border = "none";
}

function resetValueElse(){
  btnCopiar.style.display = "none";
  inputResultado.value = "";
  inputMensaje.style.border = "2px solid red";
  condicion.style.color = "red";
}


function encriptar(){
  let wordsKey = ['enter', 'ober', 'imes', 'ai', 'ufat'];
  let wordsEncript = [/e/igm, /o/igm, /i/igm, /a/igm,/u/igm]
  let message = inputMensaje.value; 
  for(let i = 0; i < message.length; i++){
    if((message.match(/^[a-z ]*$/))){
    message = message.replace(wordsEncript[i], wordsKey[i])
    }
  }
  inputResultado.value = message;
  resetValue()
  
  if((message.match(/^[A-Z ]*$/))){
    resetValueElse()
  }else{
    btnCopiar.style.display = "show";
    btnCopiar.style.display = "initial";  
  }
}

function desencriptar(){
  let wordsKey = [/enter/igm, /ober/igm, /imes/igm, /ai/igm, /ufat/igm];
  let wordsEncript = ['e', 'o', 'i', 'a', 'u']
  let message = inputMensaje.value; 
  for(let i = 0; i < message.length; i++){
    message = message.replace(wordsKey[i], wordsEncript[i])
  }
  inputResultado.value = message;
  resetValue();

  if((message.match(/^[A-Z ]*$/))){
    resetValueElse()
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