// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {
    const operation = event.queryStringParameters.operation;
    const num1 = parseInt(event.queryStringParameters.num1) || 0;
    const num2 = parseInt(event.queryStringParameters.num2) || 0;
    let result;
    if (operation === "+" || operation === "suma") {
      result = num1 + num2;
    } else if (operation === "-" || operation === "resta") {
      result = num1 - num2;
    } else if (operation === "*" || operation === "multiplicacion") {
      result = num1 * num2;
    } else if (operation === "/" || operation === "division") {
      result = num1 / num2;
    }
    return {
      statusCode: 200,
      body: JSON.stringify({ resultado: `${result}` }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
