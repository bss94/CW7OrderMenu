import React from 'react';


interface Props {
    name: string;
    price:number;
    pic:string;
}
const MenuItem:React.FC<Props> = ({name,price,pic}) => {
    return (
        <button className={'menu-item'}>
            <img src={pic} alt={'not found'}/>
            <span> {name} </span>
            <span> Price: {price} som</span>
        </button>
    );
};

export default MenuItem;