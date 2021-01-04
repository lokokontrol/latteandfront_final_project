function settingsPost(data) {
   const settings = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-AUTH-TOKEN': 'LIBRARIFY'
      },
      body: JSON.stringify(data)
  };
  return settings;
}


const headers = {
  accept: 'application/json',
  'Content-Type': 'application/json',
  'X-AUTH-TOKEN': 'LIBRARIFY'
};


const apiClient = {
  get: async function(url) {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers
      });
      const json = await response.json();
      return json;
    } catch (error) { 
      console.log(error);
    }
  },
  post: async function(url, data) {
    try {
    const response = await fetch(url, settingsPost(data));
    return response.json();
    } catch (error) {
      console.log(error);
    }
  },
  delete: async function(url) {
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers
      });
      const json = await response.json();
      return json;
    } catch (error) { 
      console.log(error);
    }
  }
};

export default apiClient;