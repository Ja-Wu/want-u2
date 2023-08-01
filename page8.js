function generateRandomAurora() {
    const elements = document.querySelectorAll('.aurora');
    elements.forEach((element) => {
        // Random initial position
        const randomX = Math.random() * (window.innerWidth - 500);
        const randomY = Math.random() * (window.innerHeight - 500);
        element.style.left = `${randomX}px`;
        element.style.top = `${randomY}px`;

        // Random background gradient colors
        const randomColor1 = getRandomColor();
        const randomColor2 = getRandomColor();
        element.style.backgroundImage = `linear-gradient(80deg, ${randomColor1}, ${randomColor2})`;
    });
}

function getRandomColor() {
    // Generate a random RGB color
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}