import React from 'react'

function getbubbleSortAlgorithm(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    bubbleSortHelper(auxiliaryArray, 0, auxiliaryArray.length - 1, animations);
    return animations;
}

function bubbleSortHelper(array, startIdx, endIdx, animations) {
    let i, j, temp;
    for (i = 0; i <= endIdx; i++) {
        let swapped = false;
        for (j = 0; j < endIdx - i; j++) {
            animations.push([j, j + 1, 'compare']);
            animations.push([j, j + 1, 'compare']);
            if (array[j] > array[j + 1]) {
                temp = array[j];
                animations.push([j, array[j + 1], 'swap']);    
                array[j] = array[j+1];
                animations.push([j + 1, temp, 'swap']);
                array[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break;
    }
}

export default getbubbleSortAlgorithm; 