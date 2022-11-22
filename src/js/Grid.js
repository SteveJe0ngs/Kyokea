import { BrowserRouter as Router, Link } from 'react-router-dom';
import React from 'react';
import '../css/Grid.css'

const Grid = () => {
    const items = [
        1, 2, 3, 4, 
        5, 6, 7, 8, 
        9, 10, 11, 12, 
        13, 14, 15, 16, 
        17, 18, 19, 20
    ];

    return (
        <div className='cotainerFrame'>
            <div className='container'>
                {items.map((item) => (
                    <div className='item'>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Grid;