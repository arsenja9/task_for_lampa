import React from 'react';
import Header from "../components/header/Header";
import Home from "../pages/Home";

const MainLayout = () => {
    return (
        <div className='wrapper'>
            <Header/>
            <div className="content">
                <Home/>
            </div>
        </div>
    );
};

export default MainLayout;