const HOST = process.env.REACT_APP_API_HOST || 'localhost:3001';
const PROTOCOL = process.env.REACT_APP_API_PROTOCOL || 'http';

const fetchConversations = async (id, setConversations) => {
  const response = await fetch(
    `${PROTOCOL}://${HOST}/conversations/${id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
      }
    },
  );

  const data = await response.json();
  setConversations(data);
};

export default fetchConversations;