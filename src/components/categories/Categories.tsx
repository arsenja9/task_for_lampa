import React from 'react';

type CategoriesProps = {
    value: string
    onClickCategory: (category: string) => void
}

const categories = ['all', 'smartphones', 'laptops', 'fragrances', 'skincare', 'groceries', 'home-decoration'];

const Categories: React.FC<CategoriesProps> = React.memo(
    ({value, onClickCategory}) => {

        return (
            <div className="categories">
                <ul>
                    {
                        categories.map((category, i) => (
                            <li
                                key={i}
                                onClick={() => onClickCategory(category)}
                                className={value === category ? 'active' : ''}>
                                {category}
                            </li>
                        ))}
                </ul>
            </div>
        )
    }
)

export default Categories;
