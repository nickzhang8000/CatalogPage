
const axios = require("axios");

const getProducts = async (url) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.get(url, config);
    console.log("response",response);
    return response.data;
    
  } catch (error) {
    console.log("error",error);
  }

}
export default getProducts;