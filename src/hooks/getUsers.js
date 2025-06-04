import { getToken } from "./getToken";

export async function getUsers() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; //https://cors-anywhere.herokuapp.com/corsdemo go here and request temp. access.
    const targetUrl = 'https://api.signicat.com/ciam/api/scim/v2/Users';
    const token = await getToken();

    const response = await fetch(proxyUrl + targetUrl, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error('Failed to fetch protected resource');

  const data = await response.json();
  return data;
}