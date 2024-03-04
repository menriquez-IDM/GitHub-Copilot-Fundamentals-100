function calculateNumbers(a, b) {
  return a + b;
}

//Create a function that calculates the price of a vehicle based on gas mileage and and miles driven and year of the car
function calculatePrice(miles, year, mpg) {
    if (year > 2010) {
        return miles * 0.05;
    } else if (year > 2000) {
        return miles * 0.10;
    } else {
        return miles * 0.15;
    }
    }


