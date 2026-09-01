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

console.log(getDayType("Friday"));
console.log(getDayType("SATURDAY"));
console.log(getDayType("sunday"));
console.log(getDayType("MONDAY"));
console.log(getDayType("TUESDAY"));
console.log(getDayType("WEDNESDAY"));
console.log(getDayType("THURSDAY"));
console.log(getDayType("MYDAY"));
console.log(getDayType(1));
console.log(getDayType(true));

// Output:
// Weekend
// Weekend
// Working Day
// Working Day
// Working Day
// Working Day
// Working Day
// Invalid Day
// Invalid Day
// Invalid Day
