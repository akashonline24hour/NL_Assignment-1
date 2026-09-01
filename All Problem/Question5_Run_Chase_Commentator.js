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

console.log(getChaseVerdict(200, 200, 12)); // Expected output: "Won"
console.log(getChaseVerdict(200, 190, 0)); // Expected output: "Lost"
console.log(getChaseVerdict(100, 90, 12)); // Expected output: "Need 10 runs in 12 balls | Comfortable"
console.log(getChaseVerdict(100, 80, 12)); // Expected output: "Need 20 runs in 12 balls | Tough"
console.log(getChaseVerdict(100, 70, 12)); // Expected output: "Need 30 runs in 12 balls | Almost Impossible"
console.log(getChaseVerdict(150, 149, 1)); // Expected output: "Need 1 runs in 1 balls | Comfortable"
