

btn.addEventListener("click", function() {

  arr = [];

  for (var i = 1; i < 101; i++) {
    arr.push(i);
  }

  function delay() {
    for (var c = 0; c < arr.length; c++)
    console.log(arr[c]);
  }

  setTimeout(delay(), 1000);

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
});
