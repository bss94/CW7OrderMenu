import React from 'react';
import MENU from '../../lib/Food.ts';
import trash from '../../assets/trash.svg';

interface Props {
    onHandleOrder:React.MouseEventHandler;
    onHandleDelete:React.MouseEventHandler;
    name: string;
    count: number;
    id: number;
}

const OrderItem: React.FC<Props> = ({
                                        name,
                                        count,
                                        id,
                                        onHandleOrder,
                                        onHandleDelete
                                    }) => {
    return (
        <div className={'order-item'}>
            <span className={'item-name'}> {name} </span>
            <span className={'item-count'}> x{count} </span>
            {MENU
                .filter((item) => id === item.id)
                .map(el => {
                    return <span className={'item-coast'} key={String(el.id) + 'price'}> {el.price * count} </span>;
                })

            }
            <button className={'item-btn'} onClick={onHandleOrder}>-</button>
            <button className={'item-delete'} onClick={onHandleDelete}>
                <img alt={'not found'} src={trash}/>
            </button>
        </div>
    );
};

export default OrderItem;