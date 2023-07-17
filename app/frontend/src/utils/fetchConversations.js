const fetchConversations = async (id, setConversations) => {
  const response = await fetch(
    `http://localhost:3001/conversations/${id}`,
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
}

export default fetchConversations;