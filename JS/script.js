// da 1 a 100
for (var i = 1; (i < 100 +1); i++) {

  if (i%3 == 0 && i%5 == 0) {
   console.log("FizzBuzz");
   continue;
 }
  else if (i%3 == 0) {
    console.log("Fizz");
    continue;
  }
  else if (i%5 == 0) {
    console.log("Buzz");
    continue;
  }

  console.log(i);
}
