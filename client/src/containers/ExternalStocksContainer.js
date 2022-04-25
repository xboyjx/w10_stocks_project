import ExternalStockSearchForm from "../components/MyExternalStocks/ExternalStockSearchForm";
import ExternalStockDetail from "../components/MyExternalStocks/ExternalStockDetail";
import { useState, useEffect } from 'react';

const ExternalStocksContainer = () => {

    const [searchedTerm, setSearchedTerm] = useState("")
    

    return (
        <>
        <h1>Potato</h1>
        <ExternalStockSearchForm />
        <ExternalStockDetail />
        </>
    )

}

export default ExternalStocksContainer