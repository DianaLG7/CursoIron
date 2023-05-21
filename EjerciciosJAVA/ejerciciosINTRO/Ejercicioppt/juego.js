//Declaracion de variables
const rock="rock";
const paper="paper";
const tij="tij";
//Variables para definir si el usuario, Gano, Empato o Perdio
const empate=0;
const win=1;
const lost=2;
//aqui se toman los ID's de los elementos que se encuentran en el archivo index
const piedraBtn=document.getElementById("rock");
const papelBtn=document.getElementById("paper");
const tijeraBtn=document.getElementById("tij");
const resulText=document.getElementById("rtext");
const userImg=document.getElementById("user-img");
const maquinaImg=document.getElementById("maquina-img");
//indica el inicio del juego
papelBtn.addEventListener("click",()=>{
    start(paper);
});
piedraBtn.addEventListener("click",()=>{
    start(rock);

});
tijeraBtn.addEventListener("click",()=>{
    start(tij);
});
//funcion encargada del funcionamiento interno del juego
function start(userOption){
    const machineOption= calMaquinaOption(); 
    const resultado=resultObtenido(userOption,machineOption);

    userImg.src="img/"+ userOption +".jpg"; //Para ver la opcion de lo que eligio la maquina
    maquinaImg.src="img/"+ machineOption +".jpg"; //Para ver la opcion que elige el usuario
//Esto es para mostrar en pantalla el resultado
    switch(resultado){
        case empate:
            resulText.innerHTML= "¡Empataste!";
            break;
        case win:
            resulText.innerHTML= "¡¡GANASTE!!☻♥";
            break;
        case lost:
            resulText.innerHTML= "UPS!, Perdiste :C";
            break;
    }
}

function calMaquinaOption(){
    const numero= Math.floor(Math.random()*3); //indica que la maquina elige de manera aleatoria
    switch (numero){
        case 0:
            return rock;
        case 1:
            return paper;
        case 2:
            return tij;
    }
}
//en esta funcion se hacen los calculos a partir de que el usuario inicia el juego
function resultObtenido(userOption, machineOption){
    if(userOption === machineOption){
        return empate;
    }
    else if(userOption===paper && machineOption===rock){
        return win;
    }
    else if(userOption===paper && machineOption===tij){
        return lost;
    }
    else if(userOption===rock && machineOption===tij){
        return win;
    }
    else if(userOption===rock && machineOption===paper){
        return lost;
    }
    else if(userOption===tij && machineOption===paper){
        return win;
    }
    else if(userOption===tij && machineOption===rock){
        return lost;
    }
}