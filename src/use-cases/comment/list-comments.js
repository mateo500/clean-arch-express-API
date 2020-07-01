 function makeListComments ({ commentsDb }) {
    return async function listComments () {
      /* if (!postId) {
        throw new Error('You must supply a post id.')
      } */
      const comments = await commentsDb.findAll()
      console.log(comments)
      const nestedComments = comments.map(comment => comment)
      return nestedComments
  
    }
  }

  module.exports = makeListComments;