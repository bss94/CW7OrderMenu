import {useState} from 'react';
import './App.css';
import MenuList from './components/MenuList/MenuList.tsx';
import OrderList from './components/OrderList/OrderList.tsx';


export interface OrderPosition {
    name: string;
    count: number;
}

function App() {
    const [order, setOrder] = useState<OrderPosition[]>([
        {name: 'Chocolate', count: 0},
        {name: 'Fruits', count: 0},
        {name: 'Waffles', count: 0},
        {name: 'Tiramisu', count: 0},
        {name: 'Espresso', count: 0},
        {name: 'Americano', count: 0},
        {name: 'Cappuccino', count: 0},
        {name: 'Latte', count: 0},
        {name: 'Black', count: 0},
        {name: 'Green', count: 0},
        {name: 'Herbs', count: 0},
    ]);


    return (
        <>
            <OrderList order={order}/>
            <MenuList/>
        </>
    );
}

export default App;
