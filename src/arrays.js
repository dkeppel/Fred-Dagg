//TODO - Make a function that sorts an array and delete any duplicate data.
//NOTE - duplicateArray([1, 1, 2, 3, 4, 5]) -> ([1, 2, 3, 4, 5])
// function redundentData(delD) { //Sort dupplicate data function
//     const newArr = []; //Creates new array
//     let oldArr = delD[0]; //Index of current array 0
//     newArr.push(oldArr); //Push none duplicate data to new array
//     for(let i = 0; i < delD.length; i++) { //Loop through data starting at 0, until end of array
//         if(delD[i] !== oldArr){ //If data is not strictly equal to
//             oldArr = delD[i];
//             newArr.push(oldArr) //Push data to new array
//         }
//     }
//     return newArr //Return newArr data
// }    
// console.log(redundentData([[1, 1, 2, 3, 4, 5]]))
//TODO - Develop a function that counts number (0)'s in 2D array
//NOTE - twoArrays([0,0],[0,1]) -> 3

// function twoArrays(arr) { // count 2d array
//     let count = 0;
//     for(let i = 0; i < arr.length; i++) { //for loop
//         for(let j = 0; j < arr[i].length; j++){
//             if(arr[i][j] === 0) {
//                 count++
//             }
//         }
//     }
//     return count
// }

// console.log(twoArrays([[0,0],[0,1]]))

//TODO - Write a function that returns the largest even number in an array
//NOTE - largeReturns([1,10,17) -> 10
//NOTE - largeReturns([1,3,5,7,9) -> "No even number"
function largeReturns(arr) {
   let benchmark = -1;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0)
            if(arr[i] > benchmark) {
                benchmark = arr[i]
                }
            } 
        return benchmark === -1 ? "No even number": benchmark
    }

console.log(largeReturns([1,9,17]))
