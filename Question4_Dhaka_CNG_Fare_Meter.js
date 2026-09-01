// Question 4: Dhaka CNG Fare Meter
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  // 1. Calculate distance fare
  let distanceFare = 50;
  if (distance > 2) {
    distanceFare += (distance - 2) * 15;
  }

  // 2. Calculate waiting fare
  const waitingFare = waitingMinutes * 2;

  // 3. Calculate total fare
  let totalFare = distanceFare + waitingFare;

  // 4. Apply night surcharge
  if (isNight) {
    totalFare *= 1.2;
  }

  return totalFare;
}

console.log(getCngFare(2)); // Expected output: 50
console.log(getCngFare(1)); // Expected output: 50
console.log(getCngFare(5)); // Expected output: 95 (50 + (5-2)*15)
console.log(getCngFare(10)); // Expected output: 145 (50 + (10-2)*15)
console.log(getCngFare(5, false, 10)); // Expected output: 95 (50 + (5-2)*15)
console.log(getCngFare(5, true)); // Expected output: 114 (95 * 1.2)
console.log(getCngFare(5, true, 10)); // Expected output: 138 (95 + 20) * 1.2
