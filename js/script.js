// ==========================================================
// 🌻 PARA JOSEFA
// JavaScript principal
// ==========================================================



// ==========================================================
// ELEMENTOS DEL HTML
// ==========================================================

const botonAbrir =
    document.getElementById(
        "botonAbrir"
    );


const botonContinuar =
    document.getElementById(
        "botonContinuar"
    );


const botonFinal =
    document.getElementById(
        "botonFinal"
    );


const ultimoBoton =
    document.getElementById(
        "ultimoBoton"
    );


const flores =
    document.getElementById(
        "flores"
    );


const cartas =
    document.getElementById(
        "cartas"
    );


const final =
    document.getElementById(
        "final"
    );


const jardin =
    document.getElementById(
        "jardin"
    );


const petalos =
    document.getElementById(
        "petalos"
    );


const mensajeFinal =
    document.getElementById(
        "mensajeFinal"
    );


const spiderman =
    document.getElementById(
        "spiderman"
    );


const nightwing =
    document.getElementById(
        "nightwing"
    );



// ==========================================================
// MOSTRAR UNA SECCIÓN
// ==========================================================

function mostrarSeccion(
    elemento
) {


    elemento.classList.remove(
        "oculto"
    );


    elemento.scrollIntoView({

        behavior:
            "smooth",

        block:
            "start"

    });

}



// ==========================================================
// CREAR UNA FLOR
// ==========================================================

function crearFlor(
    posicion
) {


    const flor =
        document.createElement(
            "div"
        );


    flor.classList.add(
        "flor"
    );


    flor.style.animationDelay =

        `${posicion * 0.12}s`;



    // ------------------------------------------------------
    // TALLO
    // ------------------------------------------------------

    const tallo =
        document.createElement(
            "div"
        );


    tallo.classList.add(
        "tallo"
    );



    // ------------------------------------------------------
    // HOJA IZQUIERDA
    // ------------------------------------------------------

    const hojaIzquierda =
        document.createElement(
            "div"
        );


    hojaIzquierda.classList.add(
        "hoja",
        "hoja-izq"
    );



    // ------------------------------------------------------
    // HOJA DERECHA
    // ------------------------------------------------------

    const hojaDerecha =
        document.createElement(
            "div"
        );


    hojaDerecha.classList.add(
        "hoja",
        "hoja-der"
    );



    // ------------------------------------------------------
    // CABEZA DE LA FLOR
    // ------------------------------------------------------

    const cabeza =
        document.createElement(
            "div"
        );


    cabeza.classList.add(
        "cabeza-flor"
    );



    // ------------------------------------------------------
    // PÉTALOS
    // ------------------------------------------------------

    for (
        let i = 0;
        i < 14;
        i++
    ) {


        const petalo =
            document.createElement(
                "span"
            );


        petalo.classList.add(
            "petalo-flor"
        );


        const angulo =

            (
                360 / 14
            )

            * i;


        petalo.style.transform =

            `rotate(${angulo}deg)`;


        cabeza.appendChild(
            petalo
        );

    }



    // ------------------------------------------------------
    // CENTRO
    // ------------------------------------------------------

    const centro =
        document.createElement(
            "div"
        );


    centro.classList.add(
        "centro-flor"
    );


    cabeza.appendChild(
        centro
    );



    // ------------------------------------------------------
    // ARMAMOS LA FLOR
    // ------------------------------------------------------

    flor.appendChild(
        tallo
    );


    flor.appendChild(
        hojaIzquierda
    );


    flor.appendChild(
        hojaDerecha
    );


    flor.appendChild(
        cabeza
    );



    // ------------------------------------------------------
    // INTERACCIÓN
    // ------------------------------------------------------

    flor.addEventListener(
        "click",
        function (evento) {


            crearEmojiFlotante(

                "💗",

                evento.clientX,

                evento.clientY

            );

        }
    );


    return flor;

}



// ==========================================================
// SABER CUÁNTAS FLORES CREAR
// ==========================================================

function cantidadFlores() {


    const ancho =
        window.innerWidth;


    if (
        ancho <= 400
    ) {

        return 6;

    }


    if (
        ancho <= 700
    ) {

        return 7;

    }


    if (
        ancho <= 1000
    ) {

        return 9;

    }


    return 10;

}



// ==========================================================
// CREAR EL JARDÍN
// ==========================================================

function crearFlores(
    recrear = false
) {


    if (
        recrear
    ) {

        jardin.innerHTML =
            "";

    }


    if (
        jardin.children.length > 0
    ) {

        return;

    }


    const cantidad =
        cantidadFlores();


    for (
        let i = 0;
        i < cantidad;
        i++
    ) {


        const flor =
            crearFlor(
                i
            );


        jardin.appendChild(
            flor
        );

    }

}



// ==========================================================
// PÉTALOS QUE CAEN
// ==========================================================

function crearPetalos(
    cantidad = 28
) {


    for (
        let i = 0;
        i < cantidad;
        i++
    ) {


        setTimeout(
            function () {


                const petalo =
                    document.createElement(
                        "span"
                    );


                petalo.classList.add(
                    "petalo-caida"
                );


                petalo.style.left =

                    Math.random()
                    * 100
                    + "vw";


                petalo.style.setProperty(

                    "--duracion",

                    4
                    +
                    Math.random()
                    * 4
                    +
                    "s"

                );


                petalo.style.setProperty(

                    "--deriva",

                    -100
                    +
                    Math.random()
                    * 200
                    +
                    "px"

                );


                petalo.style.setProperty(

                    "--rotacion",

                    300
                    +
                    Math.random()
                    * 700
                    +
                    "deg"

                );


                petalos.appendChild(
                    petalo
                );


                setTimeout(
                    function () {

                        petalo.remove();

                    },

                    8500

                );


            },

            i * 80

        );

    }

}



// ==========================================================
// EMOJI FLOTANTE
// ==========================================================

function crearEmojiFlotante(
    emoji,
    x,
    y
) {


    const elemento =
        document.createElement(
            "span"
        );


    elemento.classList.add(
        "emoji-flotante"
    );


    elemento.textContent =
        emoji;


    elemento.style.left =
        `${x}px`;


    elemento.style.top =
        `${y}px`;


    document.body.appendChild(
        elemento
    );


    setTimeout(
        function () {

            elemento.remove();

        },

        1100

    );

}



// ==========================================================
// BOTÓN ABRIR DETALLE
// ==========================================================

botonAbrir.addEventListener(
    "click",
    function (evento) {


        crearFlores();


        crearPetalos(
            25
        );


        mostrarSeccion(
            flores
        );


        crearEmojiFlotante(

            "🌻",

            evento.clientX,

            evento.clientY

        );

    }
);



// ==========================================================
// BOTÓN HAY ALGO MÁS
// ==========================================================

botonContinuar.addEventListener(
    "click",
    function () {


        mostrarSeccion(
            cartas
        );

    }
);



// ==========================================================
// GIRAR LAS CARTAS
// ==========================================================

const todasLasCartas =
    document.querySelectorAll(
        ".carta"
    );


todasLasCartas.forEach(
    function (carta) {


        carta.addEventListener(
            "click",
            function () {


                carta.classList.toggle(
                    "abierta"
                );

            }
        );


        carta.setAttribute(
            "tabindex",
            "0"
        );


        carta.addEventListener(
            "keydown",
            function (evento) {


                if (

                    evento.key
                    ===
                    "Enter"

                    ||

                    evento.key
                    ===
                    " "

                ) {


                    evento.preventDefault();


                    carta.classList.toggle(
                        "abierta"
                    );

                }

            }
        );

    }
);



// ==========================================================
// BOTÓN FINAL
// ==========================================================

botonFinal.addEventListener(
    "click",
    function () {


        crearPetalos(
            35
        );


        mostrarSeccion(
            final
        );

    }
);



// ==========================================================
// ÚLTIMO MENSAJE
// ==========================================================

ultimoBoton.addEventListener(
    "click",
    function (evento) {


        mensajeFinal.classList.add(
            "mostrar"
        );


        crearPetalos(
            40
        );


        ultimoBoton.textContent =
            "💛";


        crearEmojiFlotante(

            "🌻",

            evento.clientX,

            evento.clientY

        );

    }
);



// ==========================================================
// SPIDER-MAN KAWAII
// ==========================================================

spiderman.addEventListener(
    "click",
    function (evento) {


        spiderman.classList.remove(
            "saltito"
        );


        void spiderman.offsetWidth;


        spiderman.classList.add(
            "saltito"
        );


        crearEmojiFlotante(

            "🕷️",

            evento.clientX,

            evento.clientY

        );

    }
);



// ==========================================================
// NIGHTWING KAWAII
// ==========================================================

nightwing.addEventListener(
    "click",
    function (evento) {


        nightwing.classList.remove(
            "saltito"
        );


        void nightwing.offsetWidth;


        nightwing.classList.add(
            "saltito"
        );


        crearEmojiFlotante(

            "💙",

            evento.clientX,

            evento.clientY

        );

    }
);



// ==========================================================
// RESPONSIVE AL GIRAR EL TELÉFONO
// ==========================================================

let temporizadorResize;


window.addEventListener(
    "resize",
    function () {


        clearTimeout(
            temporizadorResize
        );


        temporizadorResize =
            setTimeout(
                function () {


                    if (
                        !flores.classList.contains(
                            "oculto"
                        )
                    ) {


                        crearFlores(
                            true
                        );

                    }


                },

                250

            );

    }
);