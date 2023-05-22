import React from 'react';
import {useDispatch} from "react-redux";
import {addItem, calculateTotalPrice, minusItem, removeItem} from "../../redux/cart/slice";
import {CartItem} from "../../redux/cart/types";
import CartEmpty from "../cartEmpty/CartEmpty";

type CartItemProps = {
    id: number;
    title: string;
    description: string;
    price: number;
    brand: string;
    count: number;
    thumbnail: string;
};

const CartItemBlock: React.FC<CartItemProps> = ({
                                                    id,
                                                    count,
                                                    brand,
                                                    description,
                                                    price,
                                                    thumbnail,
                                                    title,
                                                }) => {
    const dispatch = useDispatch();

    const onClickPlus = () => {
        dispatch(addItem({id} as CartItem));
    };

    const onClickMinus = () => {
        dispatch(minusItem(id));
        dispatch(calculateTotalPrice())
    };

    if (count === 0) {
        dispatch(removeItem(id));
    }


    return (

        <div>
            {count === 0 ? (<CartEmpty/>) : (
                <div className="cart__item">
                    <div className="cart__item-img">
                        <img className="staff-block__image" src={thumbnail} alt="Staff"/>
                    </div>
                    <div className="cart__item-info">
                        <h3>
                            {title}: {brand}
                        </h3>
                        <p>{description}</p>
                    </div>
                    <div className="cart__item-count">
                        <button
                            onClick={onClickMinus}
                            className="button button--outline button--circle cart__item-count-minus"
                        >
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.92 3.84V5.76V8.64C5.92 9.17016 5.49017 9.6 4.96 9.6C4.42984 9.6 4 9.17016 4 8.64L4 5.76L4 3.84V0.96C4 0.42984 4.42984 0 4.96 0C5.49017 0 5.92 0.42984 5.92 0.96V3.84Z"
                                    fill="#EB5A1E"
                                ></path>
                                <path
                                    d="M5.76 5.92L3.84 5.92L0.96 5.92C0.42984 5.92 0 5.49017 0 4.96C0 4.42984 0.42984 4 0.96 4L3.84 4L5.76 4L8.64 4C9.17016 4 9.6 4.42984 9.6 4.96C9.6 5.49017 9.17016 5.92 8.64 5.92L5.76 5.92Z"
                                    fill="#EB5A1E"
                                ></path>
                            </svg>
                        </button>
                        <b>{count}</b>
                        <button
                            onClick={onClickPlus}
                            className="button button--outline button--circle cart__item-count-plus"
                        >
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.92 3.84V5.76V8.64C5.92 9.17016 5.49017 9.6 4.96 9.6C4.42984 9.6 4 9.17016 4 8.64L4 5.76L4 3.84V0.96C4 0.42984 4.42984 0 4.96 0C5.49017 0 5.92 0.42984 5.92 0.96V3.84Z"
                                    fill="#EB5A1E"
                                ></path>
                                <path
                                    d="M5.76 5.92L3.84 5.92L0.96 5.92C0.42984 5.92 0 5.49017 0 4.96C0 4.42984 0.42984 4 0.96 4L3.84 4L5.76 4L8.64 4C9.17016 4 9.6 4.42984 9.6 4.96C9.6 5.49017 9.17016 5.92 8.64 5.92L5.76 5.92Z"
                                    fill="#EB5A1E"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div className="cart__item-price">
                        <b>{price * count} $</b>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartItemBlock;
