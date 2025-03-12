

/*$(document).ready(function(){
  console.log("online");

  let $pokeCont = $(".poke-cont");
  let filters = []; // Array para almacenar los filtros activos

  $pokeCont.isotope({
      itemSelector: '.card',
      layoutMode: 'fitRows',
      getSortData: {
          name: ".name",
          number: ".number parseInt"
      }
  });

  // Función para actualizar el contador de Pokémon visibles
  function updateCount() {
      let visibleCount = $pokeCont.data('isotope').filteredItems.length;
      $("#count").text(`Pokémon seleccionados: ${visibleCount}`);
  }

  // Manejar filtros múltiples
  $(".buttons .filter").on("click", function(){
      let filterVal = $(this).data("filter");

      // Si el filtro ya está activo, quitarlo; si no, añadirlo
      if (filters.includes(filterVal)) {
          filters = filters.filter(f => f !== filterVal); // Eliminar filtro
          $(this).removeClass("active"); // Quitar estilo activo
      } else {
          filters.push(filterVal); // Agregar filtro
          $(this).addClass("active"); // Marcar botón como activo
      }

      // Combinar filtros con lógica OR (puedes cambiar a lógica AND si lo prefieres)
      //let filterString = filters.length ? filters.join(", ") : "*";
      let filterString = filters.length ? filters.join("") : "*";


      // Aplicar filtros
      $pokeCont.isotope({ filter: filterString });

      updateCount(); // Actualizar contador
  });

  // Ordenar Pokémon
  $(".buttons .sort").on("click", function(){
      let sortVal = $(this).data("sort-by");
      $pokeCont.isotope({ sortBy: sortVal });
  });

  $(".buttons .reset").on("click", function(){
    filters = []; // Vaciar el array de filtros
    $(".buttons .filter").removeClass("active"); // Quitar la clase activa de todos los botones
    $pokeCont.isotope({ filter: "*" }); // Mostrar todos los Pokémon
    updateCount(); // Actualizar contador
});

  // Evento cuando cambia la disposición de elementos
  $pokeCont.on('arrangeComplete', function() {
      updateCount();
  });

  // Inicializar contador al cargar la página
  updateCount();
});*/

$(document).ready(function(){
  console.log("online");

  let $pokeCont = $(".poke-cont");
  let filters = []; // Array para almacenar los filtros activos

  $pokeCont.isotope({
      itemSelector: '.card',
      layoutMode: 'fitRows',
      getSortData: {
          name: ".name",
          number: ".number parseInt"
      }
  });

  // Función para obtener la clase de generación según el número del Pokémon
  function getGenerationClass(number) {
    if (number <= 151) return "gen1";  // Primera generación
    if (number <= 251) return "gen2";  // Segunda generación
    if (number <= 386) return "gen3";  // Tercera generación
    if (number <= 493) return "gen4";  // Cuarta generación
    if (number <= 649) return "gen5";  // Quinta generación
    if (number <= 721) return "gen6";  // Sexta generación
    if (number <= 809) return "gen7";  // Séptima generación
    if (number <= 905) return "gen8";  // Octava generación
    return "gen9";  // Novena generación
}

// Asigna las clases de generación automáticamente a cada Pokémon
$(".card").each(function() {
    let number = parseInt($(this).find(".number").text());
    let genClass = getGenerationClass(number);
    $(this).addClass(genClass);
});

  // Función para actualizar el contador de Pokémon visibles
  function updateCount() {
      let visibleCount = $pokeCont.data('isotope').filteredItems.length;
      $("#count").text(`Pokémon seleccionados: ${visibleCount}`);
  }

  // Manejar filtros múltiples
  $(".buttons .filter").on("click", function(){
      let filterVal = $(this).data("filter");

      // Si el filtro ya está activo, quitarlo; si no, añadirlo
      if (filters.includes(filterVal)) {
          filters = filters.filter(f => f !== filterVal); // Eliminar filtro
          $(this).removeClass("active"); // Quitar estilo activo
      } else {
          filters.push(filterVal); // Agregar filtro
          $(this).addClass("active"); // Marcar botón como activo
      }

      // Aplicar filtros combinados
      let filterString = filters.length ? filters.join("") : "*";
      $pokeCont.isotope({ filter: filterString });

      updateCount(); // Actualizar contador
  });

  // Resetear filtros
  $(".buttons .reset").on("click", function(){
      filters = []; // Vaciar el array de filtros
      $(".buttons .filter").removeClass("active"); // Quitar la clase activa de todos los botones
      $pokeCont.isotope({ filter: "*" }); // Mostrar todos los Pokémon
      updateCount(); // Actualizar contador
  });
  // Ordenar Pokémon
  $(".buttons .sort").on("click", function(){
    let sortVal = $(this).data("sort-by");
    $pokeCont.isotope({ sortBy: sortVal });

    
      // Evento cuando cambia la disposición de elementos
      $pokeCont.on('arrangeComplete', function() {
          updateCount();
      });
    
      // Inicializar contador al cargar la página
      updateCount();
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

  document.querySelectorAll(".card").forEach(card => {
      // Obtener clases que indican el tipo
      let types = Array.from(card.classList)
          .filter(cls => cls.startsWith("type-"))
          .map(cls => cls.replace("type-", "")); // Extraer solo el nombre del tipo
      if (types.length === 2) {
          // Si tiene dos tipos, aplicar degradado
          card.style.background = `linear-gradient(120deg, ${typeColors[types[0]]} 50%, ${typeColors[types[1]]} 50%)`;
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

//$("p").filter(":not([class])").remove();





