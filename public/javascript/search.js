const axios = require("axios");

async function weather(city, weatherAPI) {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherAPI}&units=metric`
  );
  console.log(response.data);
}

module.exports = { weather };
