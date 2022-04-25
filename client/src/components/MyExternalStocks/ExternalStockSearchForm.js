

const ExternalStockSearchForm = ({handleSearchTerm}) => {
    
    const handleChange = (event) => {
        handleSearchTerm (event.target.value)
    }

    return (
        <>
        <h2>External Stock Search Form</h2>

        <input type = "text" placeholder= "Search" name="searchedTerm" onChange={handleChange} />

        </>
    )

}

export default ExternalStockSearchForm