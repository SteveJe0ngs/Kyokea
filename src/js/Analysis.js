import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import '../css/Styles.css'
import '../css/Analysis.css'
import { Link } from "react-router-dom";

const Analysis = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [z, setZ] = useState(0);

    const onChangeX = (e) => {
        setX(e.target.value);
    };

    const onChangeY = (e) => {
        setY(e.target.value);
    };

    const onChangeZ = (e) => {
        setZ(e.target.value);
    };

    // const export2txt = () => {
    //     const originalData = {
    //         members: [{
    //             value: x,
    //         },
    //         {
    //             value: y
    //         },
    //         {
    //             value: z
    //         }
    //         ]
    //     };
    
    //     const a = document.createElement("a");
    //     a.href = URL.createObjectURL(new Blob([JSON.stringify(originalData, null, 2)], {
    //         type: "text/plain"
    //     }));
    //     a.setAttribute("download", "data.txt");
    //     document.body.appendChild(a);
    //     a.click();
    //     document.body.removeChild(a);
    // }

    return (
        <div className='layout'>
            <Header />
            <div className="title fadein">
                <p>ANALYSIS</p>
                <p><h2>나와 딱 맞는 교수님 찾기</h2></p>
            </div>
            <div className="contentsFrame">
                <div className="analysisContents">
                    <div className="analysisInput">
                        <p>▶ 시험에 대한 나의 선호도(0~150)</p>
                        <input type="text" placeholder="0~150" onChange={onChangeX} />
                        <p>▶ 과제에 대한 나의 선호도(0~150)</p>
                        <input type="text" placeholder="0~150" onChange={onChangeY} />
                        <p>▶ 발표에 대한 나의 선호도(0~150)</p>
                        <input type="text" placeholder="0~150" onChange={onChangeZ} />
                        <br />
                        <Link to={"/analysis/result"}>
                        <p className="analysisButton analysisShadow">F I N D !</p>
                        </Link>
                    </div>
                    <div className="analysisResult">
                        <p>X값: {x}</p>
                        <p>Y값: {y}</p>
                        <p>Z값: {z}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Analysis;