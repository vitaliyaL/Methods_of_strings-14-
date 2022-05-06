function stringCutter(str) {
  return `${str.slice(0, 30)}...`;
}
let firstSentence = "But you have no right to call me a murderer";
console.log(stringCutter(firstSentence));

function registerInvertion(str) {
  let str1 = "";
  for (let i = 0; i < str.length; i++) {
    str[i] === str[i].toUpperCase()
      ? (str1 += str[i].toLowerCase())
      : (str1 += str[i].toUpperCase());
  }
  return str1;
}
console.log(registerInvertion("Be my Valentine"));
