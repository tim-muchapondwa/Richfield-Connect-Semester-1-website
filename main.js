$(document).ready(function() {
    

    $('.nav-links a').hover(
        function() {

            $(this).animate({
                backgroundColor: "rgba(255, 255, 255, 0.25)"
            }, 150);
        }, 
        function() {

            $(this).animate({
                backgroundColor: $(this).hasClass('active') ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0)"
            }, 150);
        }
    );

    console.log("Richfield Connect: Global main.js loaded successfully.");
});