use users;
db.dropDatabase();

db.stocks.insertMany([
    {
        username: "Dennis",
        email: "dennis@dennis.com"
    },
    {
        username: "Betty",
        email: "betty@dennis.com"
    },
    {
        username: "Clive",
        email: "Clive@dennis.com"
    }
    
]);