$(document).ready(function(){

    $(".header-right").click(function(){

        var x = $(".hamburger-menu");
        
        if (x.style.display === "none") {

            x.style.display = "block";

        } else {

            x.style.display = "none";

        }
        
    })

})