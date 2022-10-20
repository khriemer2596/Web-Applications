import React from 'react';
import { DefaultContext } from 'react-icons';
import GroceryTableData from '../components/GroceryTable';

function OrderPage({item}) {
    return (
        <article>
            <h2>You are now on the Kevin's Korner Order page.</h2>
            <p>Use this page to order any groceries you would like!</p>
            <GroceryTableData items={item} />
        </article>
    )
}
export default OrderPage;