

const ExternalStockSearchForm = ({handleSearchTerm}) => {
    
    const handleChange = (event) => {
        handleSearchTerm (event.target.value)
    }

    return (
        <>
        <div className="search-container">
            <h2 className="search-title">Add a Stock:</h2>

            <input className="search-bar" type = "text" placeholder= "Search" name="searchedTerm" onChange={handleChange} />
        </div>
        </>
    )

}

export default ExternalStockSearchForm