document.addEventListener("DOMContentLoaded", function() {
    var sobreMimLink = document.querySelector('a[href="#sobre-mim"]');
    if (sobreMimLink) {
        sobreMimLink.addEventListener("click", function(event) {
            event.preventDefault(); // Evita o comportamento padrão do link
            var sobreMimElement = document.getElementById("sobre-mim");
            sobreMimElement.scrollIntoView({ behavior: "smooth" }); // Rola suavemente até o elemento "Sobre mim"
        });
    }
});
