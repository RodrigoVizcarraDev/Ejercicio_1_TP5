// EJERCICIO 1

// Variable global dentro de la funcion
// Cuyo proposito es conservar el mensaje mostrado(section)
// Para asi poder eliminarlo cuando el usuario vuelva a jugar
let mensajeMostrado = "";

function comprobarNumero(event) {
    // Evitamos que el formulario recargue la pagina
    event.preventDefault();


    

    // Obtenemos el input donde el usuario puso su numero
    const inputNumero = document.getElementById("numeroUsuario");
    // Obtenemos el valor del input donde el usuario coloco su numero
    const numeroUsuario = parseInt(inputNumero.value);

    // Creamos un numero aleatorio del 1 al 10
    const numeroAleatorio = Math.trunc(Math.random() * 5 + 1);

    console.log(numeroUsuario);
    console.log(numeroAleatorio);

    // Comprobamos si el numero del usuario es igual o distinto
    // al numero aleatorio
    if (numeroUsuario === numeroAleatorio) {

        // Crearemos un section donde le mostraremos un mensaje de que
        // logo adivinar el numero
        let seccionGanaste = document.createElement("section");

        // Añadimos la clase border-succes para que el contenedor 
        // sea de color verde
        seccionGanaste.classList.add("border", "border-success", "border-4", "container", "my-2");

        // Le agregamos el texto Felicidades ganaste al contenedor
        seccionGanaste.innerHTML = `<h2>Felicidades ganaste</h2>
                                    <p>El numero que elegiste es: ${numeroUsuario}</p>
                                    <p>El numero magico es: ${numeroAleatorio}</p>`;

        // Obtendremos en una variable el elemento main
        let main = document.getElementsByTagName("main")[0];

        if(mensajeMostrado){
            main.removeChild(mensajeMostrado);
        }

        //Añadiremos al final del main, nuestro section donde 
        // felicitamos al usuario por haber adivinado
        main.appendChild(seccionGanaste);

        mensajeMostrado = seccionGanaste;
        inputNumero.value = null;

    } else {
        let seccionPerdiste = document.createElement("section");

        seccionPerdiste.classList.add("border", "border-danger", "border-4", "container", "my-2");

        seccionPerdiste.innerHTML = `<h2>Lo siento, perdiste</h2>`;

        if (numeroUsuario > numeroAleatorio) {
            seccionPerdiste.innerHTML += `<p>El numero que elegiste ${numeroUsuario} es mayor que el numero magico ${numeroAleatorio}</p>`;
        } else {
            seccionPerdiste.innerHTML += `<p>El numero que elegiste ${numeroUsuario} es menor que el numero magico ${numeroAleatorio}</p>`;
        }
        let main = document.getElementsByTagName("main")[0];

        // Si es que ya habia un section con un mensaje entonces
        // se cumple la condicion, entramos y lo removemos.
        // Esto hara que no se llene de section en el html
        if(mensajeMostrado){
            main.removeChild(mensajeMostrado);
        }

        main.appendChild(seccionPerdiste);

        // Guardamos el section en nuestra variable global
        mensajeMostrado = seccionPerdiste;
        inputNumero.value = null;
    }
}