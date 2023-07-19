const HOST = process.env.REACT_APP_API_HOST || 'localhost:3001';
const PROTOCOL = process.env.REACT_APP_API_PROTOCOL || 'http';

const fetchUser = async (username, password, setName, setId) => {
  const response = await fetch(
    `${PROTOCOL}://${HOST}/users/fetch-username`,
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
    setName(null);
  } else {
    const data = await response.json();
    setId(data.id);
    setName(data.name);
  }
}; 

export default fetchUser;