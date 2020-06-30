const express = require('express');
const app = express();
const port = process.env.PORT || 5000
const expressCalbback = require('./expressCallback')
const { getComments, postComment } = require('./controllers/comment/index') 

app.use(express.json())


app.get('/api/comments', expressCalbback(getComments))
app.post('/api/comments', expressCalbback(postComment))


app.listen(port, () => console.log(`server connected on port: ${port}`))

