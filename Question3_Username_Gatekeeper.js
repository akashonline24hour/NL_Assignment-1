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

console.log(validateUsername("rahim")); // "Available"
console.log(validateUsername("abc")); // "Too Short"
console.log(validateUsername("a b c")); // "No Space Allowed"
console.log(validateUsername("admin_Rahim")); // "Reserved Word"
console.log(validateUsername("superadmin99")); // "Reserved Word"
console.log(validateUsername("user1234")); // "Available"
