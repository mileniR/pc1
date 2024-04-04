
const personasOficios = [
    { nombre: "Juan", oficio: "Carpintero" },
    { nombre: "María", oficio: "Electricista" },
    { nombre: "Pedro", oficio: "Fontanero" },
    { nombre: "Ana", oficio: "Programadora" }
];


function mostrarPersonasOficios() {
    const container = document.getElementById("container");
    container.innerHTML = ""; 

    personasOficios.forEach(persona => {
        const personaElement = document.createElement("div");
        personaElement.innerHTML = `<strong>Nombre:</strong> ${persona.nombre}, <strong>Oficio:</strong> ${persona.oficio}`;
        container.appendChild(personaElement);
    });
}

function contratar() {
    const indiceAleatorio = Math.floor(Math.random() * personasOficios.length);
    const personaContratada = personasOficios[indiceAleatorio].nombre;
    console.log("¡Contratado:", personaContratada, "!");
}

mostrarPersonasOficios();
actionsButtons();
document.getElementById("contratarBtn").addEventListener("click", contratar);
