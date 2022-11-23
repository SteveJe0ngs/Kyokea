import Footer from "./Footer";
import Header from "./Header";
import '../css/Main.css'
import React from "react";
import Grid from "./Grid";

const Layout = () => {
    return (
        <div className='layout'>
            <Header/>
            <Grid />
            <Footer/>
        </div>
    )
}

export default Layout;