const makeCommentsDb = require('./comments-db')
const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient
const url = 'xxxxx'
const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true })

const makeDb = async() => {
    if(!client.isConnected()){
        await client.connect()
    }
    return client.db('test')
}


const commentsDb = makeCommentsDb({ makeDb })
module.exports = {
    makeDb: makeDb,
    commentsDb: commentsDb
}
