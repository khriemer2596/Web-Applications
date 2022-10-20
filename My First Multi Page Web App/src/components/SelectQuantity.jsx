import React, {useState} from 'react';
import {MdAdd, MdRemove} from 'react-icons/md';

function SelectQuantity() {
    const [currentQuantity, setQuantity] = useState(0)

    const dec = () => setQuantity(currentQuantity === 0 ? 0 : currentQuantity - 1)
    const inc = () => setQuantity(currentQuantity === 10 ? currentQuantity : 1 + currentQuantity)

    return(
        <div class="total">
            <MdRemove onClick={dec} />
            <span class="quantity">{currentQuantity}</span>
            <MdAdd onClick={inc} />
        </div>
    )
}
export default SelectQuantity