import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import '../css/Styles.css'
import '../css/Detail.css'
import { Link, useParams } from "react-router-dom";
import items from "./items";

const Detail = () => {
    let { name } = useParams();
    
    const x = Math.round(items[name].x * 1000) / 1000;
    const y = Math.round(items[name].y * 1000) / 1000;
    const z = Math.round(items[name].z * 1000) / 1000;
    const next = items[name].min_prof

    return (
        <div className='layout'>
            <Header />
            <div className="title fadein">
                {name} 교수님
            </div>
            <div className="contentsFrame">
                <div className="detailContents">
                    <img src={`/scatters/${name}.png`} alt="3D Convex Hull" />
                    <div className="detailText">
                        <h2>교수 스타일</h2>
                        <br/>
                        <h3>▶ 시험 : {x}</h3>
                        <h3>▶ 과제 : {y}</h3>
                        <h3>▶ 팀플 : {z}</h3>
                        <p className="additionalText">* 해당 수치는 에브리타임의 강의평을 크롤링하여 모은 데이터를 KRwordRank 라이브러리를 활용하여 가중치 분석한 값입니다.</p>
                        <Link to={`/explore/${next}`}><p className="nextButton shadow">이 교수님과 가장 스타일이 비슷한 다른 교수님</p></Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Detail;