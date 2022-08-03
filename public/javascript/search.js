const axios = require("axios");

async function weather(city, weatherAPI) {
  if (!city) {
    return console.log("not found");
  } else {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherAPI}&units=metric`
      );
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = { weather };
