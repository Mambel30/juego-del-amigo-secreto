// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = [];

console.log(amigo);

function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;
   
    //console.log(amigo)

    if (!nombreAmigo){
        alert("Debes ingresar un nombre");
        return;
    }
    amigo.push(nombreAmigo)
}
