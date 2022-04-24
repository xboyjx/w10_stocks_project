use userStocks;
db.dropDatabase();

db.userStocks.insertMany([
    
    {
        username: "Dennis",
        email: "dennis@dennis.com",
        stocksHeld: [{
            stock: "APPL",
            noHeld: 100
        },
        {
            stock: "GOOG",
            noHeld: 100
        },
        {    
        stock: "TSLA",
        noHeld: 100
    }]
    },
    {
        username: "Betty",
        email: "betty@dennis.com",
        stocksHeld: [{
            stock: "APPL",
            noHeld: 100
        },
        {
            stock: "GOOG",
            noHeld: 100
        },
        {    
        stock: "TSLA",
        noHeld: 100
    }]
    },
    {
        username: "Clive",
        email: "Clive@dennis.com",
        stocksHeld: [{
            stock: "APPL",
            noHeld: 100
        },
        {
            stock: "GOOG",
            noHeld: 100
        },
        {    
        stock: "TSLA",
        noHeld: 100
    }]
    }

]);