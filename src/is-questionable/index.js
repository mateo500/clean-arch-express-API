const axios = require('axios');
const pipe = require('@devmastery/pipe');
const makeIsQuestionable = require('./is-questionable')


const isQuestionable = makeIsQuestionable({
  issueHttpRequest: axios,
  pipe,
})

module.exports = isQuestionable;