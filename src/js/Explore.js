import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import '../css/Styles.css'
import '../css/Grid.css'
import { Link } from "react-router-dom";
import items from "./items";

const Grid = () => {
    const item = Object.keys(items);

    return (
        <div className='contentsFrame'>
            <div className='container'>
                {item.map((item) => (
                    <div className='item'>
                        <Link to={`/explore/${item}`}><p className="gridText">{item}</p></Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Explore = () => {
    return (
        <div className='layout'>
            <Header />
            <div className="title fadein">
                <p>EXPLORE</p>
                <p><h2>교수님 스타일 둘러보기</h2></p>
            </div>
            <Grid />
            <Footer />
        </div>
    )
}

export default Explore;