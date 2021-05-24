import axios from "axios";

// set config defaults while creating instance
export const API = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

export const token = localStorage.getItem("token");

// export const user = localStorage.getItem("user");

export const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};
