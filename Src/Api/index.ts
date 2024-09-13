const client_id = 'b6695874e8e446e8898848a685af1d9a'; 
const client_secret = '079e5d2fa0994006a891831e7deb255c';

async function getToken() {
  const credentials = `${client_id}:${client_secret}`;
  const encodedCredentials = btoa(credentials); 

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: new URLSearchParams({
      'grant_type': 'client_credentials'
    }).toString(), 
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + encodedCredentials,
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Error ${error.error}: ${error.error_description}`);
  }

  return await response.json();
}

export default getToken;
