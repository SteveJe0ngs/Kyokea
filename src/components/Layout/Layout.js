import Footer from "./Footer";
import Header from "./Header";
import '../css/styles.css'
import React from "react";

const Grid = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <div
      style={{
        margin: "50px",
        padding: "50px",
        width: "1400px",
        display: "grid",
        gridTemplateRows: "1fr ",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        backgroundColor: "gray",
        background: "#f1f1f5",
      }}
    >
      {items.map((item, key) => (
        <div
          key={key}
          style={{ margin: "5px", backgroundColor: "white", height: "200px" }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

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