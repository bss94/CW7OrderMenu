import React from 'react';
import CATEGORIES from '../../lib/category.ts';
import MenuCategory from '../MenuCategory/MenuCategory.tsx';


interface Props {
    OnHandleMenu: (id: number) => void;
}

const MenuList: React.FC<Props> = ({OnHandleMenu}) => {
    return (
        <div className={'menu'}>
            {CATEGORIES.map((item, index) => {
                return <MenuCategory OnHandleMenu={OnHandleMenu}
                                     category={item.name}
                                     key={String(index + 1) + 'category'}/>;
            })}

        </div>
    );
};

export default MenuList;