// DEFINE YOUR FUNCTIONS HERE BASED ON THE PROVIDED CRITERIA

function includes(item, array){
    let verdict = false;
    for(let i = 0; i < array.length; i++){
        if (item == array[i]){
            verdict = true;
        }
    }
    return verdict;
}

function indexOf(item, array){
    let position = -1;
    for(let i = 0; i < array.length; i++){
        if(item == array[i]){
            position = i;
        }
    }
    return position;
}

function reverse(array){
    let revArray = [];
    for(let i = 0; i < array.length; i++){
        revArray[i] = array[(array.length-1) - i];
    }
    return  revArray;
}

function slice(start,stop,array){
    let splitArray = [];
    let length = 0;
    for(let i = 0; i < array.length; i++){

        if (indexOf(array[i], array) >= start && indexOf(array[i], array) < stop ){

            splitArray[length] = array[i];
            length = length + 1;
        }
    }
    return splitArray;
}

function concat(array1, array2){
    let newArray = [];
    for(let i = 0; i < (array1.length + array2.length) ; i++){
        if(i < array1.length){
        newArray[i] = array1[i];
        }
        else{
            newArray[i] = array2[i - array1.length]; 
        }
    }
    return newArray;
}

function join(sep,array){
    let output = ""
    for(let i = 0; i < array.length; i++){
        output = output + array[i] + sep;
    }
    if (output.slice(output.length, output.length + 1) == sep){
        return output
    }
    return output.slice(0, output.length - 1)
}

function max(array){
    let maxNum = array[0];
    for(let i = 0; i < array.length; i++){        
        if(maxNum < array[i]){
            maxNum = array[i];
        }
    }
    return maxNum
}
