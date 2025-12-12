/**
 * @author Brayden Thistle
 * @version 1.0.0
 * @date 2025-12-12
 * @fileoverview this program starts at 100 and counts down in 5s until it reaches 0
 */

//variables
let StartingPoint: number = 100;
let EndPoint: number = 0;
let Countdown: number = 5;

//loop from 100 - 0
for (
  let currentnumber: number = StartingPoint; currentnumber >= EndPoint; currentnumber -= Countdown
) {
  //output
  console.log(currentnumber);
}

console.log("\nDone");