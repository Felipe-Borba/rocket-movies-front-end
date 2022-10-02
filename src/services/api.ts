import axios from "axios";

export const api = axios.create({
  baseURL: 'https://felipe-rocket-notes-api.herokuapp.com'
})