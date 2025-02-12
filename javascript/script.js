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