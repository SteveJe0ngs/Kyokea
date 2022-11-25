import Footer from "./Footer";
import Header from "./Header";
import '../css/Styles.css'
import '../css/Main.css'
import React from "react";
import mainImgae from "../image/LandingPage.gif"
import { Link } from "react-router-dom";

const Main = () => {
    return (
        <div className="main">
            <div className="mainText">
                <p><h2>당신의 교수를 디자인하세요.</h2></p>
                <p><h1 className="shadow">" 교케아 "</h1></p>
                <br/>
                <p>학습자 분석의 시대는 가라!</p>
                <p>이제 교수자 분석의 시대가 왔다.</p>
                <br/>
                <p>당신 스타일에 맞는 교수를</p>
                <p>내 마음대로 찾고 선택해보세요.</p>
                <br/>
                <Link to={"/explore"}><p className="mainButton shadow">교수님 스타일 둘러보기</p></Link>
                <Link to={"/analysis"}><p className="mainButton shadow">나와 딱 맞는 교수님 찾기</p></Link>
            </div>
            <img src={mainImgae} alt="Main Image" />
        </div>
    )
}


const LandingPage = () => {
    return (
        <div className='layout'>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default LandingPage;