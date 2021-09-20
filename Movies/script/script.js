const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const main = document.getElementById("main");
const contenedor = document.getElementById("contenedor");
const swiperContenedor = document.getElementById("swiper");
async function obtenerPeliculas() {
    const respuesta = await fetch(APIURL);
    const datos = await respuesta.json();
    const peliculas = datos.results;
    // como peliculas es un array, puedo usar foreach
    peliculas.forEach(function (valor, indice) {
        const { title, poster_path, backdrop_path } = valor;
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.setAttribute('class', 'swiper-slide');
        img.setAttribute('src', IMGPATH + backdrop_path);
        swiperContenedor.appendChild(img);
        div.setAttribute('class', 'card');
        div.setAttribute('style', 'width: 18rem');
        div.innerHTML = `
        <img class="card-img-top" src="${IMGPATH + poster_path}">
        <div class="card-body bg-dark">
            <h5 class="card-title text-white">${title}</h5>
        </div>
        `
        contenedor.appendChild(div)
    })
}

obtenerPeliculas();
var swiper = new Swiper(".mySwiper", {
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
});


