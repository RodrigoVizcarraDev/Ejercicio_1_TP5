// EJERCICIO 1

// Variable global
// Cuyo proposito es conservar el mensaje mostrado(section)
// Para asi poder eliminarlo cuando el usuario vuelva a jugar
let mensajeMostrado = "";

//Obtenemos el formulario
let formulario = document.querySelector("#formulario");

// Ejecutamos una funcion cuando el formulario lance el evento submit
formulario.addEventListener("submit", (event) =>{
    // Evitamos que el formulario recargue la pagina
    event.preventDefault();


    

    // Obtenemos el input donde el usuario puso su numero
    const inputNumero = document.getElementById("numeroUsuario");
    // Obtenemos el valor del input donde el usuario coloco su numero
    const numeroUsuario = parseInt(inputNumero.value);

    // Creamos un numero aleatorio del 1 al 5
    const numeroAleatorio = Math.trunc(Math.random() * 5 + 1);

    
    if (numeroUsuario > 5 || numeroUsuario < 1) {
        if(numeroUsuario > 5){
            let seccionAdvertencia = document.createElement("section");
            seccionAdvertencia.classList.add("border","border-danger","border-4","container","my-2");
            let main = document.querySelector("main");

            if(mensajeMostrado){
                main.removeChild(mensajeMostrado);
            }

            main.appendChild(seccionAdvertencia);

            seccionAdvertencia.innerHTML = `<p>El numero que elegiste ${numeroUsuario} es mayor que el numero magico ${numeroAleatorio}</p>`;
            mensajeMostrado = seccionAdvertencia;
        }else {
            let seccionAdvertencia = document.createElement("section");
            seccionAdvertencia.classList.add("border","border-danger","border-4","container","my-2");
            let main = document.querySelector("main");

            if(mensajeMostrado){
                main.removeChild(mensajeMostrado);
            }
    

            main.appendChild(seccionAdvertencia);
            seccionAdvertencia.innerHTML = `<p>El numero que elegiste ${numeroUsuario} es menor que el numero magico ${numeroAleatorio}</p>`;
            mensajeMostrado = seccionAdvertencia;
        }
    } else {
        // Comprobamos si el numero del usuario es igual o distinto
        // al numero aleatorio
        if (numeroUsuario === numeroAleatorio) {
    
            // Crearemos un section donde le mostraremos un mensaje de que
            // logro adivinar el numero
            let seccionGanaste = document.createElement("section");
    
            // Añadimos la clase border-succes para que el contenedor 
            // sea de color verde
            seccionGanaste.classList.add("border", "border-success", "border-4", "container", "my-2");
    
            // Le agregamos el texto Felicidades ganaste al contenedor
            seccionGanaste.innerHTML = `<h2>Felicidades ganaste</h2>
                                        <p>El numero que elegiste es: ${numeroUsuario}</p>
                                        <p>El numero magico es: ${numeroAleatorio}</p>`;
    
            // Obtendremos en una variable el elemento main
            let main = document.querySelector("main");
    
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
    
            seccionPerdiste.innerHTML = `<h2>Lo siento, perdiste</h2>
                                         <p>El numero que elegiste es: ${numeroUsuario}</p>
                                         <p>El numero magico es: ${numeroAleatorio}</p>`;
    
            
            let main = document.querySelector("main");
    
            // Si es que ya habia un section con un mensaje entonces
            // se cumple la condicion, entramos y lo removemos.
            // Esto hara que no se llene de section en el html
            // y que se elimine el anterior para mostrarse el nuevo
            if(mensajeMostrado){
                main.removeChild(mensajeMostrado);
            }
    
            main.appendChild(seccionPerdiste);
    
            // Guardamos el section en nuestra variable global
            mensajeMostrado = seccionPerdiste;
            inputNumero.value = null;
        }
    }
});
