import React from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';

function StoreRowData({store}) {
    return (
        <tr>
            <td>{store.city}</td>
            <td>{store.state}</td>
            <td>{store.zipCode}</td>
        </tr>
    )
}
export default StoreRowData