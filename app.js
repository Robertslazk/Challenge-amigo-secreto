// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    // Limpiamos al ganador previo
    document.getElementById("resultado").innerHTML = '';
    // Tomamos el valor de la entrada
    let nombreAmigo = document.getElementById("amigo").value;
    // Comparamos si está vacío
    if (nombreAmigo == ''){
        alert("El nombre está vacío, por favor, rellene el nombre adecuadamente");
    } else { 
        // Si no está vacío, lo agregamos a la lista y limpiamos la input.
        amigos.push(nombreAmigo);
        document.getElementById("amigo").value = '';
        // Llamar a la función de escribir amigos en la pantalla
        escribirAmigos();
    }
    return 
}
// Función para escribir amigos
function escribirAmigos(){
    // Declaramos y limpiamos la variable para mostrar los amigos
    let mostrarAmigos = '';
    // Hacemos un ciclo for para incluir a todos los amigos
    for (let i=0; i < amigos.length;i++){
        // Escribimos a los amigos en una "sublista" 
        mostrarAmigos += `<li> ${i}: ${amigos[i]} </li>`;
    }
    // Escribimos los amigos en la página web
    document.getElementById("listaAmigos").innerHTML = mostrarAmigos;
}

// Función para sortear amigos
function sortearAmigo(){
    // Checamos que la longitud de los amigos no sea cero, en caso de serlo, alertamos de que no hay ningun nombre agregado
    if (amigos.length === 0){
        alert("No hay ningún nombre agregado")
    } else {
        // Creamos una variable random a partir de la longitud de los amigos
        let selectorAleatorio = Math.floor(Math.random()*amigos.length);
        // Publicamos al ganador
        document.getElementById("resultado").innerHTML = `El ganador es el número ${selectorAleatorio} con nombre ${amigos[selectorAleatorio]}`;
        // Limpiamos la lista de los amigos y la publicación en la página web
        amigos = [];
        document.getElementById("listaAmigos").innerHTML = '';
        }
}