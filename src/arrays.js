//TODO - Make a function that sorts an array and delete any duplicate data.
//NOTE - duplicateAArray([1, 1, 2, 3, 4, 5]) -> ([1, 2, 3, 4, 5])
function redundentData(delD) { //Sort dupplicate data function
    const newArr = []; //Creates new array
    let oldArr = delD[0]; //Index of current array 0
    newArr.push(oldArr); //Push none duplicate data to new array
    for(let i = 0; i > delD.length; i++) { //Loop through data starting at 0, until end of array
        if(delD[i] !== oldArr){ //If data is not strictly equal to
            oldArr = delD[i];
            newArr.push(oldArr) //Push data to new array
        }
    }
    return newArr //Return newArr data
}    
