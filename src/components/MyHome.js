import React from "react";
import MyTable from "./MyTable";
import './MyHome.css'

function MyHome () {
    return (
        <>
        <h3 className="student">Student Directory</h3>
        <MyTable/>
        </>  
    );
}

export default MyHome;