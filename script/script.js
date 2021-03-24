// A $( document ).ready() block.
    $(document).ready(function() {
        // This is responsible for showing the modal video 
        $(".video-cta-click").click(function() {
            $(".modal").css("display", "block")
        })

        $(window).click(function(e) {
            if (e.target.id == "myModal") {
                $(".modal").css("display", "none")
            }

        })


    //    This block of code is responsible for sticky navbar hover 


    $(".link-1").hover(function() {
        $(".primate-global").css("background-color", "purple")
        $(".primate-global-img").attr("src", "res/primate-global-w.png")

    }, function() {
        $(".primate-global").css('background-color', "#faf2f2")
        $(".primate-global-img").attr("src", "res/primate-global.png")
    })

    $(".link-2").hover(function() {
        $(".primeone-iot").css("background-color", "#DDA73A")
        $(".primeone-iot-img").attr("src", "res/primeone-iot-w.png")

    }, function() {
        $(".primeone-iot").css("background-color", "#faf2f2")
        $(".primeone-iot-img").attr("src", "res/primeone-iot.png")
    })


    $(".link-3").hover(function() {
        $(".primeone-tv").css("background-color", "#4CA146")
        $(".primeone-tv-img").attr("src", "res/primeone-tv-w.png")

    }, function() {
        $(".primeone-tv").css("background-color", "#faf2f2")
        $(".primeone-tv-img").attr("src", "res/primeone-tv.png")
    })


    $(".link-4").hover(function() {
        $(".primeone-life").css("background-color", "#136A9F")
        $(".primeone-life-img").attr("src", "res/primeone-life-w.png")

    }, function() {
        $(".primeone-life").css("background-color", "#faf2f2")
        $(".primeone-life-img").attr("src", "res/primeone-life.png")
    })


    $(".link-5").hover(function() {
        $(".primeone-circle").css("background-color", "#28BFE6")
        $(".primeone-circle-img").attr("src", "res/primeone-circel-w.png")

    }, function() {
        $(".primeone-circle").css("background-color", "#faf2f2")
        $(".primeone-circle-img").attr("src", "res/primeone-circel.png")
    })


    $(".link-6").hover(function() {
        $(".primeone-city").css("background-color", "#F26A2E")
        $(".primeone-city-img").attr("src", "res/primeone-city-w.png")

    }, function() {
        $(".primeone-city").css("background-color", "#faf2f2")
        $(".primeone-city-img").attr("src", "res/primeone-city.png")
    })


    //  sticky navbar scroll


    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.sticky-navbar').css('display', "flex");
        } else {
            $('.sticky-navbar').css('display', "none");
            $(".is-search-input").css("display", "none")
        }
    });


    // Navbar search input 

    $(".search-icon").click(function() {
        $(".is-search-input").css("display", "block")
    })


    $(".banner-search").click(function() {
        $('.sticky-navbar').css('display', "flex");
        $(".is-search-input").css("display", "block")
    })


    // Collapsible side  navigation 
    if ( $(window).width() >= 400 ) {
        $(".menu-icon").click(function() {
            $("#mySidenav").css("width", "400px")
            $(".container").css("opacity", "0.5")
            $('.sticky-navbar').css('visibility', "hidden")
    
        });
    
    } else {
        console.log("less than 400")
        $(".menu-icon").click(function() {
            $("#mySidenav").css("width", "320px")
            $(".container").css("opacity", "0.5")
            $('.sticky-navbar').css('visibility', "hidden")
      
        });

  
    } 

 

    $(".close").click(function(){
 
        $("#mySidenav").css("width", "0px")
        $(".container").css("opacity", "1")
        $('.sticky-navbar').css('visibility', "")


    })

    


    




 
    $('.s-links').hover(function(){
        var data = $(this).attr('data')

        if (data == "chat") {
            $(".prime-chat, .chat-arrow").css("background-color","#02AEEF")
            $(".chat-img").attr("src","res/chevron-down-w.png")
            
        }
        else if (data == "iot") {
            $(".prime-iot, .iot-arrow").css("background-color","#02AEEF")
            $(".iot-img").attr("src","res/chevron-down-w.png") 
        }
        else if (data == "tv") {
            $(".prime-tv, .tv-arrow").css("background-color","#02AEEF")
            $(".tv-img").attr("src","res/chevron-down-w.png") 
        }
        else if (data == "life") {
            $(".prime-life, .life-arrow").css("background-color","#02AEEF")
            $(".life-img").attr("src","res/chevron-down-w.png") 
        }
        else if (data == "circle") {
            $(".prime-circle, .circle-arrow").css("background-color","#02AEEF")
            $(".circle-img").attr("src","res/chevron-down-w.png") 
        }
        else if (data == "city") {
            $(".prime-city, .city-arrow").css("background-color","#02AEEF")
            $(".city-img").attr("src","res/chevron-down-w.png") 
        }


    },

    function() {
        var data = $(this).attr('data')

        if (data == "chat") {
            $(".prime-chat").css("background-color","#E5233D")
            $(".chat-arrow").css("background-color","#F2F2F2")
            $(".chat-img").attr("src","res/chevron-down.png")
        }
        else if (data == "iot") {
            $(".prime-iot").css("background-color","#DDA73A")
            $(".iot-arrow").css("background-color","#F2F2F2")
            $(".iot-img").attr("src","res/chevron-down.png")
        }
        else if (data == "tv") {
            $(".prime-tv").css("background-color","#4CA146")
            $(".tv-arrow").css("background-color","#F2F2F2")
            $(".tv-img").attr("src","res/chevron-down.png")
        }
        else if (data == "life") {
            $(".prime-life").css("background-color","#136A9F")
            $(".life-arrow").css("background-color","#F2F2F2")
            $(".life-img").attr("src","res/chevron-down.png")
        }

        else if (data == "circle") {
            $(".prime-circle").css("background-color","#28BFE6")
            $(".circle-arrow").css("background-color","#F2F2F2")
            $(".circle-img").attr("src","res/chevron-down.png")
        }

        else if (data == "city") {
            $(".prime-city").css("background-color","#F26A2E")
            $(".city-arrow").css("background-color","#F2F2F2")
            $(".city-img").attr("src","res/chevron-down.png")
        }



    })







});