import create from "zustand";
import { API } from "../config/api";

export const useStore = create((set) => ({
  //authentication
  isAuth: false,
  setAuthTrue: () => set({ isAuth: true }),
  setAuthFalse: () => set({ isAuth: false }),

  //data
  collection: [],
  loadingCollection: false,
  fetchError: false,
  fetchErrorMessage: "",
  fetchCollection: async () => {
    const token = localStorage.getItem("token");
    set({ loadingCollection: true, fetchError: false });

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    const res = await API.get(`koperasi`, {
      headers: headers,
    });
    if (res.data) {
      set({ loadingCollection: false });
    }
    set({ collection: await res.data.data });
  },
  loading: false,
  removeCollection: () => set({ collection: [] }),
}));
