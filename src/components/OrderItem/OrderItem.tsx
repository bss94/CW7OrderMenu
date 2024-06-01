import React from 'react';
import MENU from '../../lib/Food.ts';

interface Props {
    onHandleOrder:React.MouseEventHandler
    name: string;
    count: number;
    id: number;
}

const OrderItem: React.FC<Props> = ({
                                        name,
                                        count,
                                        id,
                                        onHandleOrder
                                    }) => {
    return (
        <div onClick={onHandleOrder}>
            <span> {name} </span>
            <span> x{count} </span>
            {MENU
                .filter((item) => id === item.id)
                .map(el => {
                    return <span key={String(el.price+el.id)}> {el.price * count} </span>;
                })
            }
        </div>
    );
};

export default OrderItem;