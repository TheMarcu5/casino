import { useEffect } from "react";


function Currencies({studios, setFilteredStudios, setSelectedCurrency, selectedCurrency}){

    useEffect(() => {

        
        const filtered = studios.filter((studio) =>
           studio.blockedCurrencies ? !studio.blockedCurrencies.includes(selectedCurrency) : studio
           
        );

            setFilteredStudios(filtered);
        

    },[selectedCurrency, studios]);

    return (
        <div>
            <select id='selectCurrency' value={selectedCurrency} onChange={(e) => setSelectedCurrency(e.target.value)}>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="mBTC">mBTC</option>
            </select>
        </div>
      );

}


export default Currencies;


