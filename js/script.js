// ==========================================================
// 🌻 PARA JOSEFA
// JavaScript principal
// ==========================================================


// ==========================================================
// 1. BUSCAMOS LOS ELEMENTOS DEL HTML
// ==========================================================

const botonAbrir =
    document.getElementById("botonAbrir");

const botonContinuar =
    document.getElementById("botonContinuar");

const botonFinal =
    document.getElementById("botonFinal");

const ultimoBoton =
    document.getElementById("ultimoBoton");


const flores =
    document.getElementById("flores");

const cartas =
    document.getElementById("cartas");

const final =
    document.getElementById("final");

const jardin =
    document.getElementById("jardin");

const mensajeFinal =
    document.getElementById("mensajeFinal");


// ==========================================================
// 2. AGREGAMOS SPIDER-MAN Y NIGHTWING KAWAII
// ==========================================================

function crearPersonajesKawaii() {

    // Buscamos la primera pantalla
    const inicio =
        document.getElementById("inicio");


    // Creamos un contenedor
    const personajes =
        document.createElement("div");

    personajes.classList.add(
        "personajes-kawaii"
    );


    // ------------------------------------------------------
    // SPIDER-MAN KAWAII
    // ------------------------------------------------------

    const spiderman =
        document.createElement("div");

    spiderman.classList.add(
        "personaje-kawaii",
        "spiderman-kawaii"
    );

    spiderman.title =
        "Spider-Man 🕷️";


    spiderman.innerHTML = `

        <div class="cabeza-spiderman">

            <div class="ojo-spider ojo-izquierdo">
            </div>

            <div class="ojo-spider ojo-derecho">
            </div>

            <div class="telarana linea-1">
            </div>

            <div class="telarana linea-2">
            </div>

        </div>

        <div class="cuerpo-spiderman">

            <span class="aranita">
                🕷
            </span>

        </div>

        <p>
            Spidey
        </p>

    `;


    // ------------------------------------------------------
    // NIGHTWING KAWAII
    // ------------------------------------------------------

    const nightwing =
        document.createElement("div");

    nightwing.classList.add(
        "personaje-kawaii",
        "nightwing-kawaii"
    );

    nightwing.title =
        "Nightwing 💙";


    nightwing.innerHTML = `

        <div class="cabeza-nightwing">

            <div class="mascara-nightwing">

                <span class="ojo-nightwing">
                </span>

                <span class="ojo-nightwing">
                </span>

            </div>

            <div class="sonrisa-kawaii">
            </div>

        </div>

        <div class="cuerpo-nightwing">

            <div class="simbolo-nightwing">
                V
            </div>

        </div>

        <p>
            Nightwing
        </p>

    `;


    // Los agregamos al contenedor
    personajes.appendChild(
        spiderman
    );

    personajes.appendChild(
        nightwing
    );


    // Los agregamos a la portada
    inicio.appendChild(
        personajes
    );

}


// ==========================================================
// 3. ESTILOS DE LOS PERSONAJES KAWAII
// Los ponemos desde JavaScript para que no tengas que
// modificar el CSS todavía.
// ==========================================================

function crearEstilosPersonajes() {

    const estilos =
        document.createElement("style");


    estilos.textContent = `


        /* ============================================= */
        /* CONTENEDOR DE PERSONAJES */
        /* ============================================= */


        .personajes-kawaii {

            position: absolute;

            bottom: 25px;

            left: 50%;

            transform:
                translateX(-50%);

            display: flex;

            align-items: flex-end;

            justify-content: center;

            gap: 35px;

            z-index: 5;

        }


        .personaje-kawaii {

            display: flex;

            flex-direction: column;

            align-items: center;

            cursor: pointer;

            transition:
                transform 0.3s ease;

            user-select: none;

        }


        .personaje-kawaii:hover {

            transform:

                translateY(-8px)
                scale(1.08);

        }


        .personaje-kawaii p {

            margin:

                7px
                0
                0;

            padding:

                4px
                9px;

            background:

                rgba(
                    255,
                    255,
                    255,
                    0.8
                );

            border-radius:
                20px;

            font-size:
                11px;

            font-weight:
                bold;

            color:
                #503945;

        }



        /* ============================================= */
        /* SPIDER-MAN KAWAII */
        /* ============================================= */


        .cabeza-spiderman {

            width:
                65px;

            height:
                62px;

            border-radius:

                45%
                45%
                48%
                48%;

            background:

                linear-gradient(
                    145deg,
                    #f33b4f,
                    #b7192e
                );

            border:

                3px solid
                #222;

            position:
                relative;

            z-index:
                2;

            box-shadow:

                0
                7px
                15px

                rgba(
                    0,
                    0,
                    0,
                    0.18
                );

        }


        .cuerpo-spiderman {

            width:
                52px;

            height:
                55px;

            margin-top:
                -5px;

            border-radius:

                15px
                15px
                22px
                22px;

            background:

                linear-gradient(
                    to bottom,
                    #e52c45 0%,
                    #e52c45 55%,
                    #24478e 55%,
                    #16356f 100%
                );

            border:

                3px solid
                #222;

            display:
                flex;

            justify-content:
                center;

            align-items:
                center;

            font-size:
                18px;

        }


        .ojo-spider {

            position:
                absolute;

            top:
                18px;

            width:
                16px;

            height:
                24px;

            background:
                white;

            border:

                3px solid
                #222;

            border-radius:

                70%
                35%
                70%
                35%;

        }


        .ojo-izquierdo {

            left:
                9px;

            transform:
                rotate(-10deg);

        }


        .ojo-derecho {

            right:
                9px;

            transform:
                scaleX(-1)
                rotate(-10deg);

        }


        .telarana {

            position:
                absolute;

            left:
                50%;

            top:
                5px;

            width:
                1px;

            height:
                50px;

            background:

                rgba(
                    30,
                    30,
                    30,
                    0.45
                );

            transform-origin:
                center;

        }


        .linea-1 {

            transform:
                rotate(30deg);

        }


        .linea-2 {

            transform:
                rotate(-30deg);

        }


        .aranita {

            font-size:
                18px;

            filter:
                grayscale(1);

        }



        /* ============================================= */
        /* NIGHTWING KAWAII */
        /* ============================================= */


        .cabeza-nightwing {

            width:
                65px;

            height:
                62px;

            border-radius:

                45%
                45%
                48%
                48%;

            background:

                linear-gradient(
                    145deg,
                    #2c2c35,
                    #101017
                );

            border:

                3px solid
                #222;

            position:
                relative;

            z-index:
                2;

            box-shadow:

                0
                7px
                15px

                rgba(
                    0,
                    0,
                    0,
                    0.18
                );

        }


        .cuerpo-nightwing {

            width:
                52px;

            height:
                55px;

            margin-top:
                -5px;

            border-radius:

                15px
                15px
                22px
                22px;

            background:

                linear-gradient(
                    to bottom,
                    #15151c,
                    #242432
                );

            border:

                3px solid
                #222;

            display:
                flex;

            justify-content:
                center;

            align-items:
                center;

        }


        .mascara-nightwing {

            position:
                absolute;

            top:
                19px;

            left:
                50%;

            transform:
                translateX(-50%);

            width:
                51px;

            height:
                16px;

            background:
                #087ee7;

            clip-path:

                polygon(
                    0 35%,
                    22% 0,
                    50% 35%,
                    78% 0,
                    100% 35%,
                    78% 100%,
                    50% 68%,
                    22% 100%
                );

            display:
                flex;

            justify-content:
                space-around;

            align-items:
                center;

            padding:

                0
                8px;

        }


        .ojo-nightwing {

            width:
                9px;

            height:
                5px;

            border-radius:
                50%;

            background:
                white;

        }


        .sonrisa-kawaii {

            position:
                absolute;

            bottom:
                10px;

            left:
                50%;

            transform:
                translateX(-50%);

            width:
                14px;

            height:
                7px;

            border-bottom:

                2px solid
                #eeeeee;

            border-radius:
                50%;

        }


        .simbolo-nightwing {

            color:
                #18a8ff;

            font-size:
                31px;

            font-weight:
                900;

            transform:
                scaleX(1.7);

            font-family:
                Arial,
                sans-serif;

        }



        /* ============================================= */
        /* ANIMACIÓN KAWAII */
        /* ============================================= */


        @keyframes saltitoKawaii {

            0% {

                transform:
                    translateY(0);

            }


            50% {

                transform:
                    translateY(-8px);

            }


            100% {

                transform:
                    translateY(0);

            }

        }


        .saltito {

            animation:

                saltitoKawaii
                0.45s
                ease;

        }



        /* ============================================= */
        /* CELULAR */
        /* ============================================= */


        @media
        (max-width: 700px) {


            .personajes-kawaii {

                gap:
                    18px;

                bottom:
                    15px;

            }


            .personaje-kawaii {

                transform:
                    scale(0.85);

            }


            .personaje-kawaii:hover {

                transform:

                    translateY(-5px)
                    scale(0.9);

            }


        }


    `;


    document.head.appendChild(
        estilos
    );

}



// ==========================================================
// 4. INTERACCIÓN CON LOS PERSONAJES
// ==========================================================

function activarPersonajes() {


    const spider =
        document.querySelector(
            ".spiderman-kawaii"
        );


    const nightwing =
        document.querySelector(
            ".nightwing-kawaii"
        );


    spider.addEventListener(
        "click",
        function () {

            spider.classList.remove(
                "saltito"
            );


            void spider.offsetWidth;


            spider.classList.add(
                "saltito"
            );


            crearCorazon(
                "🕷️"
            );

        }
    );


    nightwing.addEventListener(
        "click",
        function () {

            nightwing.classList.remove(
                "saltito"
            );


            void nightwing.offsetWidth;


            nightwing.classList.add(
                "saltito"
            );


            crearCorazon(
                "💙"
            );

        }
    );

}



// ==========================================================
// 5. CREAR PEQUEÑO EMOJI FLOTANTE
// ==========================================================

function crearCorazon(
    emoji
) {


    const elemento =
        document.createElement(
            "div"
        );


    elemento.textContent =
        emoji;


    elemento.style.position =
        "fixed";

    elemento.style.left =
        "50%";

    elemento.style.bottom =
        "120px";

    elemento.style.fontSize =
        "30px";

    elemento.style.zIndex =
        "999";

    elemento.style.pointerEvents =
        "none";

    elemento.style.transition =
        "all 1s ease";

    elemento.style.opacity =
        "1";


    document.body.appendChild(
        elemento
    );


    setTimeout(
        function () {

            elemento.style.bottom =
                "220px";

            elemento.style.opacity =
                "0";

        },

        50

    );


    setTimeout(
        function () {

            elemento.remove();

        },

        1100

    );

}



// ==========================================================
// 6. BOTÓN DE ABRIR DETALLE
// ==========================================================

botonAbrir.addEventListener(
    "click",
    function () {


        flores.classList.remove(
            "oculto"
        );


        crearFlores();


        crearPetalos();


        flores.scrollIntoView({

            behavior:
                "smooth"

        });

    }
);



// ==========================================================
// 7. CREAR UNA FLOR
// ==========================================================

function crearFlor() {


    const flor =
        document.createElement(
            "div"
        );


    flor.classList.add(
        "flor"
    );



    // TALLO

    const tallo =
        document.createElement(
            "div"
        );


    tallo.classList.add(
        "tallo"
    );



    // CABEZA

    const cabeza =
        document.createElement(
            "div"
        );


    cabeza.classList.add(
        "cabeza"
    );



    // CREAMOS 12 PÉTALOS

    for (
        let i = 0;
        i < 12;
        i++
    ) {


        const petalo =
            document.createElement(
                "span"
            );


        petalo.classList.add(
            "petalo"
        );


        petalo.style.transform =

            `rotate(${i * 30}deg)`;


        cabeza.appendChild(
            petalo
        );

    }



    // CENTRO DE LA FLOR

    const centro =
        document.createElement(
            "div"
        );


    centro.classList.add(
        "centro"
    );


    cabeza.appendChild(
        centro
    );



    // ARMAMOS LA FLOR

    flor.appendChild(
        tallo
    );


    flor.appendChild(
        cabeza
    );


    // SI PASAS EL MOUSE
    // LA FLOR SE MUEVE UN POCO

    flor.addEventListener(
        "mouseenter",
        function () {

            cabeza.style.transform =

                "translateX(-50%) rotate(8deg) scale(1.08)";

        }
    );


    flor.addEventListener(
        "mouseleave",
        function () {

            cabeza.style.transform =

                "translateX(-50%) rotate(0deg) scale(1)";

        }
    );


    return flor;

}



// ==========================================================
// 8. CREAR TODO EL JARDÍN
// ==========================================================

function crearFlores() {


    // Evitamos crear flores duplicadas

    if (
        jardin.children.length > 0
    ) {

        return;

    }


    // Creamos 10 flores

    for (
        let i = 0;
        i < 10;
        i++
    ) {


        const flor =
            crearFlor();


        // Cada flor aparece un poco después

        flor.style.animationDelay =

            `${i * 0.12}s`;


        jardin.appendChild(
            flor
        );

    }

}



// ==========================================================
// 9. CREAR PÉTALOS AMARILLOS QUE CAEN
// ==========================================================

function crearPetalos() {


    const contenedor =
        document.getElementById(
            "petalos"
        );


    for (
        let i = 0;
        i < 30;
        i++
    ) {


        setTimeout(
            function () {


                const petalo =
                    document.createElement(
                        "div"
                    );


                petalo.classList.add(
                    "petalo-caida"
                );


                // Posición aleatoria

                petalo.style.left =

                    Math.random() * 100
                    + "vw";


                // Diferente velocidad

                petalo.style.animationDuration =

                    4 +
                    Math.random() * 4
                    + "s";


                // Diferente tamaño

                const escala =

                    0.6 +
                    Math.random() * 0.8;


                petalo.style.transform =

                    `scale(${escala})`;


                contenedor.appendChild(
                    petalo
                );


                // Borramos el pétalo
                // después de caer

                setTimeout(
                    function () {

                        petalo.remove();

                    },

                    8500

                );


            },

            i * 100

        );

    }

}



// ==========================================================
// 10. BOTÓN "HAY ALGO MÁS"
// ==========================================================

botonContinuar.addEventListener(
    "click",
    function () {


        cartas.classList.remove(
            "oculto"
        );


        cartas.scrollIntoView({

            behavior:
                "smooth"

        });

    }
);



// ==========================================================
// 11. GIRAR LAS CARTAS
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

    }
);



// ==========================================================
// 12. BOTÓN HACIA EL FINAL
// ==========================================================

botonFinal.addEventListener(
    "click",
    function () {


        final.classList.remove(
            "oculto"
        );


        crearPetalos();


        final.scrollIntoView({

            behavior:
                "smooth"

        });

    }
);



// ==========================================================
// 13. MENSAJE FINAL
// ==========================================================

ultimoBoton.addEventListener(
    "click",
    function () {


        mensajeFinal.classList.add(
            "mostrar"
        );


        crearPetalos();


        ultimoBoton.textContent =
            "💛";


        crearCorazon(
            "🌻"
        );

    }
);



// ==========================================================
// 14. INICIAMOS LOS PERSONAJES KAWAII
// ==========================================================

crearEstilosPersonajes();

crearPersonajesKawaii();

activarPersonajes();