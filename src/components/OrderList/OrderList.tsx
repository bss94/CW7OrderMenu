import React from 'react';
import {OrderPosition} from '../../App.tsx';
import OrderItem from '../OrderItem/OrderItem.tsx';

interface Props{
    order: OrderPosition[]
}
const OrderList:React.FC<Props> = ({order}) => {
    return (
        <div>
            {order.map((el,index)=>{
                if(el.count>0){
                    return <OrderItem name={el.name} count={el.count} key={String(index+1)+el.name+'Order'}/>
                }
            })}
            
        </div>
    );
};

export default OrderList;