const almacenarRegistro = () => {
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const telefono = document.getElementById('telefono').value;
  const direccion = document.getElementById('direccion').value;
  const observaciones = document.getElementById('observaciones').value;

  const storage = window.localStorage;
  storage.setItem('nombre', nombre);
}
