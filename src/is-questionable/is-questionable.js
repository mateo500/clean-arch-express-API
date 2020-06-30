function makeIsQuestionable ({
    pipe,
    issueHttpRequest
  }) {
    return async function isQuestionable ({
      text
    } = {}) {

      const callModerationApi = pipe(
        buildModerationApiCommand,
        issueHttpRequest,
        normalizeModerationApiResponse
      )
  
      try {
        const [spam] = await Promise.all([
          callModerationApi(text)
        ])
        return spam
      } catch (e) {
        console.log(e)
        return true
      }
    }
  }
  function buildModerationApiCommand (text) {
    return {
      method: 'post',
      data: text,
      params: { classify: 'true' },
      headers: {
        'Content-Type': 'text/html',
        'Ocp-Apim-Subscription-Key': process.env.DM_MODERATOR_API_KEY
      },
      url: process.env.DM_MODERATOR_API_URL
    }
  }
  
  function normalizeModerationApiResponse (response) {
    return (
      !response.data.Classification ||
      response.data.Classification.ReviewRecommended
    )
  }
  
module.exports = makeIsQuestionable;