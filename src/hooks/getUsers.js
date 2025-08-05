import { getToken } from "./getToken";

export async function getUsers() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; //https://cors-anywhere.herokuapp.com/corsdemo go here and request temp. access.
    const targetUrl = 'https://api.signicat.com/ownidp/api/scim/v2/Users?filter=username%20eq%20%22marsat@signicat.com%22';
    const token = await getToken();

    const response = await fetch(proxyUrl + targetUrl, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) throw new Error('Failed to fetch protected resource');

  const data = await response.json();
  return data;
}