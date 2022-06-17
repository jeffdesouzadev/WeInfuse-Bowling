# WeInfuse-Bowling

## Tragic Assumptions
1. Each element of rolls is a throw, irrespective of what frame the player is on.
2. Input is an array that looks like this: [4, 5, X, 3, /, F]
3. Acceptable Non-Integer values:
   * X - Strike, worth 10 + the values of the next two throws
   * / - Spare, brings the frame total to 10 + the next throw
   * F - Foul, same as a gutter ball: 0 points for the roll

## Approach
Though there are many ways to solve this prompt, I think writing a quick
state-machine to parse the incoming rolls sounds like the most fun!  Here's
a quick diagram:

## Installation

