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
