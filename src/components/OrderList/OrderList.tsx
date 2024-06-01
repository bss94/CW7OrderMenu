import React from 'react';
import {OrderPosition} from '../../App.tsx';
import OrderItem from '../OrderItem/OrderItem.tsx';

interface Props{
    order: OrderPosition[];
    onHandleOrder:(id:number)=>void;
}
const OrderList:React.FC<Props> = ({order,onHandleOrder}) => {
    return (
        <div>
            {order.map((el,index)=>{
                if(el.count>0){
                    return <OrderItem name={el.name}
                                      count={el.count}
                                      id={el.id}
                                      onHandleOrder={()=>onHandleOrder(el.id)}
                                      key={String(index)+String(el.id)}/>
                }
            })}
            
        </div>
    );
};

export default OrderList;