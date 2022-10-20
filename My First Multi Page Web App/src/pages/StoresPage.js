import React from 'react';
import { DefaultContext } from 'react-icons';
import StoreTable from '../components/StoreTable';
import ZipSearch from '../components/ZipSearch';

function StoresPageData({stores}) {
    return (
        <article>
            <h2>You are now on the Kevin's Korner Stores page.</h2>
            <p>Use this page to search for stores near your zip code.</p>
            <StoreTable stores={stores} />
            <ZipSearch />
        </article>
    )
}
export default StoresPageData