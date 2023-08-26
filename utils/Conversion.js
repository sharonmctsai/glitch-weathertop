export const Conversion = {
  weatherCodes: {
    100: "Clear",
    200: "Partial clouds",
    300: "Cloudy",
    400: "Light Showers",
    500: "Heavy Showers",
    600: "Rain",
    700: "Snow",
    800: "Thunder",
  },

  weatherIcons: {
    /*100: "/assets/sun.png",
    200: "/assets/partialclouds.png",
    300: "/assets/cloudy.png",
    400: "/assets/lightshower.png",
    500: "/assets/heavyshower.png",
    600: "/assets/rains.png",
    700: "/assets/snow.png",
    800: "/assets/thunder.png",*/
    
    100: "https://cdn.glitch.global/919a84ab-9d58-4b9a-ba1c-ea5cc14cfb94/sun.png?v=1691998581525",
    200: "https://cdn.glitch.global/919a84ab-9d58-4b9a-ba1c-ea5cc14cfb94/partialclouds.png?v=1691998575435",
    300: "https://cdn.glitch.global/919a84ab-9d58-4b9a-ba1c-ea5cc14cfb94/cloudy.png?v=1691998569661",
    400: "https://cdn.glitch.global/919a84ab-9d58-4b9a-ba1c-ea5cc14cfb94/lightshower.png?v=1692034599886",
    500: "https://cdn.glitch.global/919a84ab-9d58-4b9a-ba1c-ea5cc14cfb94/heavyshower.png?v=1692034602090",
    600: "https://cdn.glitch.global/919a84ab-9d58-4b9a-ba1c-ea5cc14cfb94/rains.png?v=1691998577699",
    700: "https://cdn.glitch.global/919a84ab-9d58-4b9a-ba1c-ea5cc14cfb94/snow.png?v=1691998580028",
    800: "https://cdn.glitch.global/919a84ab-9d58-4b9a-ba1c-ea5cc14cfb94/thunder.png?v=1691998583028",
  },

  degreesToCompass(deg) {
    if (deg > 11.25 && deg <= 33.75) {
      return "NNE";
    } else if (deg > 33.75 && deg <= 56.25) {
      return "NE";
    } else if (deg > 56.25 && deg <= 78.75) {
      return "ENE";
    } else if (deg > 78.75 && deg <= 101.25) {
      return "E";
    } else if (deg > 101.25 && deg <= 123.75) {
      return "ESE";
    } else if (deg > 123.75 && deg <= 146.25) {
      return "SE";
    } else if (deg > 146.25 && deg <= 168.75) {
      return "SSE";
    } else if (deg > 168.75 && deg <= 191.25) {
      return "S";
    } else if (deg > 191.25 && deg <= 213.75) {
      return "SSW";
    } else if (deg > 213.75 && deg <= 236.25) {
      return "SW";
    } else if (deg > 236.25 && deg <= 258.75) {
      return "WSW";
    } else if (deg > 258.75 && deg <= 281.25) {
      return "W";
    } else if (deg > 281.25 && deg <= 303.75) {
      return "WNW";
    } else if (deg > 303.75 && deg <= 326.25) {
      return "NW";
    } else if (deg > 326.25 && deg <= 348.75) {
      return "NNW";
    } else {
      return "N";
    }
  },

  currentWeather(code) {
    return this.weatherCodes[code] || "";
  },

  weatherIcon(code) {
    return this.weatherIcons[code] || "";
  },

  tempF(tempC) {
    return (tempC * 1.8) + 32;
  },

  windChill(tempC, windSpeed) {
    const windChill = 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windSpeed, 0.16)
      + 0.3965 * tempC * Math.pow(windSpeed, 0.16);
    return Math.round(windChill * 100) / 100;
  },

  beaufort(windSpeed) {
    if (windSpeed === 1) {
      return 0;
    } else if (windSpeed >= 1 && windSpeed <= 5) {
      return 1;
    } else if (windSpeed >= 6 && windSpeed <= 11) {
      return 2;
    } else if (windSpeed >= 12 && windSpeed <= 19) {
      return 3;
    } else if (windSpeed >= 20 && windSpeed <= 28) {
      return 4;
    } else if (windSpeed >= 29 && windSpeed <= 38) {
      return 5;
    } else if (windSpeed >= 39 && windSpeed <= 49) {
      return 6;
    } else if (windSpeed >= 50 && windSpeed <= 61) {
      return 7;
    } else if (windSpeed >= 62 && windSpeed <= 74) {
      return 8;
    } else if (windSpeed >= 75 && windSpeed <= 88) {
      return 9;
    } else if (windSpeed >= 89 && windSpeed <= 102) {
      return 10;
    } else if (windSpeed >= 103 && windSpeed <= 117) {
      return 11;
    }
    return -1;
  },
};

export default Conversion;
