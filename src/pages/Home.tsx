import React from 'react';

import Categories from "../components/categories/Categories";
import Sort from "../components/sort/Sort";
import StaffBlock from "../components/staffBlock/StaffBlock";

const Home: React.FC = () => {
    return (
        <div className='container'>
            <div className='content__top'>
                <Categories/>
                <Sort/>
            </div>
            <h2 className='content__title'>Все товары</h2>

            <div className='content__items'>
                <StaffBlock/>
            </div>
        </div>
    );
};

export default Home;