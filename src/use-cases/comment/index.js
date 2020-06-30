const makeAddComment = require('./add-comment')
const makeListComment = require('./list-comments')
const makeHandleModeration = require('./handle-moderation')
const { commentsDb } = require('../../data/index')
const isQuestionable = require('../../is-questionable/index')

const handleModeration = makeHandleModeration({
    isQuestionable,
    initiateReview: async () => {} // TODO: Make real initiate review function.
  })


const addComment = makeAddComment({commentsDb, handleModeration})
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