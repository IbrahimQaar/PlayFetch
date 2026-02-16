/* eslint-disable no-unused-vars */
import axios from "axios";

export default {
  registerPetView(pet) {
    console.log("object being sent: ");
    console.log(pet);
    return axios.post("/register-pet", pet);
  },

  getAllPets() {
    return axios.get("/pets");
  },

  getPet(id) {
    return axios.get(`/pet/${id}`);
  },

  getPlaydatesByUserId(id) {
    return axios.get(`/playdates/${id}`);
  },

  schedulePlaydate(playdate) {
    return axios.post("/schedule-playdate", playdate);
  },

  getHostPetNameByHostPetId(hostPetId) {
    return axios.get(`/playdate/host/${hostPetId}`);
  },

  getGuestPetNameByGuestPetId(guestPetId) {
    return axios.get(`/playdate/guest/${guestPetId}`);
  },

  updatePlaydateStatus(playdateId, statusData) {
    return axios.put(`/playdate/status/${playdateId}`, statusData);
  },

  updatePlaydateDate(playdateId, dateData) {
    return axios.put(`/playdate/date/${playdateId}`, dateData);
  },

  updatePlaydateTime(playdateId, timeData) {
    return axios.put(`/playdate/time/${playdateId}`, timeData);
  },

  cancelPlaydate(playdateId, cancelData) {
    return axios.put(`/playdate/cancel/${playdateId}`, cancelData);
  },

  getPlaydateByPlaydateId(playdateId) {
    return axios.get(`/playdate/${playdateId}`);
  },

  updatePet(petId, newPet) {
    return axios.put(`/update-pet/${petId}`, newPet)
  }
};