import create from 'zustand';
import { API } from '../config/api';

export const useStore = create((set) => ({
  //authentication
  isAuth: false,
  setAuthTrue: () => set({ isAuth: true }),
  setAuthFalse: () => set({ isAuth: false }),

  //data
  collection: [],
  users: [],
  loadingCollection: false,
  fetchError: false,
  fetchErrorMessage: '',
  detailData: {},
  fetchDetailError: false,
  loadingFetchData: false,
  fetchDetailData: async (id) => {
    const token = localStorage.getItem('token');
    set({ loadingFetchData: true, fetchDetailError: false });

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    const res = await API.get(`koperasi/${id}`, {
      headers: headers,
    });
    if (res.data) {
      set({ loadingCollection: false });
    }
    console.log(res.data, 'res.data');
    set({ detailData: await res.data.data });
  },
  fetchCollection: async () => {
    const token = localStorage.getItem('token');
    set({ loadingCollection: true, fetchError: false });

    const headers = {
      'Content-Type': 'application/json',
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
  loadingSubmit: false,
  submitData: async (payload) => {
    const token = localStorage.getItem('token');
    set({ loadingSubmit: true });

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    const res = await API.post(`koperasi`, payload, {
      headers: headers,
    });
    if (res.data) {
      set({ loadingSubmit: false });
    }
  },
  submitDataEdit: async (payload) => {
    const token = localStorage.getItem('token');
    set({ loadingSubmit: true });

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    const res = await API.post(`koperasi/${payload.id}`, payload, {
      headers: headers,
    });
    if (res.data) {
      set({ loadingSubmit: false });
    }
  },
  removeCollection: () => set({ collection: [] }),
  user: {},
  getUser: async () => {
    const token = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const res = await API.get(`user`, {
      headers: headers,
    });
    set({ user: await res.data.data });
  },
  getUsers: async () => {
    const token = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const res = await API.get(`users`, {
      headers: headers,
    });
    set({ users: await res.data.data });
  },
}));
