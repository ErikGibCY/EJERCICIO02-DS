let contactos = [];
document
  .getElementById("formContacto")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const nuevoContacto = {
      id: Date.now(),
      nombre: document.getElementById("nombre").value,
      telefono: document.getElementById("telefono").value,
      correo: document.getElementById("correo").value,
    };
    contactos.push(nuevoContacto);
    this.reset();
    alert("Contacto agregado correctamente");
  });

function renderizarContactos() {
  const contenedor = document.getElementById("listaContactos");
  contenedor.innerHTML = "";
  contactos.forEach((c) => {
    contenedor.innerHTML += `
      <div class="tarjeta-contacto">
        <h3>${c.nombre}</h3>
        <p>📞 ${c.telefono} | ✉️ ${c.correo}</p>
      </div>
    `;
  });
}
