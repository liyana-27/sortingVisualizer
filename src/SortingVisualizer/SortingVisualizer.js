import React from 'react';
import './SortingVisualizer.css'
import getMergeSortAlgorithm from '../SortingAlgorithms/mergeSortAlgorithms';
import getbubbleSortAlgorithm from '../SortingAlgorithms/bubbleSortAlgorithms';
import getQuickSortAlgorithm from '../SortingAlgorithms/quickSortAlgorithms';
import NavBar from '../NavBar/NavBar';

export default class SortingVisualizer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            isSorting: false,
            selectedAlgorithm: null, 
            algorithmInfo: [],
        };
    }
    
    componentDidMount() {
        this.resetArray();
    }

    resetArray = () => {
        if (this.state.isSorting) return;
        const array = [];
        const arrayBars = document.getElementsByClassName('array-bar');
        for (let i=0; i<100; i++) {
            array.push(randomIntfromInterval(5,550));
        }
        for (let i = 0; i < arrayBars.length; i++) {
            const barStyle = arrayBars[i].style;
            barStyle.backgroundColor = 'black';
        }
        this.setState({ array, isSorting: false, selectedAlgorithm: null, algorithmInfo: [] });
    }

    selectAlgorithm = (algorithm) => {
        let info = [];
        if (algorithm === 'mergeSort') {
            info = [
                'This is a sorting algorithm that follows the divide-and-conquer approach.',
                'It works by recursively dividing the input array into smaller subarrays and sorting those subarrays then merging them back together to obtain the sorted array.',
                'In this, ',
                'Divide: Divide the list or array recursively into two halves until it can no more be divided.',
                'Conquer: Each subarray is sorted individually using the merge sort algorithm.',
                'Merge: The sorted subarrays are merged back together in sorted order. The process continues until all elements from both subarrays have been merged.',
                'Time Complexity: O(nlogn)',
                'Auxiliary Space: O(n)'
            ];
        } else if (algorithm === 'quickSort') {
            info = [
                'This algorithm is based on the Divide and Conquer algorithm.',
                'It picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.',
                'In this, ',
                'The key process in quickSort is a partition().',
                'The target of partitions is to place the pivot (any element can be chosen to be a pivot) at its correct position in the sorted array and put all smaller elements to the left of the pivot, and all greater elements to the right of the pivot.',
                'Partition is done recursively on each side of the pivot after the pivot is placed in its correct position and this finally sorts the array.',
                'Time Complexity: O(nlogn)',
                'Auxiliary Space: O(1)'
            ];
        } else if (algorithm === 'bubbleSort') {
            info = [
                'This is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order.',
                'This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.',
                'In this, ',
                'The array is traversed from left and adjacent elements are compared and the higher one is placed to the right.',
                'n this way, the largest element is moved to the rightmost end at first.',
                'This process is then continued to find the second largest and place it and so on until the data is sorted.',
                'Time Complexity: O(n^2)',
                'Auxiliary Space: O(1)'
            ];
        }
        this.setState({ selectedAlgorithm: algorithm, algorithmInfo: info });
    }

    startSorting = () => {
        const {selectedAlgorithm} = this.state;
        if (selectedAlgorithm) {
            console.log('Sorting Started');
            this.setState({ isSorting: true }, () => {
                if (selectedAlgorithm === 'mergeSort') {
                    this.mergeSort();
                }
                if (selectedAlgorithm === 'bubbleSort') {
                    this.bubbleSort();
                }
                if (selectedAlgorithm === 'quickSort') {
                    this.quickSort();
                }
            })
        }
    }

    mergeSort = () => {
        const animations = getMergeSortAlgorithm(this.state.array);
        const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < animations.length; i++) {
            const [barOneIdx, barTwoOrHeight, type] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            if (type === 'compare') {
                const barTwoStyle = arrayBars[barTwoOrHeight].style;
                const color = i % 3 === 0 ? 'darkred' : 'grey';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 10);
            } else if (type === 'merge') {
                setTimeout(() => {
                    const newHeight = barTwoOrHeight
                    barOneStyle.height = `${newHeight}px`;
                }, i * 10);
            }
            barOneStyle.backgroundColor = 'grey';
        }
        setTimeout(() => {
            for (let i = 0; i < arrayBars.length; i++) {
                const barStyle = arrayBars[i].style;
                barStyle.backgroundColor = 'green';
            }
            this.setState({ isSorting: false });
        }, animations.length * 10);
    }    

    quickSort = () => {
        const animations = getQuickSortAlgorithm(this.state.array);
        const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < animations.length; i++) {
            const [barOneIdx, barTwoOrHeight, type] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            if (type === 'compare') {
                const barTwoStyle = arrayBars[barTwoOrHeight].style;
                const color = i % 4 === 0 ? 'darkred' : 'grey';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 10);
            } else if (type === 'swap') {
                setTimeout(() => {
                    const newHeight = barTwoOrHeight;
                    barOneStyle.height = `${newHeight}px`;
                }, i * 10);
            }
        }
        setTimeout(() => {
            for (let i = 0; i < arrayBars.length; i++) {
                const barStyle = arrayBars[i].style;
                barStyle.backgroundColor = 'green';
            }
            this.setState({ isSorting: false });
        }, animations.length * 10);
    }

    bubbleSort = () => {
        const animations = getbubbleSortAlgorithm(this.state.array);
        const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < animations.length; i++) {
            const [barOneIdx, barTwoOrHeight, type] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            if (type === 'compare') {
                const barTwoStyle = arrayBars[barTwoOrHeight].style;
                const color = i % 4 === 0 ? 'darkred' : 'grey';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 10);
            } else if (type === 'swap') {
                setTimeout(() => {
                    const newHeight = barTwoOrHeight;
                    barOneStyle.height = `${newHeight}px`;
                }, i * 10);
            }
        }
        setTimeout(() => {
            for (let i = 0; i < arrayBars.length; i++) {
                const barStyle = arrayBars[i].style;
                barStyle.backgroundColor = 'green';
            }
            this.setState({ isSorting: false });
        }, animations.length * 10);
    }

    // testingAlgorithms() {
    //     for (let i=0; i<100; i++) {
    //         const array = [];
    //         const length = randomIntfromInterval(1,1000);
    //         for (let i = 0; i < length; i++) {
    //             array.push(randomIntfromInterval(-1000,1000));
    //         }
    //         const DefaultSortedArray = this.state.array.slice().sort((a, b) => a - b);
    //         const sortedArray = getQuickSortAlgorithm(this.state.array);
    //         console.log(compareTwoArrays(DefaultSortedArray, sortedArray));
    //     }
    // }

    render() {
        const{array, algorithmInfo, selectedAlgorithm } = this.state;
        return (
            <>
                <NavBar
                    onReset={this.resetArray}
                    onMergeSort={() => this.selectAlgorithm('mergeSort')}
                    onBubbleSort={() => this.selectAlgorithm('bubbleSort')}
                    onQuickSort={() => this.selectAlgorithm('quickSort')}
                    // onTest={this.testingAlgorithms}
                    onStart={this.startSorting}
                    isSorting={this.state.isSorting}
                />
                <body>
                    <div class="container">
                        <div class="text-section">
                        <p className="headerClass"><strong>{selectedAlgorithm ? selectedAlgorithm.charAt(0).toUpperCase() + selectedAlgorithm.slice(1) : ''}</strong></p>
                        <ul className="info-text">
                            {algorithmInfo.map((info, index) => (
                                <li key={index}>{info}</li>
                            ))}
                        </ul>
                        </div>
                        <div className = "visualisation-section">
                            <div className = "array-container">
                            {array.map((value, idx) => (
                                <div className="array-bar" key={idx} style={{height: `${value}px`}}>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </body>
            </>
        );
    }
}

function randomIntfromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) +min);
}

// function compareTwoArrays(arrayOne, arrayTwo) {
//     if (arrayOne.length !== arrayTwo.length) return false;
//     for (let i = 0; i < arrayOne.length; i++) {
//         if (arrayOne[i] !== arrayTwo[i]) return false;
//     }
//     return true;
// }