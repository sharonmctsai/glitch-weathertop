import { stationStore } from "../models/station-store.js";
import { readingStore } from "../models/reading-store.js";
import { stationAnalytics } from "../utils/stationAnalytics.js"; // Import the stationAnalytics utility
import { Conversion} from '../utils/Conversion.js';


export const stationController = {
  async index(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const latestReading = await stationAnalytics.getLatestReading(station); // Get the latest reading
    const tempTrendIsUp = stationAnalytics.tempTrend(station.readings) === 1;
    const windSpeedTrendIsUp = stationAnalytics.windSpeedTrend(station.readings) === 1;
    const pressureTrendIsUp = stationAnalytics.pressureTrend(station.readings) === 1;



    const weatherCode = Conversion.currentWeather(latestReading.code);
    const weatherIcon = Conversion.weatherIcon(latestReading.code);
    const convertedTemperature = Conversion.tempF(latestReading.temperature);
    const windChill = Conversion.windChill(latestReading.temperature, latestReading.windSpeed);
    const beaufortScale = Conversion.beaufort(latestReading.windSpeed);
    const windDirection = Conversion.degreesToCompass(latestReading.windDirection);

    // Calculate trends

    
    
   // Function to Calculate max and min values using the Analytics utility
    const maxTemperature = stationAnalytics.getMaxTemperature(station.readings, 'temperature');
    const minTemperature = stationAnalytics.getMinTemperature(station.readings, 'temperature');
    const maxWindSpeed = stationAnalytics.getMaxWindSpeed(station.readings, 'windSpeed');
    const minWindSpeed = stationAnalytics.getMinWindSpeed(station.readings, 'windSpeed');
    const maxPressure = stationAnalytics.getMaxPressure(station.readings, 'pressure');
    const minPressure = stationAnalytics.getMinPressure(station.readings, 'pressure');
    
    
    /* Check the logs
    console.log("maxTemperature:", maxTemperature);
  console.log("minTemperature:", minTemperature);
  console.log("maxWindSpeed:", maxWindSpeed);
  console.log("minWindSpeed:", minWindSpeed);
  console.log("maxPressure:", maxPressure);
  console.log("minPressure:", minPressure);*/


    const viewData = {
      title: "Station",
      station: station,
      latitude: station.latitude,
      longitude: station.longitude,
      
      latestReading: latestReading,
      /*
      latestCode: latestReading.code,
      latestTemperature: latestReading.temperature,
      latestWindSpeed: latestReading.windSpeed,
      latestPressure: latestReading.pressure,*/
      weatherCode: weatherCode,
      weatherIcon: weatherIcon,
      convertedTemperature: convertedTemperature,
      windChill: windChill,
      beaufortScale: beaufortScale,
      windDirection: windDirection,
      
      maxTemperature: maxTemperature,
      minTemperature: minTemperature,
      maxWindSpeed: maxWindSpeed,
      minWindSpeed: minWindSpeed,
      maxPressure: maxPressure,
      minPressure: minPressure,
  
       tempTrendIsUp: tempTrendIsUp,  
      windSpeedTrendIsUp: windSpeedTrendIsUp,
      pressureTrendIsUp: pressureTrendIsUp
    };
    response.render("station-view", viewData);
  },

  async addReading(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const newReading = {
      code: request.body.code,
      temperature: request.body.temperature,
      windSpeed: request.body.windSpeed,
      windDirection: request.body.windDirection,
      pressure: request.body.pressure,
    };
    console.log(`adding reading ${newReading.title}`);
    await readingStore.addReading(station._id, newReading);
    response.redirect("/station/" + station._id);
  },
  
  async deleteReading(request, response){
    const stationId = request.params.stationid;
    const readingId = request.params.readingid;
    console.log('Deleting Reading ${readingId} from Station ${stationId}');
    await readingStore.deleteReading(readingId);
    response.redirect("/station/" + stationId);
},
  
  
};

