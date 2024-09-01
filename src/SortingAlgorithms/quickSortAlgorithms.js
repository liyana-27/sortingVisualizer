import React from 'react'

function getQuickSortAlgorithm(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  quickSortHelper(auxiliaryArray, 0, auxiliaryArray.length - 1, animations);
  return animations;
}

function quickSortHelper(array, startIdx, endIdx, animations) {
    if (startIdx < endIdx) {
        const part = partition(array, startIdx, endIdx, animations);
        quickSortHelper(array, startIdx, part - 1, animations);
        quickSortHelper(array, part + 1, endIdx, animations);
    }
}

function partition(array, startIdx, endIdx, animations) {
    const pivot = array[endIdx];
    let i = startIdx - 1;
    for (let j = startIdx; j < endIdx; j++) {
        animations.push([j, endIdx, 'compare']);
        animations.push([j, endIdx, 'compare']);
        if (array[j] < pivot) {
            i++;
            let temp = array[i];
            animations.push([i, array[j], 'swap']);
            array[i] = array[j];
            animations.push([j, temp, 'swap']);
            array[j] = temp;
        }
    }
    let temp = array[i+1];
    animations.push([i+1, array[endIdx], 'swap']);
    array[i+1] = array[endIdx];
    animations.push([endIdx, temp, 'swap']);
    array[endIdx] = temp;
    return i + 1;
}

export default getQuickSortAlgorithm;