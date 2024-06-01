import React from 'react';
import MENU from '../../lib/Food.ts';

interface Props {
    name: string;
    count: number;
}

const OrderItem: React.FC<Props> = ({
                                        name,
                                        count
                                    }) => {
    return (
        <div>
            <span> {name} </span>
            <span> x{count} </span>
            {MENU
                .filter((item) => name === item.name)
                .map(el => {
                    return <span> {el.price * count} </span>;
                })
            }
        </div>
    );
};

export default OrderItem;