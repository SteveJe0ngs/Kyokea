import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import '../css/Styles.css'
import '../css/Analysis.css'

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

    const onClick = () => {
        const spawn = require('child_process').spawn;
        const result = spawn('python3', ['print.py'],);

        result.stdout.on('data', function (data) {
            console.log(data.toString());
        });

        result.stderr.on('data', function (data) {
            console.log(data.toString());
        });
    };

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
                        <p>시험에 대한 나의 선호도(0~150)</p>
                        <input type="text" placeholder="0~150" onChange={onChangeX} />
                        <p>과제에 대한 나의 선호도(0~150)</p>
                        <input type="text" placeholder="0~150" onChange={onChangeY} />
                        <p>팀플에 대한 나의 선호도(0~150)</p>
                        <input type="text" placeholder="0~150" onChange={onChangeZ} />
                        <br />
                        <button className="analysisShadow" onClick={onClick}>
                            F I N D !
                        </button>
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