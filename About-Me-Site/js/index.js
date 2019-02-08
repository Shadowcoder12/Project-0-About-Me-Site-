console.log("the script is working!");
var love = "I love jquery, jquery script is working";

console.log(`${love}`);












// Quote function that times
(function() {

    var quotes = $(".quotes");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextQuote);
    }

    showNextQuote();

})();

// lightbox function
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
            });

// Interval function for carousel
 $(document).ready(function(){
    $('.carousel').carousel();

    setInterval(function(){
      $('.carousel').carousel('next');
    }, 4000);

  });

