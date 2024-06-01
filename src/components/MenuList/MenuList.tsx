import React from 'react';
import CATEGORIES from '../../lib/category.ts';
import MenuCategory from '../MenuCategory/MenuCategory.tsx';



interface Props{

}
const MenuList:React.FC<Props>= () => {
    return (
        <div className={'menu'}>
            {CATEGORIES.map((item)=>{
                return <MenuCategory category={item.name}/>
            })}
            
        </div>
    );
};

export default MenuList;