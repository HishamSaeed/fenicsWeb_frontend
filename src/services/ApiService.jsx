
const apiBaseUrl = 'http://127.0.0.1:5000';


export const fetchData = async (endpoint) => {
    const url = `${apiBaseUrl}/${endpoint}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const sendData = async (endpoint, data=null) => {
    const url = `${apiBaseUrl}/${endpoint}`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data ? JSON.stringify({ 'value': data }) : ''
      });
      if (!response.ok) {
        throw new Error('Failed to send data');
      }
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error sending data:', error);
      throw error;
    }
};
