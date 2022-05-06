function stringCutter(str) {
  return `${str.slice(0, 30)}...`;
}
let firstSentence = "But you have no right to call me a murderer";
console.log(stringCutter(firstSentence));
