// Question 1: Value Detective
function describeValue(value) {
  const type = typeof value;
  const truthiness = value ? "truthy" : "falsy";

  return `${type} | ${truthiness}`;
}

// Question 2: Bangladesh Weekend Machine
function getDayType(day) {
  if (typeof day !== "string") {
    return "Invalid Day";
  }

  const formattedDay = day.trim().toLowerCase();

  switch (formattedDay) {
    case "friday":
    case "saturday":
      return "Weekend";

    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";

    default:
      return "Invalid Day";
  }
}

// Question 3: Username Gatekeeper
function validateUsername(username) {
  // 1. If username is less than 4 characters
  if (username.length < 4) {
    return "Too Short";
  }

  // 2. If username contains a space
  if (username.includes(" ")) {
    return "No Space Allowed";
  }

  // 3. If username contains "admin"
  if (username.toLowerCase().includes("admin")) {
    return "Reserved Word";
  }

  // 4. Otherwise
  return "Available";
}

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

// Question 5: Run Chase Commentator
const getChaseVerdict = (target, scored, ballsLeft) => {
  // Step 1: Calculate runs needed
  const runsNeeded = target - scored;

  // Step 2: Match already won
  if (runsNeeded <= 0) {
    return "Won";
  }

  // Step 3: No balls left to score
  if (ballsLeft <= 0) {
    return "Lost";
  }

  // Step 4: Calculate required run rate
  const requiredRate = (runsNeeded / ballsLeft) * 6;

  // Step 5: Determine verdict based on required rate
  let verdict = "";
  if (requiredRate <= 6) {
    verdict = "Comfortable";
  } else if (requiredRate <= 12) {
    verdict = "Tough";
  } else {
    verdict = "Almost Impossible";
  }

  // Step 6: Return formatted string
  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};
