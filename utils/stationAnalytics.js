
export const stationAnalytics = {
  
  getLatestReading(station) {
    if (station.readings.length > 0) {
      const lastReading = station.readings[station.readings.length - 1];
      return lastReading;
    } else {
      return null; // No readings available
    }
  },


 getMaxTemperature(readings) {
    const temperatures = readings.map((reading) => reading.temperature);
    return Math.max(...temperatures);
  },

  getMinTemperature(readings) {
    const temperatures = readings.map((reading) => reading.temperature);
    return Math.min(...temperatures);
  },

  getMaxWindSpeed(readings) {
    const windSpeeds = readings.map((reading) => reading.windSpeed);
    return Math.max(...windSpeeds);
  },

  getMinWindSpeed(readings) {
    const windSpeeds = readings.map((reading) => reading.windSpeed);
    return Math.min(...windSpeeds);
  },

  getMaxPressure(readings) {
    const pressures = readings.map((reading) => reading.pressure);
    return Math.max(...pressures);
  },

  getMinPressure(readings) {
    const pressures = readings.map((reading) => reading.pressure);
    return Math.min(...pressures);
  },
  
  tempTrend(readings) {
    let trend = 0;
    if (readings.length > 2) {
      const values = [
        readings[readings.length - 3].temperature,
        readings[readings.length - 2].temperature,
        readings[readings.length - 1].temperature
      ];
      trend = this.calcTrend(values);
    }
    return trend;
  },
  
  windSpeedTrend(readings) {
    let trend = 0;
    if (readings.length > 2) {
      const values = [
        readings[readings.length - 3].windSpeed,
        readings[readings.length - 2].windSpeed,
        readings[readings.length - 1].windSpeed
      ];
      trend = this.calcTrend(values);
    }
    return trend;
  },

  pressureTrend(readings) {
    let trend = 0;
    if (readings.length > 2) {
      const values = [
        readings[readings.length - 3].pressure,
        readings[readings.length - 2].pressure,
        readings[readings.length - 1].pressure
      ];
      trend = this.calcTrend(values);
    }
    return trend;
  },


  calcTrend(values) {
    let trend = 0;
    if (values.length > 2) {
      if ((values[2] > values[1]) && (values[1] > values[0])) {
        trend = 1;
      } else if ((values[2] < values[1]) && (values[1] < values[0])) {
        trend = -1;
      }
    }
    return trend;
  }
};