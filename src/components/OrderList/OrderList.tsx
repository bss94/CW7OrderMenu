import React from 'react';
import {OrderPosition} from '../../App.tsx';
import OrderItem from '../OrderItem/OrderItem.tsx';
import MENU from '../../lib/Food.ts';

interface Props {
    order: OrderPosition[];
    onHandleOrder: (id: number) => void;
    onHandleDelete: (id: number) => void;
}

const OrderList: React.FC<Props> = ({order, onHandleOrder, onHandleDelete}) => {
    const getTotalPrice = () => {
        return order.reduce((acc, rec, index) => {
            if (rec.id === MENU[index].id) {
                return acc + rec.count * MENU[index].price;
            } else {
                return acc;
            }
        }, 0);
    };

    return (
        <div className={'order-list'}>
            <div className={'items'}>
                {order.filter(item => item.count > 0).length !== 0 ?
                    order.map((el, index) => {
                        if (el.count > 0) {
                            return <OrderItem name={el.name}
                                              count={el.count}
                                              id={el.id}
                                              onHandleOrder={() => onHandleOrder(el.id)}
                                              onHandleDelete={() => onHandleDelete(el.id)}
                                              key={String(index) + 'order'}/>;
                        }
                    })
                    : <h4>Click on menu position to add to your order</h4>
                }
            </div>
            <p className={'total-price'}>Total: {getTotalPrice()}</p>

        </div>
    );
};

export default OrderList;