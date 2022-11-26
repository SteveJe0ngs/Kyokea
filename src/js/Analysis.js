import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import '../css/Styles.css'
import '../css/Analysis.css'

const Analysis = () => {
    return (
        <div className='layout'>
            <Header />
            <div className="title fadein">
                <p>ANALYSIS</p>
                <p><h2>나와 딱 맞는 교수님 찾기</h2></p>
            </div>
            <div className="contentsFrame">
                <div className="analysisContents">
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Analysis;