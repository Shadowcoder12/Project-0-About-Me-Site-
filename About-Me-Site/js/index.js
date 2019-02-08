console.log("the script is working!");
var love = "I love jquery, jquery script is working";

console.log(`${love}`);








 $(document).ready(function(){
    $('.carousel').carousel();




    setInterval(function(){
      $('.carousel').carousel('next');
    }, 2000);


  });

