const baseURL = 'http://localhost:9000/api/stocks/'

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

    updateBooking() {
        return fetch(baseURL + booking._id, {
            method: 'PUT',
            body: JSON.stringify()
            .then(res => res.json())
        })
    },

    deleteBooking(id) {
        return fetch(baseURL + id, {
            method: 'DELETE'
        })
    }

}

export default StockService