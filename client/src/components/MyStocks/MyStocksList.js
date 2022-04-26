import MyStockItem from "./MyStockItem";

const MyStocksList = ({stocks, handleStockSelect, userDetails})  => {

    const stockItems = stocks.map((stock, index) => {
        return <MyStockItem stock={stock} key={index} index={index} handleStockSelect={handleStockSelect} userDetails={userDetails} />
    });

    // const stockValues = stocks.map(({values}) => {values[0].close})
    let stockValues = []
    for(let i = 0; i<stocks.length; i++){
        // console.log(stocks[i])
        stockValues.push(stocks[i].values[0].close)
    }

    const numberHeld = userDetails[0].stocksHeld.map(({noHeld}) => (noHeld))

    let totalVal = 0
    for(let i = 0; i<numberHeld.length; i++){
        let runner = 0
        runner = numberHeld[i]*stockValues[i]
        totalVal = totalVal+ runner
    }

    return(
        <div className="my-stocks-list">
            <h2>Total value: {totalVal} </h2>
            <table className="table">
                <tr>
                    <th>Stock</th>
                    <th>Amount</th>
                    <th>Price</th>
                    <th>Holding Value</th>
                </tr>
                {stockItems}
            </table>
        </div>
    )
}

export default MyStocksList;