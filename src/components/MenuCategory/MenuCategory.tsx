import React from 'react';
import MENU from '../../lib/Food.ts';
import MenuItem from '../MenuItem/MenuItem.tsx';

interface Props {
    category: string;
    OnHandleMenu: (id: number) => void;
}

const MenuCategory: React.FC<Props> = ({
                                           category,
                                           OnHandleMenu
                                       }) => {
    return (
        <div className={'menu-category'}>
            <h3>{category}</h3>
            {MENU.filter(item => item.category === category).map((el, index) => {
                return <MenuItem name={el.name}
                                 pic={el.image}
                                 price={el.price}
                                 OnHandleMenu={() => OnHandleMenu(el.id)}
                                 key={String(index + 1) + 'item'}
                />;
            })}
        </div>
    );
};

export default MenuCategory;