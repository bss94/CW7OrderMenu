import React from 'react';


interface Props {
    name: string;
    price:number;
    pic:string;
    OnHandleMenu:React.MouseEventHandler
}
const MenuItem:React.FC<Props> = ({name,price,pic,OnHandleMenu}) => {
    return (
        <button className={'menu-item'} onClick={OnHandleMenu}>
            <img src={pic} alt={'not found'}/>
            <span> {name} </span>
            <span> Price: {price} som</span>
        </button>
    );
};

export default MenuItem;