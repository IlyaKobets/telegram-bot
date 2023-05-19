import './productList.css'
import React from 'react';
import { useState, useEffect } from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import Header from '../header/header';
import ProductItem from './../productItem/productItem'



const products = [
    {id: '1', title: 'Джинсы', price: 5000, description: 'Синий цвет, прямые'},
    {id: '2', title: 'Куртка', price: 12000, description: 'Зеленый цвет, теплая'}
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}


const ProductList = () => {

    
    

    const [addedItems, setAddedItem] = useState([]);

    const {tg} = useTelegram();



    const onAdd = (product) => {
        
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product]
        }

        setAddedItem(newItems)



        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `привет ${getTotalPrice(newItems)}`
            })
        }

    }


    return (  
        <div>
            <Header/>
            <div>{addedItems.id}</div>

            <div className={'list'}>
            

                {products.map(item => (
                    <ProductItem
                        product={item}
                        onAdd={onAdd}
                        className={'item'}
                    />
                ))}
            </div>            
        </div>
    );
}
 
export default ProductList;