
const personasOficios = [
    {
     nombre: "Mileni ",
     oficio: "Ingeniera de Sistemas"
    },
    {
     nombre: "Jose",
     oficio: "Bombero"
    },
    {
     nombre: "Ana",
     oficio: "Psicologa"
    },   {
     nombre: "Luis",
     oficio: "Contador"
    },   {
     nombre: "Maria ",
     oficio: "Capacitadora"
    },
 ];
 
 const personasElement = document.getElementById("listapersonas");
 
 function writePersona() {
     let contenido = "";
     personasOficios.forEach(persona => {
         const template = `
             <div class="persona">
                 <div class="data">
                 <h4>${persona.nombre}</h4>
                 <h4>${persona.oficio}</h4>
                 </div>
                 <button class="btn" onclick="contratar('${persona.nombre}')">Contratar</button>            
                 </div>
         `;
         contenido = contenido + template;
     });
     personasElement.innerHTML = contenido;
 
 }
 
 function contratar(nombre) {
     Swal.fire({
         title: 'Contratar',
         text: `¿Seguro de contratar a ${nombre}?`,
         icon: 'question',
         showCancelButton: true,
         confirmButtonText: 'Sí',
         cancelButtonText: 'Cancelar'
     }).then((result) => {
         if (result.isConfirmed) {
             Swal.fire('¡Contratado!', `${nombre} ha sido contratado.`, 'success');
         }
     });
 }
 writePersona();