// Question 1: Value Detective
function describeValue(value) {
  const type = typeof value;
  const truthiness = value ? "truthy" : "falsy";

  return `${type} | ${truthiness}`;
}

console.log(describeValue("Hello"));
console.log(describeValue(""));
console.log(describeValue(25));
console.log(describeValue(0));
console.log(describeValue(true));
console.log(describeValue(false));
console.log(describeValue(undefined));
console.log(describeValue(null));
console.log(describeValue(NaN));

// Output:
// string | truthy
// string | falsy
// number | truthy
// number | falsy
// boolean | truthy
// boolean | falsy
// undefined | falsy
// object | falsy
// number | falsy
