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


interface Food {
    name: string;
    category: string;
    price: number;
    image: string;
}

const MENU: Food[] = [
    {name: 'Chocolate', price: 150, category: 'dessert', image: chocolateImg},
    {name: 'Fruits', price: 100, category: 'dessert', image: fruits},
    {name: 'Waffles', price: 180, category: 'dessert', image: waffles},
    {name: 'Tiramisu', price: 180, category: 'dessert', image: tiramisu},
    {name: 'Espresso', price: 150, category: 'coffee', image: espresso},
    {name: 'Americano', price: 170, category: 'coffee', image: americano},
    {name: 'Cappuccino', price: 200, category: 'coffee', image: cappuccino},
    {name: 'Latte', price: 200, category: 'coffee', image: latte},
    {name: 'Black', price: 80, category: 'tea', image: black},
    {name: 'Green', price: 70, category: 'tea', image: green},
    {name: 'Herbs', price: 100, category: 'tea', image: herbs},


];
export default MENU;