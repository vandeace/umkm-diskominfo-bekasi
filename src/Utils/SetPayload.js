import moment from 'moment';

export const setPayload = (payload) => {
  if (payload.status === 'non_aktif') {
    const data = {
      ...payload,
      tanggalBadanHukum: moment(payload.tanggalBadanHukum).format('YYYY-MM-DD'),
      tglNonAktif: moment(payload.tglNonAktif).format('YYYY-MM-DD'),
      tglRAT: moment(payload.tglNonAktif).format('YYYY-MM-DD'),
    };
    return data;
  } else {
    const data = {
      ...payload,
      tanggalBadanHukum: moment(payload.tanggalBadanHukum).format('YYYY-MM-DD'),
      tglRAT: moment(payload.tglRAT).format('YYYY-MM-DD'),
      tglNonAktif: moment(payload.tglRAT).format('YYYY-MM-DD'),
    };
    return data;
  }
};
