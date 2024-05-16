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

function typeWritter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra,i) => {
        setTimeout(function(){
            elemento.innerHTML+= letra
        }, 75*i)
    })
};
    const apresentacao = document.
    console.log(texto_apr);
    querySelector(p);
    typeWritter (texto_apr);