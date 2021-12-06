class Formatter {

  static capitalize(string) {
    const newString = string.charAt(0).toUpperCase() + string.slice(1)
    return newString
  }

  static sanitize(string) {
    console.log('string:', string)
    let newString = string.replace(/[^A-Za-z0-9-' ]+/g, "")
    // console.log('newString:', newString) 
    return newString
  }

  static titleize(string) {
    let words = []
    let noNoWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let wordArray = string.split(' ')
    wordArray.forEach(word1 => {
      if (word1 === wordArray[0]) {
        let capitalized = word1.charAt(0).toUpperCase() + word1.slice(1)
        words.push(capitalized)
      } else if (word1 === noNoWords.find(word2 => word2 === word1)) {
        words.push(word1)
      } else {
        let capitalized = word1.charAt(0).toUpperCase() + word1.slice(1)
        words.push(capitalized)
    }})
    let final = words.join(' ')
    return final
    }}

    let num = Formatter.sanitize('ca$@#tching cold')
    console.log(num)