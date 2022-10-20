import React from 'react';
import GroceryRowData from './GroceryRow';


function GroceryTableData({items, quantity}) {
    return (
        <table id="grocerytable">
            <caption>Choose the item/quantity you wish to purchase</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, i) => <GroceryRowData item={item} key={i} />)}
            </tbody>
        </table>
    )
}
export default GroceryTableData;