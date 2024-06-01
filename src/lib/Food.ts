import chocolateImg from '../assets/chocolate.png';
import fruits from '../assets/fruits.png';
import waffles from '../assets/waffles.png';
import tiramisu from '../assets/tiramisu.png';
import americano from '../assets/americano.png';
import cappuccino from '../assets/cappuccino.png';
import espresso from '../assets/esspresso.png';
import latte from '../assets/latte.png';
import black from '../assets/black.png';
import green from '../assets/green.png';
import herbs from '../assets/herbs.png';


export interface Food {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
}

const MENU: Food[] = [
    {id: 1, name: 'Chocolate', price: 150, category: 'Dessert', image: chocolateImg},
    {id: 2, name: 'Fruits', price: 100, category: 'Dessert', image: fruits},
    {id: 3, name: 'Waffles', price: 180, category: 'Dessert', image: waffles},
    {id: 4, name: 'Tiramisu', price: 180, category: 'Dessert', image: tiramisu},
    {id: 5, name: 'Espresso', price: 150, category: 'Coffee', image: espresso},
    {id: 6, name: 'Americano', price: 170, category: 'Coffee', image: americano},
    {id: 7, name: 'Cappuccino', price: 200, category: 'Coffee', image: cappuccino},
    {id: 8, name: 'Latte', price: 200, category: 'Coffee', image: latte},
    {id: 9, name: 'Black', price: 80, category: 'Tea', image: black},
    {id: 10, name: 'Green', price: 70, category: 'Tea', image: green},
    {id: 11, name: 'Herbs', price: 100, category: 'Tea', image: herbs},


];
export default MENU;