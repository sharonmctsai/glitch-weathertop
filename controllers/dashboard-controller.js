import { stationStore } from "../models/station-store.js";

export const dashboardController = {
  async index(request, response) {
    
    
    const viewData = {
      title: "Station Dashboard",
      stations: await stationStore.getAllStations(),
      
    };
    console.log("dashboard rendering");
    response.render("dashboard-view", viewData);
  },

  async addStation(request, response) {
    const newStation = {
      title: request.body.title,
      latitude: request.body.latitude,
      longitude: request.body.longitude,
    };
    console.log(`adding station ${newStation.title}`);
    await stationStore.addStation(newStation);
    response.redirect("/dashboard");
  },
  
  async deleteStation(request, response){
    const stationId = request.params.id;
    console.log('Deleting Station ${stationId}');
    await stationStore.deleteStationById(stationId);
    response.redirect("/dashboard/");
}
};
