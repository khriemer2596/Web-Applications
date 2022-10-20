import React from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';
import SelectQuantity from './SelectQuantity'

function GroceryRowData({item}) {
    return (
        <tr>
            <td>{item.name}</td>
            <td>${item.price}</td>
            <td><SelectQuantity /></td>
        </tr>
    )
}
export default GroceryRowData;