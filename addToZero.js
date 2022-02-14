// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
let addToZero = false;

//loop each numbers and check if it is 0 or not
for(let i = 0; i < array.length; i++){
    let n = array[i];
    if(n === 0){
        //if it is 0, check if there is another 0
        if(array.indexOf(0) !== -1){
            addToZero = true;
            console.log('There are two 0s in the array!');
            break;
        }
    }else{
        //if it is not 0, make a negative number of that number
        //check if the number exist
        if(array.indexOf(-n) !== -1){
            addToZero = true;
            console.log(`There are ${n} and ${-n} in the array!`);
            break;
        }
    }
}




