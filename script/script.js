
// A $( document ).ready() block.

$( document ).ready(function() {
    // This is responsible for showing the modal video 
    $(".video-cta-click").click(function() {
        $(".modal").css("display", "block")
    })

   $(window).click(function(e) {
    if (e.target.id == "myModal" ) {
        $(".modal").css("display", "none")
    }

   })


//    This block of code is responsible for sticky navbar hover 


   $(".link-1").hover( function() {
       $(".primate-global").css("background-color","purple")
       $(".primate-global-img").attr("src","res/primate-global-w.png")

   }, function() {
    $(".primate-global").css('background-color',"#faf2f2")
    $(".primate-global-img").attr("src","res/primate-global.png")
   })

   $(".link-2").hover( function() {
    $(".primeone-iot").css("background-color","#DDA73A")
    $(".primeone-iot-img").attr("src","res/primeone-iot-w.png")

}, function() {
    $(".primeone-iot").css("background-color","#faf2f2")
    $(".primeone-iot-img").attr("src","res/primeone-iot.png")   
    })

    
    $(".link-3").hover( function() {
        $(".primeone-tv").css("background-color","#4CA146")
        $(".primeone-tv-img").attr("src","res/primeone-tv-w.png")
    
    }, function() {
        $(".primeone-tv").css("background-color","#faf2f2")
        $(".primeone-tv-img").attr("src","res/primeone-tv.png")  
        })
    

     $(".link-4").hover( function() {
            $(".primeone-life").css("background-color","#136A9F")
            $(".primeone-life-img").attr("src","res/primeone-life-w.png")
        
    }, function() {
            $(".primeone-life").css("background-color","#faf2f2")
            $(".primeone-life-img").attr("src","res/primeone-life.png")  
            })

    
     $(".link-5").hover( function() {
         $(".primeone-circle").css("background-color","#28BFE6")
         $(".primeone-circle-img").attr("src","res/primeone-circel-w.png")
            
        }, function() {
         $(".primeone-circle").css("background-color","#faf2f2")
         $(".primeone-circle-img").attr("src","res/primeone-circel.png")  
          })

  
     $(".link-6").hover( function() {
            $(".primeone-city").css("background-color","#F26A2E")
            $(".primeone-city-img").attr("src","res/primeone-city-w.png")
               
           }, function() {
            $(".primeone-city").css("background-color","#faf2f2")
            $(".primeone-city-img").attr("src","res/primeone-city.png") 
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
    


   



});

