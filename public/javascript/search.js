const axios = require("axios");

async function weather(city, weatherAPI) {
  if (city !== undefined) {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherAPI}&units=metric`
    );
    return response;
  } else {
    console.log("error");
  }
}

module.exports = { weather };
