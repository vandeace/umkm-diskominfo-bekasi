import React, { useState } from "react";
import Body from "../Components/Body";
import NavBar from "../Components/NavBar";
import styled from "styled-components";
import Input from "../Components/InputData";
import TabPanel from "../Components/TabPanel/Index";
import Form1 from "../Components/Form/Form1";
import Form2 from "../Components/Form/Form2";
import Form3 from "../Components/Form/Form3";
import Form4 from "../Components/Form/Form4";
import Form5 from "../Components/Form/Form5";
import Form6 from "../Components/Form/Form6";
import Form7 from "../Components/Form/Form7";
import Form8 from "../Components/Form/Form8";
import Form9 from "../Components/Form/Form9";
import Form10 from "../Components/Form/Form10";
import Form11 from "../Components/Form/Form11";
import Loader from "../Components/Loader/index";
import { useStore } from "../api/index";
import { useHistory } from "react-router-dom";

const Style = styled.div`
  margin-left: 250px;
  background-color: #f2f7ff;
  font-family: "Open Sans", sans-serif;
  padding: 0 30px 0 30px;
  overflow: hidden;
  .custom-container {
    margin: 30px;
    padding: 20px 50px 20px 50px;
    border: 1px solid #dae1e7;
    font-size: 16px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.11) 0px 15px 30px 0px,
      rgba(0, 0, 0, 0.08) 0px 5px 15px 0px;
  }
  .customCard {
    margin: 30px;
    padding: 20px 50px 20px 50px;
    border: 1px solid #dae1e7;
    font-size: 16px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.11) 0px 15px 30px 0px,
      rgba(0, 0, 0, 0.08) 0px 5px 15px 0px;
    .btn-custom {
      border-radius: 5px;
    }
  }
`;

const InputData = () => {
  const history = useHistory();
  const [value, setValue] = useState(1);
  const [store, setStore] = useState({
    namaKoperasi: "",
    nomorBadanHukum: "",
    tanggalBadanHukum: "",
    jalan: "",
    rt: "",
    rw: "",
    kelurahan: "",
    kecamatan: "",
    telepon: "",
    email: "",
    website: "",
    status: "",
    bentukKoperasi: "",
    jenisKoperasi: "",
    kelompokKoperasi: "",
    sektorUsaha: "",
    tglNonAktif: "",
    ketNonAktif: "",
    tahunKepengurusan: "",
    ketuaKepengurusan: [{ nama: "" }],
    bendaharaKepengurusan: [{ nama: "" }],
    sekretarisKepengurusan: [{ nama: "" }],
    tahunPengawasan: "",
    ketuaPengawasan: "",
    anggotaPengawasan: [{ nama: "" }],
    SNIK: "",
    nomorSNIK: "",
    nomorNIK: "",
    SISP: "",
    NPWP: "",
    NIB: "",
    SIUP: "",
    TDP: "",
    tahunKelembagaan: "",
    jumlahAnggota: "",
    anggotaL: "",
    anggotaP: "",
    jumlahKaryawan: "",
    manager: [{ nama: "" }],
    tglRAT: "",
    modalSendiri: "",
    modalLuar: "",
    nilaiAset: "",
    volumeUsaha: "",
    SHU: "",
    diklat: [{ jenis: "", tahun: "" }],
    diklatAnggota: "",
    pembiayaan: [{ lembaga: "", tahun: "" }],
    pemasaran: [{ fasilitas: "", tahun: "" }],
    mitra: [{ tahun: "", lembaga: "", bidang: "" }],
    aturanRT: "",
    aturanKhusus: "",
    peraturanKhusus: [{ peraturan: "" }],
    SOP: [{ peraturan: "" }],
    SOM: [{ peraturan: "" }],
    penilaian: "",
    hasilPenilaian: "",
    skorPenilaian: "",
    pemeringkatan: "",
    predikat: "",
  });

  const submitData = useStore((state) => state.submitData);
  const loading = useStore((state) => state.loadingSubmit);
  const onSubmit = async (data) => {
    if (data.status === "non_aktif") {
      console.log(data, "data");
      setStore({
        ...store,
        ...data,
      });
      console.log("submit");
      console.log(data, "data");
    } else {
      if (value === 11) {
        console.log(data, "data");
        setStore({
          ...store,
          ...data,
        });
        await submitData(store);
        history.push("/");
      } else {
        console.log(data, "data");
        setStore({
          ...store,
          ...data,
        });
        setValue(value + 1);
      }
    }
  };
  console.log(store, "store");
  if (loading) {
    return <Loader />;
  } else {
    return (
      <Style>
        <NavBar />
        <Body>
          <div className="customCard">
            {/* <Input /> */}
            <h1 className="text-center">Form Data Laporan Koperasi</h1>
            <TabPanel value={value} index={1}>
              <Form1
                setValue={setValue}
                value={value}
                onSubmit={onSubmit}
                store={store}
                setStore={setStore}
              />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Form2
                setValue={setValue}
                value={value}
                onSubmit={onSubmit}
                store={store}
              />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Form3
                setValue={setValue}
                value={value}
                onSubmit={onSubmit}
                store={store}
              />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Form4
                setValue={setValue}
                value={value}
                onSubmit={onSubmit}
                store={store}
              />
            </TabPanel>
            <TabPanel value={value} index={5}>
              <Form5
                setValue={setValue}
                value={value}
                onSubmit={onSubmit}
                store={store}
              />
            </TabPanel>
            <TabPanel value={value} index={6}>
              <Form6
                setValue={setValue}
                value={value}
                onSubmit={onSubmit}
                store={store}
              />
            </TabPanel>
            <TabPanel value={value} index={7}>
              <Form7
                setValue={setValue}
                value={value}
                onSubmit={onSubmit}
                store={store}
              />
            </TabPanel>
            <TabPanel value={value} index={8}>
              <Form8
                setValue={setValue}
                value={value}
                onSubmit={onSubmit}
                store={store}
              />
            </TabPanel>
            <TabPanel value={value} index={9}>
              <Form9
                setValue={setValue}
                value={value}
                onSubmit={onSubmit}
                store={store}
              />
            </TabPanel>
            <TabPanel value={value} index={10}>
              <Form10
                setValue={setValue}
                value={value}
                onSubmit={onSubmit}
                store={store}
              />
            </TabPanel>
            <TabPanel value={value} index={11}>
              <Form11
                setValue={setValue}
                value={value}
                onSubmit={onSubmit}
                store={store}
              />
            </TabPanel>
          </div>
        </Body>
      </Style>
    );
  }
};

export default InputData;
