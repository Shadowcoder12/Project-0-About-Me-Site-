console.log("the script is working!");
var love = "I love jquery, jquery script is working";

console.log(`${love}`);










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

