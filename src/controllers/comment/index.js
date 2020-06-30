const { addComment, listComments } = require('../../use-cases/comment/index')
const makePostComment = require('./post-comment')
const makeGetComments = require('./get-comments')

const getComments = makeGetComments({
    listComments
})

const postComment  = makePostComment({ addComment })

const commentController = Object.freeze({
    getComments,
    postComment
})

module.exports = {
    commentController: commentController,
    getComments: getComments,
    postComment: postComment
}