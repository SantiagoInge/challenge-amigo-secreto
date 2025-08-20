// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];

function agregarAmigo(){

    let nombresDeAmigos = document.getElementById('amigo').value.trim();

    if (nombresDeAmigos == ""){
        alert("Por favor escribe un nombre válido.");
        return;
    }

    nombres.push(nombresDeAmigos);

    let listaAgregados = document.createElement("li");
    listaAgregados.textContent = nombresDeAmigos;

    document.getElementById("listaAmigos").appendChild(listaAgregados);

    limpiarCaja();

}

function sortearAmigo(){

    if (nombres.length === 0){
        alert("No hay nombres para sortear.");
        return;
    } else{
    
      let indice = Math.floor(Math.random() * nombres.length);
      
      document.getElementById("resultado").textContent = "El amigo secreto sorteado es: " + nombres[indice];

      document.getElementById("listaAmigos").innerHTML = "";
      nombres = [];
    }
}

function limpiarCaja (){
    let valorCaja = document.querySelector('#amigo');
    valorCaja.value = '';
}

