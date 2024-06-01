import {useState} from 'react';
import './App.css';
import MenuList from './components/MenuList/MenuList.tsx';
import OrderList from './components/OrderList/OrderList.tsx';


export interface OrderPosition {
    id: number;
    name: string;
    count: number;
}

function App() {
    const [order, setOrder] = useState<OrderPosition[]>([
        {id: 1, name: 'Chocolate', count: 0},
        {id: 2, name: 'Fruits', count: 0},
        {id: 3, name: 'Waffles', count: 0},
        {id: 4, name: 'Tiramisu', count: 0},
        {id: 5, name: 'Espresso', count: 0},
        {id: 6, name: 'Americano', count: 0},
        {id: 7, name: 'Cappuccino', count: 0},
        {id: 8, name: 'Latte', count: 0},
        {id: 9, name: 'Black', count: 0},
        {id: 10, name: 'Green', count: 0},
        {id: 11, name: 'Herbs', count: 0},
    ]);

    const onHandleMenu = (id: number) => {
        setOrder(prevState => {
                return prevState.map((el) => {
                        if (el.id === id) {
                            return {...el, count: el.count++};
                        }else return {...el};
                });
        });
    };
    const onHandleOrder = (id: number) => {
        setOrder(prevState => {
            return prevState.map((el) => {
                if (el.id === id) {
                    return {...el, count: el.count--};
                }else return {...el};
            });
        });
    };

    return (
        <>
            <OrderList order={order} onHandleOrder={onHandleOrder}/>
            <MenuList OnHandleMenu={onHandleMenu}/>
        </>
    );
}

export default App;
