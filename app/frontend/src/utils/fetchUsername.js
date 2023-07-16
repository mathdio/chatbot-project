const fetchUsername = async (username, password, setName) => {
  const response = await fetch(
    `http://localhost:3001/users/fetch-username`,
    {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
      }
    },
  );
  
  if (response.status === 404) {
    setName(null)
  } else {
    const data = await response.json();
    setName(data.name)
  }
} 

export default fetchUsername;