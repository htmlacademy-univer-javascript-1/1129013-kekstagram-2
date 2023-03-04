function getRandomInt(min, max) {
    if ((max<=min) || (max>=0) || (min>=0) ||  (min==max)) {
        console.log("Wrong min's and max's values")
    } 
    else {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

function checkStringLength (string, maxLength) {
    if (string.length>maxLength) {return false}
    return true
}