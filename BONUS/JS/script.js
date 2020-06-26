// Tentativo di esecuzione con setTinterval

btn.addEventListener("click", function() {

  var i = 1;
  var delay = setInterval(function(){

      if (i%3 == 0 && i%5 == 0) {
       console.log("FizzBuzz");

     }
      else if (i%3 == 0) {
        console.log("Fizz");

      }
      else if (i%5 == 0) {
        console.log("Buzz");
      }
      else {
        console.log(i);
      }

       if(i === 101){
         clearInterval(delay);
        }
        i++;
  }, 250);

});
