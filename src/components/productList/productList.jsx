import './productList.css'
import ProductItem from '../productItem/productItem';
import { useState } from 'react';
import { useTelegram } from '../../hooks/useTelegram';


const products = [
    {id: '1', title: 'Джинсы', price: 5000, description: 'Синий цвет, прямые'},
    {id: '2', title: 'Куртка', price: 12000, description: 'Зеленый цвет, теплая'}
]





const ProductList = () => {

    const [addedItems, setAddedItem] = useState('');

    const {tg} = useTelegram();

    const onAdd = (product) => {
        
        const alreadyAdded = addedItems.find(item => item.id === product.id);

        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id === product.id);
        } else {
            newItems = [...addedItems, product]
        }
        
        
        setAddedItem(newItems)
    }


    return (  
        <div className={'list'}>
            {products.map(item => {
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            })}
        </div>
    );
}
 
export default ProductList;