import React from 'react';
import './NavBar.css';

const NavBar = ({ onReset, onMergeSort, onBubbleSort, onQuickSort, onStart, isSorting }) => {
    return (
        <nav className = "navbar">
            <button onClick={onReset} disabled={isSorting}>Generate New Array</button>
            <button onClick={onMergeSort} disabled={isSorting}>Merge Sort</button>
            <button onClick={onBubbleSort} disabled={isSorting}>Bubble Sort</button>
            <button onClick={onQuickSort} disabled={isSorting}>Quick Sort</button>
            {/* <button onClick={onTest} disabled={isSorting}>Test Sorting Algorithms</button> */}
            <button onClick={onStart} disabled={isSorting} className = "sort">Start Sorting!</button>
        </nav>
    );
};

export default NavBar;