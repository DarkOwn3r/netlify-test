// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {
    const num1 = parseInt(event.queryStringParameters.num1) || 0;
    const num2 = parseInt(event.queryStringParameters.num2) || 0;
    const result = num1 + num2;
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `${result}` }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
