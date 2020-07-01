function makeGetComments ({ listComments }) {
    return async function getComments () {
      const headers = {
        'Content-Type': 'application/json'
      }
      try {
        const postedComments = await listComments()
        return {
          headers,
          statusCode: 200,
          body: postedComments
        }
      } catch (e) {
        console.log(e)
        return {
          headers,
          statusCode: 400,
          body: {
            error: e.message
          }
        }
      }
    }
  }

module.exports = makeGetComments