document.addEventListener("DOMContentLoaded", function() {
    var sobreMimLink = document.querySelector('a[href="#eu"]');
    if (sobreMimLink) {
        sobreMimLink.addEventListener("click", function(event) {
            event.preventDefault(); // Evita o comportamento padrão do link
            var sobreMimElement = document.getElementById("eu");
            sobreMimElement.scrollIntoView({ behavior: "smooth" }); // Rola suavemente até o elemento "Sobre mim"
        });
    }
});
document.addEventListener("DOMContentLoaded", () =>{
    new TypeIt(".animacao", {
        speed: 150,
        loop:true
         
    }).type("desenvolvedor.", {delay: 900}).delete(14)
    .type("universitario." ,{delay:900}).move(-4).pause(1000).delete(1).type("á").move(4)
    .delete(14).type("programador.", {delay:900}).delete(12)

    .go()
})