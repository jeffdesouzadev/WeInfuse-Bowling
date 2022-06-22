const getFrameTotals = function(bowlingRolls) {
  /*
  Assuming each element of rolls is a throw,
  irrespective of what frame the player is on.
  e.g. [4, 5, X, 3, /]
   X - Strike, worth 10 + the values of the next two throws
   / - Spare, brings the frame total to 10 + the next throw
  */

  let resultantScores = []

  let getOneFrameTotal = function(rolls) {
    //returns [frameScore, rolls-with-used-indexes-snipped-off]
    //note: NOT using switch statements, since it's so easy to forget breaks
    // let runningTotal = 0;
    if (rolls.length < 1) {
      throw new Error('getOneFrameTotal called with empty rolls array.  How??');
    } else {
      // if (rolls[0] === '/') { //BAD INPUT
      //   throw new RangeError("Can not start a frame with a spare.");
      // } else {
      let val = rolls[0]
      let nextVal = getNextValue(rolls)
      let nextNextVal = getNextNextValue(rolls)

      if (val === null && nextVal=== null && nextNextVal=== null) {
        throw new RangeError("null is not a valid input value.")
      } else if (val === 'X' && nextVal === null && nextNextVal === null ) {
          const runningTotal = null
          const newRolls = rolls.slice(1, rolls.length)
          return [runningTotal, newRolls]
      } else if (val === '/' && nextVal === null && nextNextVal === null ) {
          throw new RangeError("Can not start a frame with a spare.");
      } else if (!isNaN(val) && nextVal === null && nextNextVal === null ) {
          const runningTotal = null
          const newRolls = rolls.slice(1, rolls.length)
          return [runningTotal, newRolls]
      } else if (val === 'X' && nextVal === 'X' && nextNextVal === null ) {
          const runningTotal = null
          const newRolls = rolls.slice(1, rolls.length)
          return [runningTotal, newRolls]
      } else if (val === '/' && nextVal === 'X' && nextNextVal === null ) {
          throw new RangeError("Can not start a frame with a spare.");
      } else if (!isNaN(val) && nextVal === 'X' && nextNextVal === null ) {
          throw new RangeError("a number can not be closed out by a strike.")
          return [runningTotal, newRolls]
        }else if (val === 'X' && nextVal === '/' && nextNextVal === null ) {
          throw new RangeError("A strike can not be followed by a spare.");
      } else if (val === '/' && nextVal === '/' && nextNextVal === null ) {
          throw new RangeError("Can not start a frame with a spare.");
      } else if (!isNaN(val) && nextVal === '/' && nextNextVal === null ) {
          const runningTotal = 10
          const newRolls = rolls.slice(2, rolls.length)
          return [runningTotal, newRolls]
      } else if (val === 'X' && !isNaN(nextVal) && nextNextVal === null ) {
          const runningTotal = null
          const newRolls = rolls.slice(1, rolls.length)
          return [runningTotal, newRolls]
      } else if (val === '/' && !isNaN(nextVal) && nextNextVal === null ) {
          throw new RangeError("Can not start a frame with a spare.");
      } else if (!isNaN(val) && !isNaN(nextVal) && nextNextVal === null ) {
          const runningTotal = val + nextVal
          const newRolls = rolls.slice(2, rolls.length)
          return [runningTotal, newRolls]
      } else if (val === 'X' && nextVal === null && nextNextVal === 'X' ) {
          throw new RangeError("null is not a valid input value.")
      } else if (val === '/' && nextVal === null && nextNextVal === 'X' ) {
          throw new RangeError("Can not start a frame with a spare.");
      } else if (!isNaN(val) && nextVal === null && nextNextVal === 'X' ) {
          throw new RangeError("null is not a valid input value.")
      } else if (val === 'X' && nextVal === 'X' && nextNextVal === 'X' ) {
          const runningTotal = 30
          const newRolls = rolls.slice(1, rolls.length)
          return [runningTotal, newRolls]
      } else if (val === '/' && nextVal === 'X' && nextNextVal === 'X' ) {
          throw new RangeError("Can not start a frame with a spare.");
      } else if (!isNaN(val) && nextVal === 'X' && nextNextVal === 'X' ) {
          throw new RangeError("a number can not be closed out by a strike.")
        }else if (val === 'X' && nextVal === '/' && nextNextVal === 'X' ) {
          throw new RangeError("a spare must be preceded by a number.")
      } else if (val === '/' && nextVal === '/' && nextNextVal === 'X' ) {
          throw new RangeError("Can not start a frame with a spare.");
      } else if (!isNaN(val) && nextVal === '/' && nextNextVal === 'X' ) {
          const runningTotal = 10
          const newRolls = rolls.slice(2, rolls.length)
          return [runningTotal, newRolls]
      } else if (val === 'X' && !isNaN(nextVal) && nextNextVal === 'X' ) {
          throw new RangeError("null is not a valid input value.")
      } else if (val === '/' && !isNaN(nextVal) && nextNextVal === 'X' ) {
          throw new RangeError("Can not start a frame with a spare.");
      } else if (!isNaN(val) && !isNaN(nextVal) && nextNextVal === 'X' ) {
          const runningTotal = val + nextVal
          const newRolls = rolls.slice(2, rolls.length)
          return [runningTotal, newRolls]
      } else if (val === 'X' && nextVal === null && nextNextVal === '/' ) {
          throw new RangeError("null is not a valid input value.")
      } else if (val === '/' && nextVal === null && nextNextVal === '/' ) {
          throw new RangeError("Can not start a frame with a spare.");
      } else if (!isNaN(val) && nextVal === null && nextNextVal === '/' ) {
          throw new RangeError("null is not a valid input value.")
      } else if (val === 'X' && nextVal === 'X' && nextNextVal === '/' ) {
          throw new RangeError("Can not start a frame with a spare.");
      } else if (val === '/' && nextVal === 'X' && nextNextVal === '/' ) {
          throw new RangeError("Can not start a frame with a spare.");
      } else if (!isNaN(val) && nextVal === 'X' && nextNextVal === '/' ) {
          throw new RangeError("a number can not be closed out by a strike.")
        }else if (val === 'X' && nextVal === '/' && nextNextVal === '/' ) {
          throw new RangeError("Can not start a frame with a spare.");
      } else if (val === '/' && nextVal === '/' && nextNextVal === '/' ) {
          throw new RangeError("Can not start a frame with a spare.");
      } else if (!isNaN(val) && nextVal === '/' && nextNextVal === '/' ) {
          throw new RangeError("Can not start a frame with a spare.");
      } else if (val === 'X' && !isNaN(nextVal) && nextNextVal === '/' ) {
          const runningTotal = 20
          const newRolls = rolls.slice(1, rolls.length)
          return [runningTotal, newRolls]
      } else if (val === '/' && !isNaN(nextVal) && nextNextVal === '/' ) {
          throw new RangeError("Can not start a frame with a spare.");
      } else if (!isNaN(val) && !isNaN(nextVal) && nextNextVal === '/' ) {
          throw new RangeError("Can not start a frame with a spare.");
      } else if (val === 'X' && nextVal === null &&  !isNaN(nextNextVal) ) {
          throw new RangeError("null is not a valid input value.")
      } else if (val === '/' && nextVal === null && !isNaN(nextNextVal) ) {
          throw new RangeError("Can not start a frame with a spare.");
      } else if (!isNaN(val) && nextVal === null && !isNaN(nextNextVal) ) {
          throw new RangeError("null is not a valid input value.")
      } else if (val === 'X' && nextVal === 'X' && !isNaN(nextNextVal) ) {
          const runningTotal = 20 + nextNextVal
          const newRolls = rolls.slice(1, rolls.length)
          return [runningTotal, newRolls]
      } else if (val === '/' && nextVal === 'X' && !isNaN(nextNextVal) ) {
          throw new RangeError("Can not start a frame with a spare.");
      } else if (!isNaN(val) && nextVal === 'X' && !isNaN(nextNextVal) ) {
          throw new RangeError("a number can not be closed out by a strike.")
        }else if (val === 'X' && nextVal === '/' && !isNaN(nextNextVal) ) {
          throw new RangeError("Can not start a frame with a spare.");
      } else if (val === '/' && nextVal === '/' && !isNaN(nextNextVal) ) {
          throw new RangeError("Can not start a frame with a spare.");
      } else if (!isNaN(val) && nextVal === '/' && !isNaN(nextNextVal) ) {
          const runningTotal = 10 + nextNextVal
          const newRolls = rolls.slice(2, rolls.length)
          return [runningTotal, newRolls]
      } else if (val === 'X' && !isNaN(nextVal) && !isNaN(nextNextVal) ) {
          const runningTotal = 10 + nextVal + nextNextVal
          const newRolls = rolls.slice(1, rolls.length)
          return [runningTotal, newRolls]
      } else if (val === '/' && !isNaN(nextVal) && !isNaN(nextNextVal) ) {
          throw new RangeError("Can not start a frame with a spare.");
      } else if (!isNaN(val) && !isNaN(nextVal) && !isNaN(nextNextVal) ) {
          const runningTotal = val + nextVal
          const newRolls = rolls.slice(2, rolls.length)
          return [runningTotal, newRolls]
      }


      // if (val === 'X') { //STRIKE START
      //   if (nextVal === null || nextNextVal === null) {
      //     runningTotal = null
      //     let newRolls = rolls.slice(1, rolls.length)
      //     return [runningTotal, newRolls]
      //   } else {
      //     if (nextVal==='X') {
      //       nextVal = 10
      //     } else if (nextVal ==='/') {
      //       throw new RangeError("Can not start a frame with a spare.");
      //     }
      //     if (nextNextVal === 'X') {
      //       nextNextVal = 10
      //     } else if (nextNextVal === '/') {
      //       nextNextVal = 10-nextVal
      //     }
      //     runningTotal = 10 + nextVal + nextNextVal
      //     let newRolls = rolls.slice(1, rolls.length)
      //     return [runningTotal, newRolls]
      //   }

      // } else if (!isNaN(val)) { //NUMBER START
      //   if (nextVal === null) {
      //     return [null, []]
      //   } else {
      //     if (!isNaN(nextVal)) { //NUMBER + NUMBER
      //       runningTotal = val + nextVal
      //       let newRolls = rolls.slice(2, rolls.length)
      //       return [runningTotal, newRolls]

      //       //NUMBER + / + {null, NUMBER, X}
      //     } else if (nextVal === '/' && nextNextVal === null) {
      //       runningTotal = null
      //       let newRolls = rolls.slice(2, rolls.length)
      //       return [runningTotal, newRolls]
      //     }else if (nextVal === '/' && !isNaN(nextNextVal)) {
      //       runningTotal = 10 + nextNextVal
      //       let newRolls = rolls.slice(2, rolls.length)
      //       return [runningTotal, newRolls]
      //     } else if (nextVal === '/' && nextNextVal === 'X') {
      //       runningTotal = 10 + 10
      //       let newRolls = rolls.slice(2, rolls.length)
      //       return [runningTotal, newRolls]

      //       //NUMBER + X
      //     } else if (nextVal === 'X') {
      //       throw new RangeError("Can not end a frame with a strike.");
      //     }
      //   }
      // }




      //}
    }
  }

  let getNextValue = function(rolls, startIndex) {
    let sIndex = 0
    if (startIndex) {
      sIndex = startIndex
    }
    if (sIndex > rolls.length - 2) {
      return null
    } else {
      return rolls[sIndex + 1]
    }
  }

  let getNextNextValue = function(rolls, startIndex) {
    let sIndex = 0
    if (startIndex) {
      sIndex = startIndex
    }
    if (sIndex > rolls.length - 3) {
      return null
    } else {
      return rolls[sIndex + 2]
    }
  }


  //MAIN
  let remainingRolls = bowlingRolls
  while (remainingRolls.length > 0) {
    let frameResults = getOneFrameTotal(remainingRolls); //returns tuple
    let score = frameResults[0]
    remainingRolls = frameResults[1]
    if (resultantScores.length < 10) {
      resultantScores.push(score)
    }
  }
  return resultantScores
}
module.exports = getFrameTotals