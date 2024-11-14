// Ruta de los archivos de sonido
const sounds = [
    "sounds/sound1.mp3",
    "sounds/sound2.mp3",
    "sounds/sound3.mp3",
    "sounds/sound4.mp3",
    "sounds/sound5.mp3",
    "sounds/sound6.mp3",
    "sounds/sound7.mp3",
    "sounds/sound8.mp3",
    "sounds/sound9.mp3",
    "sounds/sound10.mp3"
];

// Colores modernos para las formas
const colors = ["#FF6B6B", "#FFBC42", "#80FF72", "#72DEFF", "#FF73FA", "#737DFF", "#F4FF61"];

// Tipos de formas
const shapes = ["circle", "square", "triangle", "heart", "cat"];

document.body.addEventListener("click", (event) => {
    playRandomSound();
    createRandomShape(event.clientX, event.clientY);
});

// Función para reproducir un sonido aleatorio
function playRandomSound() {
    const randomIndex = Math.floor(Math.random() * sounds.length);
    const audio = new Audio(sounds[randomIndex]);
    audio.play();
}

// Función para crear una forma aleatoria
function createRandomShape(x, y) {
    const shape = document.createElement("div");
    const size = Math.random() * 100 + 50;
    
    // Selección aleatoria de forma y color
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Aplicar clases y estilos
    shape.className = `shape ${randomShape}`;
    shape.style.width = randomShape === "triangle" ? 0 : `${size}px`;
    shape.style.height = randomShape === "triangle" ? 0 : `${size}px`;
    shape.style.borderBottomColor = randomShape === "triangle" ? randomColor : "transparent";
    shape.style.backgroundColor = randomShape !== "triangle" ? randomColor : "transparent";

    // Posición del clic
    shape.style.left = `${x - size / 2}px`;
    shape.style.top = `${y - size / 2}px`;

    document.body.appendChild(shape);

    // Elimina la forma después de la animación
    shape.addEventListener("animationend", () => {
        shape.remove();
    });
}
