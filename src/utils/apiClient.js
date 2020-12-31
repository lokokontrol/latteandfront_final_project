function settings(data) {
   const settings = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
  };
  return settings;
}

const apiClient = {
  get: async function(url) {
    try {
      const response = await fetch(url);
      const json = await response.json();
      return json;
    } catch (error) { 
      console.log(error);
    }

  },

  post: async function(url, data) {
    try {
    const response = await fetch(url, settings(data));
    return response.json();
    } catch (error) {
      console.log(error);
    }
  }
};

export default apiClient;