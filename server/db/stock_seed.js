use stocks;
db.dropDatabase();

db.stocks.insertMany([
    {
        ticker: "AAPL"
    },
    {
        ticker: "TSLA"
    },
    {
        ticker: "GOOG"
    }
])
