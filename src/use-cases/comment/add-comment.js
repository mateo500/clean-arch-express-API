
const makeComment = require('../../entities/comment/index')

function makeAddComment ({ commentsDb }) {
  return async function addComment (commentInfo) {
    const comment = makeComment(commentInfo)
    const exists = await commentsDb.findByHash({ hash: comment.getHash() })
    if (exists) {
      return exists
    }
    
    return commentsDb.insert({
      author: comment.getAuthor(),
      createdOn: comment.getCreatedOn(),
      hash: comment.getHash(),
      id: comment.getId(),
      modifiedOn: comment.getModifiedOn(),
      postId: comment.getPostId(),
      published: comment.isPublished(),
      source: {
        ip: comment.getSource().getIp(),
        browser: comment.getSource().getBrowser()
      },
      text: comment.getText()
    })
  }
}

module.exports = makeAddComment;