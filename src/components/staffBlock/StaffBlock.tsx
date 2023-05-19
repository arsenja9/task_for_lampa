import React from 'react';

const StaffBlock: React.FC = () => {
    return (
        <div className='staff-block-wrapper'>
            <div className="staff-block">
                <div className="staff-block__image">
                    <img src="https://i.dummyjson.com/data/products/1/3.jpg" alt="iphone"
                         className='pizza-block__image'/>
                </div>
                <h4 className='staff-block__title'>Apple: iPhone 9</h4>
                <div className='staff-block__descr'>
                    An apple mobile which is nothing like apple
                </div>
                <div className="staff-block__bottom">
                    <div className="staff-block__price">от 550 $</div>
                    <button className="button button--outline button--add">
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StaffBlock;