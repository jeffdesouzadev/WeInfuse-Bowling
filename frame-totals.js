const getFrameTotals = function(bowlingRolls) {
  /*
  Assuming each element of rolls is a throw,
  irrespective of what frame the player is on.
  e.g. [4, 5, X, 3, /]
   X - Strike, worth 10 + the values of the next two throws
   / - Spare, brings the frame total to 10 + the next throw
  */
  console.log('NEW TEST ----------------------------------')
  let resultantScores = []





  let getOneFrameTotal = function(rolls) {
    //returns [frameScore, rolls-with-used-indexes-snipped-off]
    //note: NOT using a switch statement, since it's so easy to forget a break, etc
    let runningTotal = 0;
    if (rolls.length < 1) {
      throw new Error('getOneFrameTotal called with empty rolls array.  How??');
    } else {
      if (rolls[0] === '/') { //BAD INPUT
        throw new RangeError("Can not start a frame with a spare.");
      } else {
        let val = rolls[0]
        let nextVal = getNextValue(rolls)
        let nextNextVal = getNextNextValue(rolls)
        // console.log('val, nextVal, nextNextVal:', `${val} ${nextVal} ${nextNextVal}`)
        if (val === 'X') { //STRIKE
          if (nextVal === null || nextNextVal === null) {
            runningTotal = null
            let newRolls = rolls.slice(1, rolls.length)
            return [runningTotal, newRolls]
          } else {
            if (nextVal==='X') {
              nextVal = 10
            }
            if (nextNextVal === 'X') {
              nextNextVal = 10
            }
            runningTotal = 10 + nextVal + nextNextVal
            let newRolls = rolls.slice(1, rolls.length)
            return [runningTotal, newRolls]
          }

        } else if (!isNaN(val)) { //NUMBER
          if (nextVal === null) {
            return [null, []]
          } else {
            if (!isNaN(nextVal)) { //NUMBER + NUMBER
              runningTotal = val + nextVal
              let newRolls = rolls.slice(2, rolls.length)
              return [runningTotal, newRolls]


            } else if (nextVal === '/' && nextNextVal === null) {
              runningTotal = null
              let newRolls = rolls.slice(2, rolls.length)
              return [runningTotal, newRolls]
            }else if (nextVal === '/' && !isNaN(nextNextVal)) {
              runningTotal = 10 + nextNextVal
              let newRolls = rolls.slice(2, rolls.length)
              return [runningTotal, newRolls]
            } else if (nextVal === '/' && nextNextVal === 'X') {
              runningTotal = 10 + 10
              let newRolls = rolls.slice(2, rolls.length)
              return [runningTotal, newRolls]




            } else if (nextVal === 'X') {
              throw new RangeError("Can not end a frame with a strike.");
            }
          }
        }
      }
    }
  }

  let getNextValue = function(rolls, startIndex) {
    // console.log('gNV rolls are ', rolls)
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