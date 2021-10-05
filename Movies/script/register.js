const almacenarRegistro = () => {
  const nombre = document.getElementById('nombre');
  const apellido = document.getElementById('apellido');
  const telefono = document.getElementById('telefono');
  const direccion = document.getElementById('direccion');
  const observaciones = document.getElementById('observaciones');

  const storage = window.localStorage;
  storage.setItem('nombre', nombre.value);
  storage.setItem('apellido', apellido.value);
  storage.setItem('telefono', telefono.value);
  storage.setItem('direccion', direccion.value);
  storage.setItem('observaciones', observaciones.value);

  nombre.value = "";
  apellido.value = "";
  telefono.value = "";
  direccion.value = "";
  observaciones.value = "";

  const alerta = document.getElementById('alerta');
  alerta.innerHTML = `
  <div class="alert alert-success" role="alert">
    Usuario creado correctamente!
  </div>
  `;

  setTimeout(function () {
    alerta.innerHTML = "";
  }, 5000);
}
