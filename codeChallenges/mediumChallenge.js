var goodDrivingRecord = false;
var age = 18;

if (goodDrivingRecord && age >=25){
    console.log("Congratulations, you get a discount for your rental car!")
} else if (goodDrivingRecord || age >=25){
    console.log("That will be full price for your rental car.")
} else {
    console.log("Someone else needs to sign for the rental car.")
}
