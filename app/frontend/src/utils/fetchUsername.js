const fetchUsername = async (username, setUsername) => {
  const response = await fetch(
    `http://localhost:3001/users/fetch-username`,
    {
      method: 'POST',
      body: JSON.stringify({username}),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
      }
    },
  );
  
  if (response.status === 404) return -1
  
  const data = await response.json();
  setUsername(data.name)
  return null
} 

export default fetchUsername;