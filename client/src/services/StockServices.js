const baseURL = 'http://localhost:9000/api/userStocks/'

const StockService = {
    get userStocks() {
        return fetch(baseURL)
        .then(res => res.json());
    },

    addStock() {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify()
            .then(res => res.json())
        })
    },

    updateUserDetails(user) {
        return fetch(baseURL + user._id, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers:{
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
        
    },

    deleteStock(id) {
        return fetch(baseURL + id, {
            method: 'DELETE'
        })
    }

}

export default StockService