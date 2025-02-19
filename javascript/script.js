$(document).ready(function(){
    console.log("online");

    let $pokeCont = $(".poke-cont");

    $pokeCont.isotope({
        // options
        itemSelector: '.card',
        layoutMode: 'fitRows'
      });

      $(".buttons button").on("click", function(){
        let filterVal = $(this).data("filter");
        $pokeCont.isotope({
            filter: filterVal
        })
      });


})

document.addEventListener("DOMContentLoaded", function () {
  const typeColors = {
      normal: "#A8A77A",
      fire: "#EE8130",
      water: "#6390F0",
      electric: "#F7D02C",
      grass: "#7AC74C",
      ice: "#96D9D6",
      fighting: "#C22E28",
      poison: "#A33EA1",
      ground: "#E2BF65",
      flying: "#A98FF3",
      psychic: "#F95587",
      bug: "#A6B91A",
      rock: "#B6A136",
      ghost: "#735797",
      dragon: "#6F35FC",
      dark: "#705746",
      steel: "#B7B7CE",
      fairy: "#D685AD"
  };

  document.querySelectorAll(".card").forEach(card => {
      // Obtener clases que indican el tipo
      let types = Array.from(card.classList)
          .filter(cls => cls.startsWith("type-"))
          .map(cls => cls.replace("type-", "")); // Extraer solo el nombre del tipo

      if (types.length === 2) {
          // Si tiene dos tipos, aplicar degradado
          card.style.background = `linear-gradient(135deg, ${typeColors[types[0]]} 50%, ${typeColors[types[1]]} 50%)`;
      } else if (types.length === 1) {
          // Si tiene solo un tipo, aplicar un solo color
          card.style.background = typeColors[types[0]];
      }
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const typeColors = {
      normal: "#A8A77A",
      fire: "#EE8130",
      water: "#6390F0",
      electric: "#F7D02C",
      grass: "#7AC74C",
      ice: "#96D9D6",
      fighting: "#C22E28",
      poison: "#A33EA1",
      ground: "#E2BF65",
      flying: "#A98FF3",
      psychic: "#F95587",
      bug: "#A6B91A",
      rock: "#B6A136",
      ghost: "#735797",
      dragon: "#6F35FC",
      dark: "#705746",
      steel: "#B7B7CE",
      fairy: "#D685AD"
  };

  // Aplicar color de fondo a los botones según el tipo
  document.querySelectorAll(".buttons button").forEach(button => {
      const type = button.getAttribute("data-filter").replace('.', '');  // Obtener el tipo de Pokémon desde data-filter
      if (typeColors[type]) {
          button.style.backgroundColor = typeColors[type];
      }
  });
});