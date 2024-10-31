exports.handler = async (event) => {
    const data = JSON.parse(event.body);
    const { name } = data;
  
    console.log(`Received data: ${JSON.stringify(data)}`);
  
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Thank you for your interest, ${name}` }),
    };
  };
  