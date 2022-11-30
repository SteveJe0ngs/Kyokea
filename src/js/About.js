import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import '../css/Styles.css'
import '../css/About.css'

const About = () => {
    return (
        <div className='layout'>
            <Header />
            <div className="title fadein">
                <p>ABOUT</p>
                <p><h2>알고리즘 1조 - 건우 없는 건우 팀</h2></p>
            </div>
            <div className="contentsFrame">
                <div className="aboutContents">
                    <div className="aboutPerson">
                        <h1>박정수</h1>
                        <h2>프론트 엔드 & 웹 개발</h2>
                        <p>----------------------------</p>
                        <img src="박정수.png" alt="박정수" />
                    </div>
                    <div className="aboutPerson">
                        <h1>안정후</h1>
                        <h2>백 엔드 & NLP 가중치 분석</h2>
                        <p>----------------------------</p>
                        <img src="아몬드.png" alt="안정후" />
                    </div>
                    <div className="aboutPerson">
                        <h1>윤태현</h1>
                        <h2>웹 크롤링 & 데이터 마이닝</h2>
                        <p>----------------------------</p>
                        <img src="윤태현.png" alt="윤태현" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;