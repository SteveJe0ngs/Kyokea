import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import '../css/Styles.css'
import '../css/Grid.css'
import { Link } from "react-router-dom";

const Grid = () => {
    const items = [
        '김동호', '김미량', '김은우', '김재광', 
        '김재현', '노진아', '레이하트만', '류은석', 
        '민무홍', '박천수', '안성진', '양정아', 
        '유철', '윤상운', '전대석', '제프리모지즈', 
        '조디바론', '토머스존', '한신일', '한옥영', 
        '황숙희'];

    return (
        <div className='containerFrame'>
            <div className='container'>
                {items.map((item) => (
                    <div className='item'>
                        <Link to={`/explore/${item}`}><p>{item}</p></Link>
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