const buildMakeComment = ({ Id, md5, sanitize, makeSource }) => {
    return function makeComment ({
      author,
      createdOn = Date.now(),
      id = Id.makeId(),
      source,
      modifiedOn = Date.now(),
      postId,
      published = true,
      text
    } = {}) {
      if (!Id.isValidId(id)) {
        throw new Error('Comment must have a valid id.')
      }
      if (!author) {
        throw new Error('Comment must have an author.')
      }
      if (author.length < 2) {
        throw new Error("Comment author's name must be longer than 2 characters.")
      }
      /* if (!postId) {
        throw new Error('Comment must contain a postId.')
      } */
      if (!text || text.length < 1) {
        throw new Error('Comment must include at least one character of text.')
      }
      if (!source) {
        throw new Error('Comment must have a source.')
      }
  
      let sanitizedText = sanitize(text).trim()
      if (sanitizedText.length < 1) {
        throw new Error('Comment contains no usable text.')
      }
  
      const validSource = makeSource(source)
      const deletedText = '.xX This comment has been deleted Xx.'
      let hash
  
      return Object.freeze({
        getAuthor: () => author,
        getCreatedOn: () => createdOn,
        getHash: () => hash || (hash = makeHash()),
        getId: () => id,
        getModifiedOn: () => modifiedOn,
        getPostId: () => postId,
        getSource: () => validSource,
        getText: () => sanitizedText,
        isDeleted: () => sanitizedText === deletedText,
        isPublished: () => published,
        markDeleted: () => {
          sanitizedText = deletedText
          author = 'deleted'
        },
        publish: () => {
          published = true
        },
        unPublish: () => {
          published = false
        }
      })
  
      function makeHash () {
        return md5(
          sanitizedText +
            published +
            (author || '') +
            (postId || '') 
        )
      }
    }
  }

module.exports = buildMakeComment;