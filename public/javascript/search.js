const axios = require("axios");

async function weather(city, weatherAPI) {
  if (city !== undefined && !Number.isInteger(parseInt(city))) {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherAPI}&units=metric`
    );
    return response;
  }
}

module.exports = { weather };
