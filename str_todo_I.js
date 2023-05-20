// 1.) Remove Blanks
const removeBlanks = (str) => {
  let tempStr = ""
  for (let i = 0; i < str.length; i++){
    if (str[i] !== " ") {
      tempStr += str[i]
    }
  }
  return tempStr
}
console.log(removeBlanks("hello world, we're practicing algos"))


//  2.) Get Digits
const getDigits = (str) => {
  let tempStr = ""
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i]) && str[i] !== " ") {
      tempStr += str[i]
    }
  }
  return Number(tempStr)
}
console.log(getDigits("4ll th3 4lg0r1thm5"))


// 3.) Acronyms
const acronyms = (str) => {
  let tempStr = ""
  const wordArr = str.split(" ")
  for (let i = 0; i < wordArr.length; i++) {
    tempStr += wordArr[i][0].toUpperCase()
  }
  return tempStr
}
console.log(acronyms("Live from New York, it's Saturday Night!"))


// 4.) Count Non-Spaces
const countNonSpaces = (str) => {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      count++
    }
  }
  return count;
}

console.log(countNonSpaces("Hello world !"))


// 5.) Remove Short Strings
const removeShortStrings = (strArr, num) => {
  let shortStrArr = []
  let nextItemIndex = 0;
  for (let i = 0; i < strArr.length; i++){
    if (strArr[i].length >= num){
      shortStrArr[nextItemIndex++] = strArr[i]
    }
  }
  return shortStrArr
}
console.log(removeShortStrings(["Good morning", "sunshine", "the", "Earth", "says", "hello"],4))