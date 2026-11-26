
// INICIO DE SESIÓN

const formulario = document.getElementById("loginForm");

formulario.addEventListener("submit", function(event) {

    // Evita que la página se recargue
    event.preventDefault();

    // Obtenemos lo que escribió la persona
    const usuario = document.getElementById("usuario").value.trim().toLowerCase();
    const contrasena = document.getElementById("contrasena").value;

    const mensaje = document.getElementById("mensaje");

    // Comprobamos los datos
    if (contrasena === "1234" && usuario === "yerardin") {

        window.location.href = "cartas/yerardin.html";

    } 
    
    else if (contrasena === "1234" && usuario === "agustin") {

        window.location.href = "cartas/agustin.html";

    } 
    
    else {

        mensaje.textContent = "Los datos no son correctos. Inténtalo de nuevo.";

    }

});


// CREAR ESTRELLITAS

for (let i = 0; i < 45; i++) {

    const estrella = document.createElement("span");

    estrella.textContent = "✦";
    estrella.classList.add("estrella");

    estrella.style.left = Math.random() * 100 + "%";
    estrella.style.top = Math.random() * 100 + "%";

    estrella.style.fontSize = (Math.random() * 10 + 6) + "px";

    estrella.style.animationDelay = Math.random() * 3 + "s";

    document.body.appendChild(estrella);

}
