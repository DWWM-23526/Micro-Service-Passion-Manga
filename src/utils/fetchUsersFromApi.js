const axios = require("axios");

const fetchUsersFromApi = async () => {
  try {
    const response = await axios.get(`http://${process.env.API_URL}/users`, {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs");
    return { data: [] };
  }
};

module.exports = fetchUsersFromApi;
