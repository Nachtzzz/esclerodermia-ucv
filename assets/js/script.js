function openNav(){
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0%";
}

document.addEventListener('DOMContentLoaded', () => {
    const text = document.querySelector('.texto-1');
    const images = document.querySelectorAll('.imagen');

    // Añadir clase 'visible' con retraso para el texto
    setTimeout(() => {
        text.classList.add('visible');
    }, 500); // Retraso de 0.5 segundos

    // Añadir clase 'visible' con retraso para cada imagen
    images.forEach((image, index) => {
        setTimeout(() => {
            image.classList.add('visible');
        }, (index + 1) * 500); // Retraso de 0.5 segundos por imagen
    });
});
