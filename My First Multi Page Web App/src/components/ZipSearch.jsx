import React, {useState} from 'react';

function ZipSearch() {
    const [zip, setZip] = useState('')

    return (
        <form action='' method=''>
            <fieldset>
                <legend>Search for the desired zip code:</legend>
                <label for="zipcode">Zip Code: </label>
                    <input type="text" value={zip} id="zipcode" name="zipcode" size="5" maxLength="5" placeholder="#####" onChange={e => setZip(e.target.value)} />
                <label for="alert">
                    <button name="alertbutton" onClick={e => {alert(`The zip you have entered is ${zip}.`); e.preventDefault()}}>Submit</button>
                </label>            
            </fieldset>
        </form>
    )
}
export default ZipSearch