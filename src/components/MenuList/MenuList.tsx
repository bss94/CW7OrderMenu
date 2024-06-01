import React from 'react';
import CATEGORIES from '../../lib/category.ts';
import MenuCategory from '../MenuCategory/MenuCategory.tsx';



interface Props{

}
const MenuList:React.FC<Props>= () => {
    return (
        <div className={'menu'}>
            {CATEGORIES.map((item,index)=>{
                return <MenuCategory category={item.name} key={String(index+1)+item.name}/>
            })}
            
        </div>
    );
};

export default MenuList;