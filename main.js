let password;
let comprobar=document.querySelector(".btn");
let mensaje=document.querySelector(".mensaje");
let contrasenaCorrecta="contragavo91";

comprobar.addEventListener("click", checar);

function checar(){
    password=document.querySelector("#password").value;
    if(password === contrasenaCorrecta){
        mensaje.innerHTML=`
        <p class="verdadero">La contraseña es correcta</p>
        `;
        return true;
    }else{
        mensaje.innerHTML=`
        <p class="falso">La contraseña es incorrecta</p>
        `;
        return false;
    }
}

