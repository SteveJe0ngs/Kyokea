import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import '../css/Styles.css'
import '../css/Grid.css'

const Grid = () => {
    const items = [
        1, 2, 3, 4, 
        5, 6, 7, 8, 
        9, 10, 11, 12, 
        13, 14, 15, 16, 
        17, 18, 19, 20,
        21, 22, 23, 24,
        25, 26, 27, 28,
        29, 30, 31, 32
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

const Explore = () => {
    return (
        <div className='layout'>
            <Header/>
            <Grid />
            <Footer/>
        </div>
    )
}

export default Explore;