const Quote = require("../models/quotes.model");

async function getRandomQuote(req, res, next) {
  let randomQuote;
  try {
    randomQuote = await Quote.getRandomQuote();
  } catch (error) {
    return next(error);
  }
  res.json({
    quote: randomQuote,
  });
}

module.exports = {
  getRandomQuote: getRandomQuote,
};
