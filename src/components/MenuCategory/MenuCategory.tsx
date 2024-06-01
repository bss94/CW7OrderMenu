import React from 'react';
import MENU from '../../lib/Food.ts';
import MenuItem from '../MenuItem/MenuItem.tsx';

interface Props{
    category:string;
}
const MenuCategory:React.FC<Props> = ({category}) => {
    return (
        <div>
            <h3>{category}</h3>
            {MENU.filter(item=>item.category===category).map((el,index)=>{
                return <MenuItem name={el.name} pic={el.image} price={el.price} key={String(index+1)+el.name+'OnMenu'}/>
            })}
        </div>
    );
};

export default MenuCategory;