// 1. Obtener url exacta de la api para obtener la lista de peliculas
const url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const imagenUrl = 'https://image.tmdb.org/t/p/w1280'

const contenedor = document.getElementById('contenedor')
// 2. Traer los datos con fetch
fetch(url).then(function (respuesta) {
  return respuesta.json();
}).then(function (datos) {
  console.log(datos.results);
  // 3. obtener los datos que necesito
  const peliculas = datos.results;
  peliculas.forEach(function (pelicula, indice) {
    console.log(pelicula)
    const titulo = pelicula.title;
    const imagen = imagenUrl + pelicula.poster_path;
    const imagenSlider = imagenUrl + pelicula.backdrop_path;
    const div = document.getElementById("slider");
    div.innerHTML += `<div class="swiper-slide">
    <img src="${imagenSlider}"/>
    </div>`;
    console.log(titulo, imagen)
    // 4. Inyectar datos en HTML (innerHTML, appendChild)
    contenedor.innerHTML += `
  <div class="card w-18">
    <img class="card-img-top" src="${imagen}">
          <div class="card-body bg-dark">
              <h5 class="card-title text-white">${titulo}</h5>
          </div>
  </div>
  `;
  })
      // <div class="swiper-slide">Slide 1</div>

})


// let number = 5;
// number = number + 1;
// number = number - 5;

// let i = 0;

// while (i < 6) {
//   console.log(i)
//   i = i+1
// }


// console.log(number)