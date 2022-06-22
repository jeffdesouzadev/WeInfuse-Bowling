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
        console.log('val, nextVal, nextNextVal:', `${val} ${nextVal} ${nextNextVal}`)
        if (val === 'X') { //STRIKE
          if (nextVal === null || nextNextVal === null) {
            runningTotal = null
            let newRolls = rolls.slice(1, rolls.length)
            // console.log('strikeNewRolls is', newRolls)
            return [runningTotal, newRolls]
          } else {
            runningTotal = 10 + nextVal + nextNextVal
            let newRolls = rolls.slice(1, rolls.length)
            return [runningTotal, newRolls]
          }

        } else if (!isNaN(val)) { //NUMBER
          console.log('start is a number')
          if (nextVal === null) {
            return [null, []]
          } else {
            if (!isNaN(nextVal)) { //NUMBER + NUMBER
              runningTotal = val + nextVal
              let newRolls = rolls.slice(2, rolls.length)
              // console.log('newRolls is', newRolls)
              return [runningTotal, newRolls]


            } else if (nextVal === '/' && nextNextVal === null) {
              console.log('num / null')
              runningTotal = null
              let newRolls = rolls.slice(2, rolls.length)
              return [runningTotal, newRolls]
              //handle nextnext = strike
            }else if (nextVal === '/' && !isNaN(nextNextVal)) {
              console.log('num / num')
              runningTotal = 10 + nextNextVal
              console.log('pre-slice', rolls)
              let newRolls = rolls.slice(2, rolls.length)
              console.log('post-slice', newRolls)
              return [runningTotal, newRolls]
              //handle nextnext = strike
            } else if (nextVal === '/' && nextNextVal === 'X') {
              runningTotal = 10 + 10
              let newRolls = rolls.slice(2, rolls.length)
              return [runningTotal, newRolls]
              //handle nextnext = strike




            } else if (nextVal === 'X') {
              throw new RangeError("Can not end a frame with a strike.");
            }
          }
        }
      }
    }
    // return [null, []]
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



  let remainingRolls = bowlingRolls
  while (remainingRolls.length > 0) {
    console.log('NEW LOOP remaining rolls are', remainingRolls)
    let frameResults = getOneFrameTotal(remainingRolls); //returns tuple
    console.log('frame results for ', remainingRolls, ' is ', frameResults)
    let score = frameResults[0]
    console.log('score results for', remainingRolls, ' is ', score)
    remainingRolls = frameResults[1]
    resultantScores.push(score)
    console.log('length for remaining rolls will be ', remainingRolls.length)
    console.log('resultant scores right now is', resultantScores)
  }




  return resultantScores
}
module.exports = getFrameTotals