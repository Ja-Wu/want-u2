function generateRandomAurora() {
    const elements = document.querySelectorAll('.aurora');
    elements.forEach((element) => {
        // Random background gradient colors
        const randomColor1 = getRandomColor();
        const randomColor2 = getRandomColor();
        element.style.backgroundImage = `linear-gradient(80deg, ${randomColor1}, ${randomColor2})`;
    });
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const alpha = Math.random().toFixed(2); // Alpha value between 0 and 1 with 2 decimal places
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
generateRandomAurora();