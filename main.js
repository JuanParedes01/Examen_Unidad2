let btnInicio = document.getElementById("btnInicio"),
    btnBanda = document.getElementById("btnBanda"),
    btnAlbum = document.getElementById("btnAlbum"),
    btnCancion = document.getElementById("btnCancion"),
    btnMAlbum = document.getElementById("btnMAlbum"),
    btnMGenero = document.getElementById("btnMGenero"),
    btnBuscar = document.getElementById("btnBuscar"),

    Banda = document.getElementById("Banda"),
    Album = document.getElementById("Album"),
    Cancion = document.getElementById("Cancion"),
    AlbumMostrar = document.getElementById("AlbumMostrar"),
    GeneroMostrar = document.getElementById("GeneroMostrar"),
    Buscar = document.getElementById("Buscar"),
    
    ide = 0,

    BandaN = [],
    BandaG = [],
    BandaA = [],

    btnAñadirBanda = document.getElementById("btnAñadirBanda"),

    nombreB = document.getElementById("nombreB").value,
    generoB = document.getElementById("generoB").value,
    añoB = document.getElementById("añoB").value;

btnInicio.addEventListener('click', () => {
    Banda.hidden = true;
    Album.hidden = true;
    Cancion.hidden = true;
    AlbumMostrar.hidden = true;
    GeneroMostrar.hidden = true;
    Buscar.hidden = true;
})

btnBanda.addEventListener('click', () => {
    Banda.hidden = false;
    Album.hidden = true;
    Cancion.hidden = true;
    AlbumMostrar.hidden = true;
    GeneroMostrar.hidden = true;
    Buscar.hidden = true;

    btnAñadirBanda.addEventListener('click', () => {
        if (nombreB == '' || generoB == '' || añoB == ''){
            error.hidden = false;
        }
        else{
            ide = ide + 1;
            BandaN[ide] = nombreB;
            BandaG[ide] = generoB;
            BandaA[ide] = añoB;
            console.log(BandaN, BandaG, BandaA);
        }
    })
})

btnAlbum.addEventListener('click', () => {
    Album.hidden = false;
    Banda.hidden = true;
    Cancion.hidden = true;
    AlbumMostrar.hidden = true;
    GeneroMostrar.hidden = true;
    Buscar.hidden = true;
})

btnCancion.addEventListener('click', () => {
    Cancion.hidden = false;
    Banda.hidden = true;
    Album.hidden = true;
    AlbumMostrar.hidden = true;
    GeneroMostrar.hidden = true;
    Buscar.hidden = true;
})

btnMAlbum.addEventListener('click', () => {
    AlbumMostrar.hidden = false;
    Banda.hidden = true;
    Album.hidden = true;
    Cancion.hidden = true;
    GeneroMostrar.hidden = true;
    Buscar.hidden = true;
})

btnMGenero.addEventListener('click', () => {
    GeneroMostrar.hidden = false;
    Banda.hidden = true;
    Album.hidden = true;
    Cancion.hidden = true;
    AlbumMostrar.hidden = true;
    Buscar.hidden = true;
})

btnBuscar.addEventListener('click', () => {
    Buscar.hidden = false;
    Banda.hidden = true;
    Album.hidden = true;
    Cancion.hidden = true;
    AlbumMostrar.hidden = true;
    GeneroMostrar.hidden = true;
})