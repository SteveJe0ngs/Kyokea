import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import '../css/Styles.css'
import '../css/Analysis.css'
import user from '../python/output/jsons/user.json';
import items from "./items";
import { Link } from "react-router-dom";
import resultImage from "../python/output/frames/output.png";

const Result = () => {
    const name = user["user"]["min_prof"];
    const d = user["user"]["max_d"];
    const x = Math.round(items[name].x * 1000) / 1000;
    const y = Math.round(items[name].y * 1000) / 1000;
    const z = Math.round(items[name].z * 1000) / 1000;

    return (
        <div className='layout'>
            <Header />
            <div className="title">
                <p>ANALYSIS</p>
                <p><h2>나와 딱 맞는 교수님 찾기</h2></p>
            </div>
            <div className="contentsFrame">
                <div className="analysisContents">
                    <img src={resultImage} alt="3D Convex Hull" />
                    <div className="analysisText">
                        <h2>당신과 가장 스타일이 비슷한 교수님은..</h2>
                        <h1> '{name}' 교수님</h1>
                        <br /><br />
                        <h2>나와 교수의 스타일 거리</h2>
                        <h3>{d}</h3>
                        <br />
                        <h2>교수 스타일</h2>
                        <h3>▶ 시험 : {x}</h3>
                        <h3>▶ 과제 : {y}</h3>
                        <h3>▶ 발표 : {z}</h3>
                        <br />
                        <Link to={'/analysis'}><p className="nextButton shadow">이전 화면</p></Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Result;