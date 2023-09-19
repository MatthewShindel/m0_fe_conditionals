var testValue = "Matthew"

if (testValue % 3 === 0 && testValue % 5 === 0){
    console.log("FizzBuzz");
} else if(testValue % 3 === 0) {
    console.log("Fizz");
} else if(testValue % 5 === 0) {
    console.log("Buzz");
} else {
    console.log(testValue);
}