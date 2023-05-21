import React from 'react';
import {Link} from "react-router-dom";

// @ts-ignore
import cartEmpty from '../../assets/img/empty-cart.png'

const CartEmpty: React.FC = () => {
    return (
        <div className='cart cart--empty'>
            <h2>
                Корзина пустая <span>😕</span>
            </h2>
            <p>
                Вероятней всего, вы не заказывали ещё товар.
                <br />
                Для того, чтобы заказать товар, перейди на главную страницу.
            </p>
            <img src={cartEmpty} alt="Empty cart"/>
            <Link to='/' className='button button--black'>
                <span>Вернуться назад</span>
            </Link>
        </div>
    );
};

export default CartEmpty;