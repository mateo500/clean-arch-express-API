const makeAddComment = require('./add-comment')
const makeListComment = require('./list-comments')
const { commentsDb } = require('../../data/index')



const addComment = makeAddComment({ commentsDb })
const listComments = makeListComment({commentsDb})

const commentService = Object.freeze({
    addComment,
    listComments
})

module.exports = {
    commentService: commentService,
    addComment: addComment,
    listComments: listComments
}