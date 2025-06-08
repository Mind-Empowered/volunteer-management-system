export const formatResponse = (statusCode: number, body: Record<string, any>) => {
    return {
      statusCode,
      body: JSON.stringify(body),
    };
  };
  
  export const errorResponse = (message: string, statusCode = 500) => {
    return {
      statusCode,
      body: JSON.stringify({ error: message }),
    };
  };
  