//Getting token from my client

  export async function getToken() {
    const clientId = 'sandbox-energetic-sail-904';
    const clientSecret = '4DR1hF19hYJlyCNtKSRV1Zb1mCqRLwBCWHnrItYG7ImnohUi';
    const authBase64 = btoa(`${clientId}:${clientSecret}`);

    const body = new URLSearchParams({
      grant_type: 'client_credentials',
      scope: 'signicat-api',
    });

    try {
      const response = await fetch('https://api.signicat.com/auth/open/connect/token', {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${authBase64}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body.toString(),
      });

      if (!response.ok) {
        throw new Error('Token request failed');
      }

      const data = await response.json();
      console.log('Access token:', data.access_token);
      return data.access_token;
    } catch (error) {
      console.error('Error requesting token:', error);
    }
  };