const axios = require("axios");

async function weather(city, weatherAPI) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherAPI}&units=metric`
    );
    return response;
  } catch (error) {
    return "There is no such place!";
  }
}

module.exports = { weather };
