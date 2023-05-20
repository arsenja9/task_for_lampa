import React from 'react';

import Categories from "../components/categories/Categories";
import StaffBlock from "../components/staffBlock/StaffBlock";
import {useAppDispatch} from "../redux/store";
import {useSelector} from "react-redux";
import {selectStaffData} from "../redux/staff/selectors";
import {fetchStaff} from "../redux/staff/asyncAction";
import {selectCategory} from "../redux/filter/selectors";
import {setCategoryId} from "../redux/filter/slice";

const Home: React.FC = () => {
    const dispatch = useAppDispatch();

    const categoryId = useSelector(selectCategory);
    const {status, items} = useSelector(selectStaffData);
    // @ts-ignore
    const products = items?.products || [];

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
    const staffs = filteredStaffs.map((obj: any) => <StaffBlock key={obj.id} {...obj} />);

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
                    <div className="content__items">{status === 'loading' ? null : staffs}</div>
                </div>
            )}
        </div>
    );
};

export default Home;
