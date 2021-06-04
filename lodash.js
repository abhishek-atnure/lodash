const _ = {

    clamp: function (number, lower, upper) {
        const lowerClampedValue = Math.max(number, lower);

        const clampedValue = Math.min(lowerClampedValue, upper)
        return clampedValue;
    },

    inRange: function (number, start, end) {
        if (end === undefined) {
            end = start;
            start = 0;
        }
        if (start > end) {
            const temp = end;
            end = start;
            start = temp
        }

        const isInRange = start <= number && number < end;
        return isInRange;

    },

    words: function (string) {
        const words = string.split(' ');
        return words;
    },

    pad: function (string, length) {
        const strLength = string.length;
        if (strLength > length) {
            return string
        }
        const startPaddingLength = Math.floor((length - strLength) / 2);
        const endPaddingLength = length - strLength - startPaddingLength;

        const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
        return paddedString
    },

    has(object, key) {
        const isValuePresent = object[key] !== undefined;
        return isValuePresent
    },

    // invert: function(object){
    //  let invertedObject={};
    //  for(let key in object){
    //    const originalValue=object[key];
    //    invertedObject = { originalValue: key}
    //  }
    //  return  invertedObject;
    // },
    findKey: function (object, func) {
        for (let key in object) {
            const predicateFun = func(object[key]);
            if (predicateFun) {
                return key;
            }
            return undefined
        }
    },
    drop: function (array, numToDrop) {

        if (!numToDrop) {
            numToDrop = 1
        }
        let filteredArray = array.slice(numToDrop, array.length);
        return filteredArray
    },
};




// Do not write or modify code below this line.
module.exports = _;