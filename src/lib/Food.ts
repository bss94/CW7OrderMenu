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
    name: string;
    category: string;
    price: number;
    image: string;
}

const MENU: Food[] = [
    {name: 'Chocolate', price: 150, category: 'Dessert', image: chocolateImg},
    {name: 'Fruits', price: 100, category: 'Dessert', image: fruits},
    {name: 'Waffles', price: 180, category: 'Dessert', image: waffles},
    {name: 'Tiramisu', price: 180, category: 'Dessert', image: tiramisu},
    {name: 'Espresso', price: 150, category: 'Coffee', image: espresso},
    {name: 'Americano', price: 170, category: 'Coffee', image: americano},
    {name: 'Cappuccino', price: 200, category: 'Coffee', image: cappuccino},
    {name: 'Latte', price: 200, category: 'Coffee', image: latte},
    {name: 'Black', price: 80, category: 'Tea', image: black},
    {name: 'Green', price: 70, category: 'Tea', image: green},
    {name: 'Herbs', price: 100, category: 'Tea', image: herbs},


];
export default MENU;