// My Code
function romanNumeral(string) {
  let number = 0
  let number_array = string.split('')
  
  function helper(array){
    if (array.length === 0) {
      return number
    }
    let input = array[0]

    switch (input) {
      case 'M':
        number = number + 1000
        array = array.splice(1)
        break;
      case 'D':
        number = number + 500
        array = array.splice(1)
        break;
      case 'C':
        if (array[1]=== 'M') {
          number = number + 900
          array = array.splice(2)
        }
        else if (array[1] === 'D'){
          number = number + 400
          array = array.splice(2)
        }
        else {
          number = number + 100
          array = array.splice(1)
        }
        break;
      case 'L':
        number = number + 50
        array = array.splice(1)
        break;
      case 'X':
        if (array[1] === 'C') {
          number = number + 90
          array = array.splice(2)
        }
        else if (array[1] === 'L') {
          number = number + 40
          array = array.splice(2)
        }
        else {
          number = number + 10
          array = array.splice(1)
        }
        break;
      case 'V':
        number = number + 5
        array = array.splice(1) 
        break;
      case 'I':
        if (array[1] === 'X') {
          number = number + 9
          array = array.splice(2)
        }
        else if (array[1] === 'V') {
          number = number + 4
          array = array.splice(2)
        }
        else {
          number = number + 1
          array = array.splice(1)
        }
        break;
      default:
        console.log("This is the default")
      
      
    }

    return helper(array)
  }

  return helper(number_array)
  
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution
