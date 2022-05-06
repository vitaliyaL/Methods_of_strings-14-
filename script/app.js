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

function strObj(str) {
  const length = str.length;
  const obj = {
    allSymbols: length,
  };
  str = str.trim();
  let count = 0;
  let symbols = 0;
  for (let i = 0; i < str.length; i++) {
    while (str[i] !== " " && i < str.length) {
      symbols++;
      i++;
    }
    count++;
  }
  obj.symbolsWithoutSpaces = symbols;
  obj.quantityOfWords = count;
  switch (str[str.length - 1]) {
    case ".":
      obj.sentenceType = "утвердительное";
      break;
    case "?":
      obj.sentenceType = "вопросительное";
      break;
    case "!":
      obj.sentenceType = "восклицательное";
      break;
    default:
      obj.sentenceType = null;
      break;
  }
  return obj;
}
console.log(strObj("  Я хочу учиться! "));

function moderation(str, word) {
  let str1 = "";
  for (let i = 0; i < word.length; i++) {
    str1 += "*";
  }
  let regexp = new RegExp(word, "gi");
  return str.replace(regexp, str1);
}

let first = "Follow the white raBbiT rabbit RAbBit";
let bannedWord = "rabbit";
console.log(moderation(first, bannedWord));
