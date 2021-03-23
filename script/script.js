
// A $( document ).ready() block.

$( document ).ready(function() {
    $(".video-cta-click").click(function() {
        $(".modal").css("display", "block")
    })

   $(window).click(function(e) {
    if (e.target.id == "myModal" ) {
        $(".modal").css("display", "none")
    }


   })

});

