import React from 'react';

import Categories from "../components/categories/Categories";
import StaffBlock from "../components/staffBlock/StaffBlock";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {selectStaffData} from "../redux/staff/selectors";
import {fetchStaff} from "../redux/staff/asyncAction";
import {selectCategory} from "../redux/filter/selectors";
import {setCategoryId} from "../redux/filter/slice";
import Skeleton from "../components/staffBlock/Skeleton";
import {Staff} from "../redux/staff/types";

const Home: React.FC = () => {
    const dispatch = useAppDispatch();

    const categoryId = useAppSelector(selectCategory);
    const {status, items: products} = useAppSelector(selectStaffData);


    const onClickCategory = React.useCallback((id: number | string) => {
        dispatch(setCategoryId(id.toString()));
    }, []);

    React.useEffect(() => {
        const category = categoryId !== 'all' ? `category=${categoryId}` : '';
        const getStaffs = async () => {
            await dispatch(fetchStaff(category));
        };

        getStaffs();
    }, [categoryId]);

    const filteredStaffs = categoryId !== 'all' ? products.filter((obj: any) => obj.category === categoryId) : products;
    const staffs = filteredStaffs.map((obj: Staff) => <StaffBlock key={obj.id} {...obj} />);
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
    return (
        <div className='container'>
            <div className='content__top'>
                <Categories value={categoryId} onClickCategory={onClickCategory}/>
            </div>
            <h2 className='content__title'>Все товары</h2>
            {status === 'error' ? (
                <div className='content_error-info'>
                    <h2>Произошла ошибка 😕</h2>
                    <p>К сожалению, не удалось получить товары. Попробуйте повторить попытку позже.</p>
                </div>
            ) : (
                <div>
                    <div className="content__items">{status === 'loading' ? skeletons : staffs}</div>
                </div>
            )}
        </div>
    );
};

export default Home;
