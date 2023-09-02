const db = require("../data/database")

class Quote {
    static async getRandomQuote() {
        const quotes = await db.getDb().collection("quotes").find().toArray();
        const randomQuoteIndex = Math.floor(Math.random() * quotes.length)
        // [1,2,3] => length: 3 => Math.random(0.8) * 3 = 2.4 => Math.floor(2.4) = 2 

        const randomQuote = quotes[randomQuoteIndex]

        return randomQuote.text
    }
}

module.exports = Quote;
