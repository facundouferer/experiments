var texto = [
    "cargando^600.^600.^600.^600 ",
    'Soy <a href="https://linktr.ee/facundouferer" target="_blank"> FACUNDO UFERER</a>^600 ' +
    "y me dedico al <strong> DESARROLLO WEB.</strong> <br> <br>" +
    'Para saber más, puedes ingresar a: <br> <br>' +
    '\n <a href="https://www.linkedin.com/in/facundouferer/" target="_blank">+ Linkedin</a> <br>' +
    '\n <a href="https://github.com/facundouferer" target="_blank">+ GitHub</a> <br>' +
    '\n <a href="https://codepen.io/facundouferer" target="_blank">+ Codepen</a> <br>' +
    '\n <a href="https://codesandbox.io/u/facundouferer" target="_blank">+ CodesandBox</a> <br>' +
    '\n <a href="https://open.spotify.com/show/2CiWuSGhYr70Nwlanpoqzx" target="_blank">+ Spotify</a> <br>' +
    '\n <a href="https://cafecito.app/facundouferer" target="_blank">+ Cafecito</a> <br>' +
    '\n <a href="https://tiktok.com/@facundouferer" target="_blank">+ TikTok</a> <br>' +
    '\n <a href="https://instagram.com/facundouferer" target="_blank">+ Instagram</a> <br>'
]

var typed = new Typed('#mensaje', {
    strings: texto,
    typeSpeed: 20,
    showCursor: false,
    contentType: 'html',
});

/** MANEJO DE LA VENTANA */
var consola = document.querySelector(".consola");
var mensaje = document.querySelector(".mensaje");
var barra = document.querySelector(".barra");
var ventana = "RESTAURADO";

/** MAXIMIZAR */
var btnMaximizar = document.getElementById("btnMaximizar");
btnMaximizar.addEventListener("click", maximixar);

function maximixar() {
    if (ventana == "RESTAURADO") {
        consola.classList.add("maximizado");
        ventana = "MAXIMIZADO";
    } else {
        if (ventana == "MINIMIZADO") {
            consola.classList.remove("minimizado");
            consola.classList.add("maximizado");
            mensaje.classList.remove("invisible");
            barra.classList.remove("barra-minimizada");
            ventana = "MAXIMIZADO";
        } else {
            consola.classList.remove("maximizado");
            ventana = "RESTAURADO";
        }
    }
}

/** MINIMIZAR */
var btnMinimizar = document.getElementById("btnMinimizar");
btnMinimizar.addEventListener("click", minimizar);

function minimizar() {
    if (ventana == "RESTAURADO") {
        consola.classList.add("minimizado");
        mensaje.classList.add("invisible");
        barra.classList.add("barra-minimizada");
        ventana = "MINIMIZADO";
    } else {
        if (ventana == "MAXIMIZADO") {
            consola.classList.remove("maximizado");
            consola.classList.add("minimizado");
            barra.classList.add("barra-minimizada");
            mensaje.classList.add("invisible");
            ventana = "MINIMIZADO";
        } else {
            consola.classList.remove("minimizado");
            ventana = "RESTAURADO";
        }
    }
}

/** CERRAR */
var btnCerrar = document.getElementById("btnCerrar");
btnCerrar.addEventListener("click", cerrar);

function cerrar() {
    consola.classList.add("invisible");
    ventana = "CERRADO";
}
