const getFrameTotals = function(bowlingRolls) {/*
  Assuming each element of rolls is a throw,
  irrespective of what frame the player is on.
  e.g. [4, 5, X, 3, /]
   X - Strike, worth 10 + the values of the next two throws
   / - Spare, brings the frame total to 10 + the next throw
  */

   const getOneFrameTotal = function(rolls) {
    //returns [frameScore, rolls-with-used-indexes-snipped-off]
    if (rolls.length < 1) {
      throw new Error('getOneFrameTotal called with empty rolls array.  This should not happen.');
    } else {
      const val = rolls[0]
      const nextVal = getNextValue(rolls)
      const nextNextVal = getNextNextValue(rolls)

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
          const runningTotal = null
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
          const runningTotal = 20
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
    }
  }

  const getNextValue = function(rolls) {
    if (rolls.length >= 2) {
      return rolls[1]
    } else {
      return null
    }
  }

  const getNextNextValue = function(rolls) {
    if (rolls.length >=3) {
      return rolls[2]
    } else {
      return null
    }
  }

  //MAIN
  const resultantScores = []
  let remainingRolls = bowlingRolls
  while (remainingRolls.length > 0) {
    const frameResults = getOneFrameTotal(remainingRolls); //returns tuple
    const score = frameResults[0]
    remainingRolls = frameResults[1]
    if (resultantScores.length < 10) {
      resultantScores.push(score)
    }
  }
  return resultantScores
}
module.exports = getFrameTotals