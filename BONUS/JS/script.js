// Tentativo di esecuzione con setTimeout

btn.addEventListener("click", function() {

  // arr = [];
  //
  // for (var i = 1; i < 101; i++) {
  //   arr.push(i);
  // }
  //
  // function delay() {
  //     console.log(arr[c]);
  //   }
  //
  // }
  //
  // setTimeout(delay(), 1000);







  // var printNumbersForEvery02Sec = (n) => {
  //
  //   loop0: for (let i = 1; i <= n; i++) {
  //
  //     setTimeout(function(){
  //       if (i%3 == 0 && i%5 == 0) {
  //        console.log("FizzBuzz");
  //        // continue loop0;
  //      }
  //       else if (i%3 == 0) {
  //         console.log("Fizz");
  //         // continue loop0;
  //
  //       }
  //       else if (i%5 == 0) {
  //         console.log("Buzz");
  //         // continue loop0;
  //       }
  //       console.log(i)
  //     }, i * 250);
  //   }
  // }
  // printNumbersForEvery02Sec(100);


  // for (var i = 1; (i < 100 +1); i++) {
  //
  //   if (i%3 == 0 && i%5 == 0) {
  //    console.log("FizzBuzz");
  //    setInterval(function(){}, 250)
  //    continue;
  //  }
  //   else if (i%3 == 0) {
  //     console.log("Fizz");
  //     setInterval(function(){}, 250)
  //     continue;
  //   }
  //   else if (i%5 == 0) {
  //     console.log("Buzz");
  //     setInterval(function(){}, 250)
  //     continue;
  //   }
  //   setInterval(function(){}, 250)
  //
  //   console.log(i);
  // }


  var i = 1;
  var delay = setInterval(function(){
    console.log(i);

      if (i%3 == 0 && i%5 == 0) {
       console.log("FizzBuzz");

     }
      else if (i%3 == 0) {
        console.log("Fizz");

      }
      else if (i%5 == 0) {
        console.log("Buzz");
      }

       if(i === 10){
         clearInterval(delay);
        }
        i++;
  }, 250);

});
