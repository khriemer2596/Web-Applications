import React from 'react';
import StoreRowData from './StoreRow';

function StoreTableData({stores}) {
    return (
        <table id="stores">
            <caption>Participating store locations</caption>
            <thead>
                <tr>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip</th>
                </tr>
            </thead>
            <tbody>
                {stores.map((store, i) => <StoreRowData store={store} key={i} />)}
            </tbody>
        </table>
    )
}
export default StoreTableData;