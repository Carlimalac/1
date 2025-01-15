
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


const colors = ["#FF6B6B", "#FFBC42", "#80FF72", "#72DEFF", "#FF73FA", "#737DFF", "#F4FF61"];


const shapes = ["circle", "square", "triangle"];

document.body.addEventListener("click", (event) => {
    playRandomSound();
    createRandomShape(event.clientX, event.clientY);
    hideInstructions();
});


function playRandomSound() {
    const randomIndex = Math.floor(Math.random() * sounds.length);
    const audio = new Audio(sounds[randomIndex]);
    audio.play();
}


function createRandomShape(x, y) {
    const shape = document.createElement("div");
    const size = Math.random() * 100 + 50;
    
    
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    
    shape.className = `shape ${randomShape}`;
    shape.style.width = randomShape === "triangle" ? 0 : `${size}px`;
    shape.style.height = randomShape === "triangle" ? 0 : `${size}px`;
    shape.style.borderBottomColor = randomShape === "triangle" ? randomColor : "transparent";
    shape.style.backgroundColor = randomShape !== "triangle" ? randomColor : "transparent";

    
    shape.style.left = `${x - size / 2}px`;
    shape.style.top = `${y - size / 2}px`;

    document.body.appendChild(shape);

    
    shape.addEventListener("animationend", () => {
        shape.remove();
    });
}



function hideInstructions() {
    const instructions = document.querySelector(".instructions");

    
    setTimeout(() => {
        instructions.style.opacity = 0;
        
        
        setTimeout(() => {
            instructions.style.display = 'none';
        }, 300); 
    }, 4000); 
}

