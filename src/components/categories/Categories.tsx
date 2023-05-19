import React from 'react';


const categories = ['all', 'smartphones', 'laptops', 'fragrances', 'skincare', 'groceries', 'home-decoration'];
const Categories: React.FC = () => {
    return (
        <div className='categories'>
            <ul>
                {
                    categories.map((category, i) => (
                        <li>
                            {category}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Categories;