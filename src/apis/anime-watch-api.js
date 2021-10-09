import axios from "axios";

export default axios.create({
  baseURL: "https://arcane-garden-26081.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
  },
});
