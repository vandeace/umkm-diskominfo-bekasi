import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  Input,
  Label,
  Form,
  Row,
  Button,
  Col,
  InputGroupAddon,
  InputGroup,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { data } from "../../Utils/DropdownData";

const Style = styled.div`
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
`;

const InputForm = (props) => {
  const { push } = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    push("/");
  };
  const [ketua, setKetua] = useState(1);
  const [bendahara, setBendahara] = useState(1);
  const [sekretaris, setSekretaris] = useState(1);
  const [anggota, setAnggota] = useState(1);
  const [status, setStatus] = useState("");
  const [peraturan, setPeraturan] = useState("");
  const [sertifikat, setSertifikat] = useState("");
  const [pemeringkatan, setPemeringkatan] = useState("");
  const [manajer, setManajer] = useState(1);
  const [diklat, setDiklat] = useState(1);
  const [pembiayaan, setPembiayaan] = useState(1);
  const [pemsaran, setPemsaran] = useState(1);
  const [mitra, setMitra] = useState(1);
  const [aturanKhusus, setAturanKhusus] = useState(1);
  const [operasionalManajemen, setOperasionalManajemen] = useState(1);
  const [operasionalProsedur, setOperasionalProsedur] = useState(1);
  const maxKetua = 3;
  const maxFive = 5;
  const maxTen = 10;

  const handleKetua = (e) => {
    if (e === "plus" && maxKetua > ketua) {
      setKetua(ketua + 1);
    } else if (e === "minus") {
      setKetua(ketua - 1);
    } else {
      console.log("error");
    }
  };
  const handleAturanKhusus = (e) => {
    if (e === "plus" && maxTen > aturanKhusus) {
      setAturanKhusus(aturanKhusus + 1);
    } else if (e === "minus") {
      setAturanKhusus(aturanKhusus - 1);
    } else {
      console.log("error");
    }
  };
  const handleOperasionalManajemen = (e) => {
    if (e === "plus" && maxFive > aturanKhusus) {
      setOperasionalManajemen(operasionalManajemen + 1);
    } else if (e === "minus") {
      setOperasionalManajemen(operasionalManajemen - 1);
    } else {
      console.log("error");
    }
  };
  const handleOperasionalProsedur = (e) => {
    if (e === "plus" && maxFive > aturanKhusus) {
      setOperasionalProsedur(operasionalProsedur + 1);
    } else if (e === "minus") {
      setOperasionalProsedur(operasionalProsedur - 1);
    } else {
      console.log("error");
    }
  };
  const handleDiklat = (e) => {
    if (e === "plus" && maxFive > diklat) {
      setDiklat(diklat + 1);
    } else if (e === "minus") {
      setDiklat(diklat - 1);
    } else {
      console.log("error");
    }
  };
  const handlePembiayaan = (e) => {
    if (e === "plus" && maxFive > pembiayaan) {
      setPembiayaan(pembiayaan + 1);
    } else if (e === "minus") {
      setPembiayaan(pembiayaan - 1);
    } else {
      console.log("error");
    }
  };
  const handleMitra = (e) => {
    if (e === "plus" && maxTen > mitra) {
      setMitra(mitra + 1);
    } else if (e === "minus") {
      setMitra(mitra - 1);
    } else {
      console.log("error");
    }
  };
  const handlePemasaran = (e) => {
    if (e === "plus" && maxFive > pemsaran) {
      setPemsaran(pemsaran + 1);
    } else if (e === "minus") {
      setPemsaran(pemsaran - 1);
    } else {
      console.log("error");
    }
  };

  const handleBendahara = (e) => {
    if (e === "plus" && maxKetua > bendahara) {
      setBendahara(bendahara + 1);
    } else if (e === "minus") {
      setBendahara(bendahara - 1);
    } else {
      console.log("error");
    }
  };
  const handleSekretaris = (e) => {
    if (e === "plus" && maxKetua > sekretaris) {
      setSekretaris(sekretaris + 1);
    } else if (e === "minus") {
      setSekretaris(sekretaris - 1);
    } else {
      console.log("error");
    }
  };
  const handleManajer = (e) => {
    if (e === "plus" && maxKetua > manajer) {
      setManajer(manajer + 1);
    } else if (e === "minus") {
      setManajer(manajer - 1);
    } else {
      console.log("error");
    }
  };
  const handleAnggota = (e) => {
    if (e === "plus") {
      setAnggota(anggota + 1);
    } else if (e === "minus") {
      setAnggota(anggota - 1);
    }
  };

  const setStatusKoperasi = (e) => {
    const value = e.target.value;
    console.log(value, "value");
    setStatus(value);
  };
  const setHandlePeraturan = (e) => {
    const value = e.target.value;
    console.log(value, "value");
    setPeraturan(value);
  };
  const setStatusSertifikat = (e) => {
    const value = e.target.value;
    console.log(value, "value");
    setSertifikat(value);
  };
  const setStatusPemeringkatan = (e) => {
    const value = e.target.value;
    console.log(value, "value");
    setPemeringkatan(value);
  };

  return (
    <Style>
      <h1 className="text-center text-uppercase">Form Data Laporan Koperasi</h1>
      <div className="card"></div>
      <div className="">
        <h3 className="px-3">1. KELEMBAGAAN KOPERASI</h3>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="p-3">
            <Col xl="12" lg="12" md="12" sm="12" className="py-2">
              <h5> Data Koperasi</h5>
            </Col>
            <Col xl="4" lg="4" md="6" sm="12" className="py-2">
              <Label htmlFor="nama_koperasi" className="label">
                Nama Koperasi
              </Label>
              <Input
                type="text"
                name="nama_koperasi"
                className="btn-custom"
                {...register("no_badan_hukum", {
                  required: true,
                })}
              />
            </Col>
            <Col xl="4" lg="4" md="6" sm="12" className="py-2">
              <Label htmlFor="no_badan_hukum" className="label">
                No Badan Hukum
              </Label>
              <Input
                type="number"
                name="no_badan_hukum"
                className="btn-custom"
                {...register("no_badan_hukum", {
                  required: true,
                })}
              />
            </Col>
            <Col xl="4" lg="4" md="6" sm="12" className="py-2">
              <Label htmlFor="receiver" className="label">
                Tanggal Badan Hukum
              </Label>
              <Input
                type="number"
                name="tgl_badan_hukum"
                className="btn-custom"
                {...register("tgl_badan_hukum", {
                  required: true,
                })}
              />
            </Col>
            <Col xl="10" lg="6" md="6" sm="12" className="py-2">
              <Label htmlFor="receiver" className="label">
                Alamat
              </Label>
              <Input
                type="text"
                name="jalan"
                className="btn-custom"
                {...register("jalan", {
                  required: true,
                })}
              />
            </Col>
            <Col xl="1" lg="1" md="6" sm="12" className="py-2">
              <Label htmlFor="receiver" className="label">
                RT
              </Label>
              <Input
                type="text"
                name="rt"
                className="btn-custom"
                {...register("rt", {
                  required: true,
                })}
              />
            </Col>
            <Col xl="1" lg="1" md="6" sm="12" className="py-2">
              <Label htmlFor="receiver" className="label">
                RW
              </Label>
              <Input
                type="text"
                name="rw"
                className="btn-custom"
                {...register("rw", {
                  required: true,
                })}
              />
            </Col>
            <Col xl="4" lg="4" md="6" sm="12" className="py-2">
              <Label htmlFor="kelurahan" className="label">
                Kelurahan
              </Label>
              <Input
                type="text"
                name="kelurahan"
                className="btn-custom"
                {...register("kelurahan", {
                  required: true,
                })}
              />
            </Col>
            <Col xl="4" lg="4" md="6" sm="12" className="py-2">
              <Label htmlFor="kecamatan" className="label">
                Kecamatan
              </Label>
              <Input
                type="text"
                name="kecamatan"
                className="btn-custom"
                {...register("kecamatan", {
                  required: true,
                })}
              />
            </Col>
            <Col xl="4" lg="4" md="6" sm="12" className="py-2">
              <Label htmlFor="telepon" className="label">
                Telepon
              </Label>
              <Input
                type="tel"
                name="telepon"
                className="btn-custom"
                {...register("telepon", {
                  required: true,
                })}
              />
            </Col>
            <Col xl="4" lg="4" md="6" sm="12" className="py-2">
              <Label htmlFor="email" className="label">
                Email
              </Label>
              <Input
                type="text"
                name="email"
                className="btn-custom"
                {...register("email", {
                  required: true,
                })}
              />
            </Col>
            <Col xl="4" lg="4" md="6" sm="12" className="py-2">
              <Label htmlFor="website" className="label">
                Website
              </Label>
              <Input
                type="text"
                name="website"
                className="btn-custom"
                {...register("website", {
                  required: true,
                })}
              />
            </Col>
            <Col xl="4" lg="4" md="6" sm="12" className="py-2">
              <Label htmlFor="website" className="label">
                Status
              </Label>
              <Input
                type="select"
                name="status"
                {...register("website", {
                  required: true,
                })}
                onChange={(e) => setStatusKoperasi(e)}
              >
                <option value="">~</option>
                <option value="aktif">Aktif</option>
                <option value="non_aktif">Non Aktif</option>
              </Input>
            </Col>
            {status === "aktif" && (
              <>
                <Col xl="4" lg="4" md="6" sm="12" className="py-2">
                  <Label htmlFor="jenis_koperasi" className="label">
                    Bentuk Koperasi
                  </Label>
                  <Input
                    type="select"
                    name="bentuk_koperasi"
                    {...register("jenis_koperasi", {
                      required: true,
                    })}
                  >
                    {data.bentuk_koperasi.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </Input>
                </Col>
                <Col xl="4" lg="4" md="6" sm="12" className="py-2">
                  <Label htmlFor="jenis_koperasi" className="label">
                    Jenis Koperasi
                  </Label>
                  <Input
                    type="select"
                    name="jenis_koperasi"
                    {...register("jenis_koperasi", {
                      required: true,
                    })}
                  >
                    {data.jenis_koperasi.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </Input>
                </Col>
                <Col xl="4" lg="4" md="6" sm="12" className="py-2">
                  <Label htmlFor="kelompok_koperasi">Kelompok Koperasi</Label>
                  <Input
                    type="select"
                    name="kelompok_koperasi"
                    {...register("kelompok_koperasi", {
                      required: true,
                    })}
                  >
                    {data.kelompok_koperasi.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </Input>
                </Col>
                <Col xl="4" lg="4" md="6" sm="12" className="py-2">
                  <Label htmlFor="sektor_usaha">Sektor Usaha</Label>
                  <Input
                    type="select"
                    name="sektor_usaha"
                    {...register("sektor_usaha", {
                      required: true,
                    })}
                  >
                    {data.sektor_usaha.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </Input>
                </Col>
              </>
            )}
            {status === "non_aktif" && (
              <>
                <Col xl="4" lg="4" md="6" sm="12" className="py-2">
                  <Label htmlFor="website" className="text-capitalize">
                    tidak aktif sejak tanggal
                  </Label>
                  <Input
                    type="text"
                    name="tgl_non_aktif"
                    className="btn-custom"
                    {...register("tgl_non_aktif", {
                      required: true,
                    })}
                  />
                </Col>
                <Col xl="8" lg="8" md="6" sm="12" className="py-2">
                  <Label htmlFor="website" className="text-capitalize">
                    Keterangan tidak aktif
                  </Label>
                  <Input
                    type="text"
                    name="tgl_non_aktif"
                    className="btn-custom"
                    {...register("tgl_non_aktif", {
                      required: true,
                    })}
                  />
                </Col>
              </>
            )}
            <Col xl="12" lg="12" md="12" sm="12" className="py-2">
              <h5 className="text-uppercase"> Kepengurusan Koperasi</h5>
            </Col>
            <Col xl="4" lg="4" md="6" sm="12" className="py-2">
              <Label htmlFor="tahun_kepengurusan" className="text-capitalize">
                Tahun Kepengurusan
              </Label>
              <Input
                type="text"
                name="tahun_kepengurusan"
                className="btn-custom"
                {...register("tahun_kepengurusan", {
                  required: true,
                })}
              />
            </Col>
            <Col xl="12" lg="12" md="12" sm="12" className="py-1">
              <h5>Ketua</h5>
            </Col>
            {[...Array(ketua)].map((item, index) => (
              <Col xl="4" lg="4" md="4" sm="12" className="py-1" key={index}>
                <Label htmlFor="website" className="text-capitalize">
                  {`Ketua ${index + 1}`}
                </Label>
                <div className="d-flex flex-row">
                  <Input
                    type="text"
                    name={`Ketua ${index + 1}`}
                    className="btn-custom"
                    {...register(`Ketua ${index + 1}`)}
                  />
                  <div className="d-flex flex-column justify-content-center align-items-center p-1">
                    <FontAwesomeIcon
                      icon={faPlus}
                      onClick={() => handleKetua("plus")}
                    />
                    <FontAwesomeIcon
                      icon={faMinus}
                      onClick={() => handleKetua("minus")}
                    />
                  </div>
                </div>
              </Col>
            ))}
            <Col xl="12" lg="12" md="12" sm="12" className="py-1">
              <h5>Bendahara</h5>
            </Col>
            {[...Array(bendahara)].map((item, index) => (
              <Col xl="4" lg="4" md="4" sm="12" className="py-1" key={index}>
                <Label htmlFor="website" className="text-capitalize">
                  {`Bendahara ${index + 1}`}
                </Label>
                <div className="d-flex flex-row">
                  <Input
                    type="text"
                    name={`Bendahara ${index + 1}`}
                    className="btn-custom"
                    {...register(`Bendahara ${index + 1}`)}
                  />
                  <div className="d-flex flex-column justify-content-center align-items-center p-1">
                    <FontAwesomeIcon
                      icon={faPlus}
                      onClick={() => handleBendahara("plus")}
                    />
                    <FontAwesomeIcon
                      icon={faMinus}
                      onClick={() => handleBendahara("minus")}
                    />
                  </div>
                </div>
              </Col>
            ))}
            <Col xl="12" lg="12" md="12" sm="12" className="py-1">
              <h5>Sekretaris</h5>
            </Col>
            {[...Array(sekretaris)].map((item, index) => (
              <Col xl="4" lg="4" md="4" sm="12" className="py-1" key={index}>
                <Label htmlFor="website" className="text-capitalize">
                  {`Sekretaris ${index + 1}`}
                </Label>
                <div className="d-flex flex-row">
                  <Input
                    type="text"
                    name={`Bendahara ${index + 1}`}
                    className="btn-custom"
                    {...register(`Bendahara ${index + 1}`)}
                  />
                  <div className="d-flex flex-column justify-content-center align-items-center p-1">
                    <FontAwesomeIcon
                      icon={faPlus}
                      onClick={() => handleSekretaris("plus")}
                    />
                    <FontAwesomeIcon
                      icon={faMinus}
                      onClick={() => handleSekretaris("minus")}
                    />
                  </div>
                </div>
              </Col>
            ))}
            <Col xl="12" lg="12" md="12" sm="12" className="py-2">
              <h5 className="text-uppercase"> Pengawas Koperasi</h5>
            </Col>
            <Col xl="4" lg="4" md="6" sm="12" className="py-2">
              <Label htmlFor="tahun_pengawas" className="text-capitalize">
                Tahun
              </Label>
              <Input
                type="text"
                name="tahun_pengawas"
                className="btn-custom"
                {...register("tahun_pengawas", {
                  required: true,
                })}
              />
            </Col>
            <Col xl="4" lg="4" md="4" sm="12" className="py-1">
              <Label htmlFor="website" className="text-capitalize">
                Ketua
              </Label>
              <div className="d-flex flex-row">
                <Input
                  type="text"
                  name="ketua_pengawas"
                  className="btn-custom"
                  {...register("ketua_pengawas", {
                    required: true,
                  })}
                />
              </div>
            </Col>
            {[...Array(anggota)].map((item, index) => (
              <Col xl="4" lg="4" md="4" sm="12" className="py-1" key={index}>
                <Label htmlFor="website" className="text-capitalize">
                  {`Anggota ${index + 1}`}
                </Label>
                <div className="d-flex flex-row">
                  <Input
                    type="text"
                    name={`Anggota ${index + 1}`}
                    className="btn-custom"
                    {...register(`Anggota ${index + 1}`)}
                  />
                  <div className="d-flex flex-column justify-content-center align-items-center p-1">
                    <FontAwesomeIcon
                      icon={faPlus}
                      onClick={() => handleAnggota("plus")}
                    />
                    <FontAwesomeIcon
                      icon={faMinus}
                      onClick={() => handleAnggota("minus")}
                    />
                  </div>
                </div>
              </Col>
            ))}
            <Col xl="12" lg="12" md="12" sm="12" className="py-4">
              <h3 className="">2. LEGALITAS LAINNYA</h3>
            </Col>

            <Col xl="4" lg="4" md="6" sm="12" className="py-2">
              <Label htmlFor="tahun_pengawas" className="text-capitalize">
                Apakah Sudah Memiliki Setifikat Nomor Induk Koperasi ?
              </Label>
              <Input
                type="select"
                name="tahun_pengawas"
                onChange={(e) => setStatusSertifikat(e)}
              >
                <option value="">~</option>
                <option value="sudah">Sudah</option>
                <option value="belum">Belum</option>
              </Input>
            </Col>
            {sertifikat === "sudah" && (
              <>
                <Col xl="4" lg="4" md="6" sm="12" className="py-2">
                  <Label
                    htmlFor="no_induk_koperasi_sertifikat"
                    className="label"
                  >
                    Nomor Induk Koperasi Sesuai Sertfikat
                  </Label>
                  <Input
                    type="number"
                    name="no_induk_koperasi_sertifikat"
                    {...register("no_induk_koperasi_sertifikat")}
                  />
                </Col>
              </>
            )}
            {sertifikat === "belum" && (
              <>
                <Col xl="4" lg="4" md="6" sm="12" className="py-2">
                  <Label htmlFor="no_induk_koperasi" className="label">
                    Nomor Induk Koperasi
                  </Label>
                  <Input
                    type="number"
                    name="no_induk_koperasi"
                    {...register("no_induk_koperasi")}
                  />
                </Col>
              </>
            )}
            <Col xl="4" lg="4" md="6" sm="12" className="py-2">
              <Label htmlFor="surat_ijin_simpan_pinjam" className="label">
                Surat Ijin Simpan Pinjam
              </Label>
              <Input
                type="number"
                name="surat_ijin_simpan_pinjam"
                {...register("surat_ijin_simpan_pinjam", {
                  required: true,
                })}
              />
            </Col>
            <Col xl="4" lg="4" md="6" sm="12" className="py-2">
              <Label htmlFor="npwp" className="label">
                NPWP
              </Label>
              <Input
                type="number"
                name="npwp"
                {...register("npwp", {
                  required: true,
                })}
              />
            </Col>
            <Col xl="4" lg="4" md="6" sm="12" className="py-2">
              <Label htmlFor="nib" className="label">
                NIB
              </Label>
              <Input
                type="number"
                name="nib"
                {...register("nib", {
                  required: true,
                })}
              />
            </Col>
            <Col xl="4" lg="4" md="6" sm="12" className="py-2">
              <Label htmlFor="siup" className="label">
                SIUP
              </Label>
              <Input
                type="number"
                name="siup"
                {...register("siup", {
                  required: true,
                })}
              />
            </Col>
            <Col xl="4" lg="4" md="6" sm="12" className="py-2">
              <Label htmlFor="tdp" className="label">
                TDP
              </Label>
              <Input
                type="number"
                name="tdp"
                {...register("tdp", {
                  required: true,
                })}
              />
            </Col>
            <Col xl="12" lg="12" md="12" sm="12" className="py-4">
              <h3 className="">3. INDIKATOR KELEMBAGAAN</h3>
            </Col>
            <Col xl="4" lg="4" md="6" sm="12" className="py-2">
              <Label htmlFor="tahun_kelembagaan" className="text-capitalize">
                Tahun
              </Label>
              <Input
                type="text"
                name="tahun_kelembagaan"
                className="btn-custom"
                {...register("tahun_kelembagaan", {
                  required: true,
                })}
              />
            </Col>
            <Col xl="4" lg="4" md="6" sm="12" className="py-2">
              <Label htmlFor="total_anggota" className="text-capitalize">
                Jumlah Anggota
              </Label>
              <Input
                type="number"
                name="total_anggota"
                className="btn-custom"
                {...register("total_anggota", {
                  required: true,
                })}
              />
            </Col>
            <Col xl="4" lg="4" md="6" sm="12" className="py-2">
              <Label htmlFor="total_anggota_laki" className="text-capitalize">
                Laki-Laki
              </Label>
              <Input
                type="number"
                name="total_anggota_laki"
                className="btn-custom"
                {...register("total_anggota_laki", {
                  required: true,
                })}
              />
            </Col>
            <Col xl="4" lg="4" md="6" sm="12" className="py-2">
              <Label
                htmlFor="total_anggota_perempuan"
                className="text-capitalize"
              >
                Perempuan
              </Label>
              <Input
                type="number"
                name="total_anggota_perempuan"
                className="btn-custom"
                {...register("total_anggota_perempuan", {
                  required: true,
                })}
              />
            </Col>
            <Col xl="4" lg="4" md="6" sm="12" className="py-2">
              <Label htmlFor="jumlah_karyawan" className="text-capitalize">
                Jumlah Karyawan
              </Label>
              <Input
                type="text"
                name="jumlah_karyawan"
                className="btn-custom"
                {...register("jumlah_karyawan", {
                  required: true,
                })}
              />
            </Col>
            <Col xl="12" lg="12" md="12" sm="12" className="py-1">
              <h5>Manajer</h5>
            </Col>
            {[...Array(manajer)].map((item, index) => (
              <Col xl="4" lg="4" md="4" sm="12" className="py-1" key={index}>
                <Label htmlFor="website" className="text-capitalize">
                  {`Manajer ${index + 1}`}
                </Label>
                <div className="d-flex flex-row">
                  <Input
                    type="text"
                    name={`Manajer ${index + 1}`}
                    className="btn-custom"
                    {...register(`Manajer ${index + 1}`)}
                  />
                  <div className="d-flex flex-column justify-content-center align-items-center p-1">
                    <FontAwesomeIcon
                      icon={faPlus}
                      onClick={() => handleManajer("plus")}
                    />
                    <FontAwesomeIcon
                      icon={faMinus}
                      onClick={() => handleManajer("minus")}
                    />
                  </div>
                </div>
              </Col>
            ))}
            <Col xl="4" lg="4" md="6" sm="12" className="py-2">
              <Label htmlFor="tanggal_rat" className="text-capitalize">
                Tanggal RAT
              </Label>
              <Input
                type="text"
                name="tanggal_rat"
                className="btn-custom"
                {...register("tanggal_rat", {
                  required: true,
                })}
              />
            </Col>
            <Col xl="12" lg="12" md="12" sm="12" className="py-4">
              <h3 className="">4. INDIKATOR USAHA</h3>
            </Col>
            <Col xl="4" lg="4" md="6" sm="12" className="py-2">
              <Label htmlFor="modal_sendiri" className="text-capitalize">
                Modal Sendiri
              </Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">Rp</InputGroupAddon>
                <Input
                  type="text"
                  name="modal_sendiri"
                  className="btn-custom"
                  {...register("modal_sendiri", {
                    required: true,
                  })}
                />
              </InputGroup>
            </Col>
            <Col xl="4" lg="4" md="6" sm="12" className="py-2">
              <Label htmlFor="modal_luar" className="text-capitalize">
                Modal Luar
              </Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">Rp</InputGroupAddon>
                <Input
                  type="text"
                  name="modal_luar"
                  className="btn-custom"
                  {...register("modal_luar", {
                    required: true,
                  })}
                />
              </InputGroup>
            </Col>
            <Col xl="4" lg="4" md="6" sm="12" className="py-2">
              <Label htmlFor="nilai_aset" className="text-capitalize">
                Nilai Aset
              </Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">Rp</InputGroupAddon>
                <Input
                  type="text"
                  name="nilai_aset"
                  className="btn-custom"
                  {...register("nilai_aset", {
                    required: true,
                  })}
                />
              </InputGroup>
            </Col>
            <Col xl="4" lg="4" md="6" sm="12" className="py-2">
              <Label htmlFor="volume_usaha" className="text-capitalize">
                Volume Usaha
              </Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">Rp</InputGroupAddon>
                <Input
                  type="text"
                  name="volume_usaha"
                  className="btn-custom"
                  {...register("volume_usaha", {
                    required: true,
                  })}
                />
              </InputGroup>
            </Col>
            <Col xl="4" lg="4" md="6" sm="12" className="py-2">
              <Label htmlFor="SHU" className="text-capitalize">
                SHU
              </Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">Rp</InputGroupAddon>
                <Input
                  type="text"
                  name="SHU"
                  className="btn-custom"
                  {...register("SHU", {
                    required: true,
                  })}
                />
              </InputGroup>
            </Col>
            <Col xl="12" lg="12" md="12" sm="12" className="py-4">
              <h3 className="">5. PELAKSANAAN DIKLAT BAGI ANGGOTA</h3>
            </Col>
            {[...Array(diklat)].map((item, index) => (
              <>
                <Col xl="7" lg="7" md="4" sm="12" className="py-1" key={index}>
                  <Label htmlFor="website" className="text-capitalize">
                    {`Jenis Diklat `}
                  </Label>
                  <div className="d-flex flex-row">
                    <Input
                      type="text"
                      name={`Jenis Diklat ${index + 1}`}
                      className="btn-custom"
                      {...register(`Jenis Diklat ${index + 1}`)}
                    />
                  </div>
                </Col>
                <Col xl="5" lg="5" md="4" sm="12" className="py-1">
                  <Label htmlFor="website" className="text-capitalize">
                    {`Tahun Diklat `}
                  </Label>
                  <div className="d-flex flex-row">
                    <Input
                      type="text"
                      name={`Tahun Diklat ${index + 1}`}
                      className="btn-custom"
                      {...register(`Tahun Diklat ${index + 1}`)}
                    />
                    <div className="d-flex flex-column justify-content-center align-items-center p-1 px-3">
                      <FontAwesomeIcon
                        icon={faPlus}
                        onClick={() => handleDiklat("plus")}
                      />
                      <FontAwesomeIcon
                        icon={faMinus}
                        onClick={() => handleDiklat("minus")}
                      />
                    </div>
                  </div>
                </Col>
              </>
            ))}
            <Col xl="4" lg="4" md="6" sm="12" className="py-2">
              <Label htmlFor="anggota_telah_diklat" className="label">
                Total jumlah Anggota yang telah didiklat
              </Label>
              <Input
                type="number"
                name="anggota_telah_diklat"
                {...register("anggota_telah_diklat", {
                  required: true,
                })}
              />
            </Col>
            <Col xl="12" lg="12" md="12" sm="12" className="py-4">
              <h3 className="">6. FASILITAS PEMBIAYAAN</h3>
            </Col>
            {[...Array(pembiayaan)].map((item, index) => (
              <>
                <Col xl="7" lg="7" md="4" sm="12" className="py-1" key={index}>
                  <Label htmlFor="website" className="text-capitalize">
                    {`Lembaga Pembiayaan`}
                  </Label>
                  <div className="d-flex flex-row">
                    <Input
                      type="text"
                      name={`lembaga_pembiayaan_${index + 1}`}
                      className="btn-custom"
                      {...register(`lembaga_pembiayaan_${index + 1}`)}
                    />
                  </div>
                </Col>
                <Col xl="5" lg="5" md="4" sm="12" className="py-1">
                  <Label
                    htmlFor={`tahun_pembiayaan_${index + 1}`}
                    className="text-capitalize"
                  >
                    {`Tahun `}
                  </Label>
                  <div className="d-flex flex-row">
                    <Input
                      type="text"
                      name={`tahun_pembiayaan_${index + 1}`}
                      className="btn-custom"
                      {...register(`tahun_pembiayaan_${index + 1}`)}
                    />
                    <div className="d-flex flex-column justify-content-center align-items-center p-1 px-3">
                      <FontAwesomeIcon
                        icon={faPlus}
                        onClick={() => handlePembiayaan("plus")}
                      />
                      <FontAwesomeIcon
                        icon={faMinus}
                        onClick={() => handlePembiayaan("minus")}
                      />
                    </div>
                  </div>
                </Col>
              </>
            ))}
            <Col xl="12" lg="12" md="12" sm="12" className="py-4">
              <h3 className="">7. FASILITAS PEMASARAN</h3>
            </Col>
            {[...Array(pemsaran)].map((item, index) => (
              <>
                <Col xl="7" lg="7" md="4" sm="12" className="py-1" key={index}>
                  <Label htmlFor="website" className="text-capitalize">
                    {`Jenis Fasilitas Pemasaran `}
                  </Label>
                  <div className="d-flex flex-row">
                    <Input
                      type="text"
                      name={`Jenis Fasilitas Pemasaran_${index + 1}`}
                      className="btn-custom"
                      {...register(`Jenis Fasilitas Pemasaran_${index + 1}`)}
                    />
                  </div>
                </Col>
                <Col xl="5" lg="5" md="4" sm="12" className="py-1">
                  <Label
                    htmlFor={`tahun_pembiayaan_${index + 1}`}
                    className="text-capitalize"
                  >
                    {`Tahun `}
                  </Label>
                  <div className="d-flex flex-row">
                    <Input
                      type="text"
                      name={`tahun_pembiayaan_${index + 1}`}
                      className="btn-custom"
                      {...register(`tahun_pembiayaan_${index + 1}`)}
                    />
                    <div className="d-flex flex-column justify-content-center align-items-center p-1 px-3">
                      <FontAwesomeIcon
                        icon={faPlus}
                        onClick={() => handlePemasaran("plus")}
                      />
                      <FontAwesomeIcon
                        icon={faMinus}
                        onClick={() => handlePemasaran("minus")}
                      />
                    </div>
                  </div>
                </Col>
              </>
            ))}
            <Col xl="12" lg="12" md="12" sm="12" className="py-4">
              <h3 className="">8. KEMITRAAN</h3>
            </Col>
            {[...Array(mitra)].map((item, index) => (
              <>
                <Col xl="5" lg="5" md="4" sm="12" className="py-1" key={index}>
                  <Label htmlFor="website" className="text-capitalize">
                    {`Lembaga Kemitraan `}
                  </Label>
                  <div className="d-flex flex-row">
                    <Input
                      type="text"
                      name={`Jenis Fasilitas Pemasaran_${index + 1}`}
                      className="btn-custom"
                      {...register(`Jenis Fasilitas Pemasaran_${index + 1}`)}
                    />
                  </div>
                </Col>
                <Col xl="5" lg="5" md="4" sm="12" className="py-1">
                  <Label htmlFor="website" className="text-capitalize">
                    {`Bidang`}
                  </Label>
                  <div className="d-flex flex-row">
                    <Input
                      type="text"
                      name={`Jenis Fasilitas Pemasaran_${index + 1}`}
                      className="btn-custom"
                      {...register(`Jenis Fasilitas Pemasaran_${index + 1}`)}
                    />
                  </div>
                </Col>
                <Col xl="2" lg="2" md="4" sm="12" className="py-1" key={index}>
                  <Label
                    htmlFor={`tahun_pembiayaan_${index + 1}`}
                    className="text-capitalize"
                  >
                    {`Tahun `}
                  </Label>
                  <div className="d-flex flex-row">
                    <Input
                      type="text"
                      name={`tahun_pembiayaan_${index + 1}`}
                      className="btn-custom"
                      {...register(`tahun_pembiayaan_${index + 1}`)}
                    />
                    <div className="d-flex flex-column justify-content-center align-items-center p-1 px-3">
                      <FontAwesomeIcon
                        icon={faPlus}
                        onClick={() => handleMitra("plus")}
                      />
                      <FontAwesomeIcon
                        icon={faMinus}
                        onClick={() => handleMitra("minus")}
                      />
                    </div>
                  </div>
                </Col>
              </>
            ))}
            <Col xl="12" lg="12" md="12" sm="12" className="py-4">
              <h3 className="">9. KEPATUHAN DI BIDANG KELEMBAGAAN</h3>
            </Col>
            <Col xl="6" lg="6" md="6" sm="12" className="py-2">
              <Label htmlFor="website" className="label">
                Aturan Rumah Tangga
              </Label>
              <Input
                type="select"
                name="status"
                {...register("website", {
                  required: true,
                })}
              >
                <option value="">~</option>
                <option value="aktif">Ada</option>
                <option value="non_aktif">Belum Ada</option>
              </Input>
            </Col>
            <Col xl="6" lg="6" md="6" sm="12" className="py-2">
              <Label htmlFor="website" className="label">
                Peraturan Khusus
              </Label>
              <Input
                type="select"
                {...register("website", {
                  required: true,
                })}
                onChange={(e) => setHandlePeraturan(e)}
              >
                <option value="">~</option>
                <option value="aktif">Ada</option>
                <option value="non_aktif">Belum Ada</option>
              </Input>
            </Col>
            {console.log(peraturan, "peraturan")}
            {peraturan === "aktif" && (
              <>
                <Col xl="12" lg="12" md="12" sm="12" className="py-2">
                  <h5 className="text-uppercase"> Peraturan Khusus</h5>
                </Col>
                {[...Array(aturanKhusus)].map((item, index) => (
                  <Col
                    xl="12"
                    lg="12"
                    md="12"
                    sm="12"
                    className="py-1"
                    key={index}
                  >
                    <Label htmlFor="website" className="text-capitalize">
                      {`Aturan Khusus ${index + 1}`}
                    </Label>
                    <div className="d-flex flex-row">
                      <Input
                        type="text"
                        name={`Bendahara ${index + 1}`}
                        className="btn-custom"
                        {...register(`Bendahara ${index + 1}`)}
                      />
                      <div className="d-flex flex-column justify-content-center align-items-center p-1">
                        <FontAwesomeIcon
                          icon={faPlus}
                          onClick={() => handleAturanKhusus("plus")}
                        />
                        <FontAwesomeIcon
                          icon={faMinus}
                          onClick={() => handleAturanKhusus("minus")}
                        />
                      </div>
                    </div>
                  </Col>
                ))}
                <Col xl="12" lg="12" md="12" sm="12" className="py-2">
                  <h5 className="text-uppercase">
                    Standar Operasional Manajemen
                  </h5>
                </Col>
                {[...Array(operasionalManajemen)].map((item, index) => (
                  <Col
                    xl="12"
                    lg="12"
                    md="12"
                    sm="12"
                    className="py-1"
                    key={index}
                  >
                    <Label htmlFor="website" className="text-capitalize">
                      {`Operasional Manajemen ${index + 1}`}
                    </Label>
                    <div className="d-flex flex-row">
                      <Input
                        type="text"
                        name={`Bendahara ${index + 1}`}
                        className="btn-custom"
                        {...register(`Bendahara ${index + 1}`)}
                      />
                      <div className="d-flex flex-column justify-content-center align-items-center p-1">
                        <FontAwesomeIcon
                          icon={faPlus}
                          onClick={() => handleOperasionalManajemen("plus")}
                        />
                        <FontAwesomeIcon
                          icon={faMinus}
                          onClick={() => handleOperasionalManajemen("minus")}
                        />
                      </div>
                    </div>
                  </Col>
                ))}
                <Col xl="12" lg="12" md="12" sm="12" className="py-2">
                  <h5 className="text-uppercase">
                    Standar Operasional Prosedur
                  </h5>
                </Col>
                {[...Array(operasionalProsedur)].map((item, index) => (
                  <Col
                    xl="12"
                    lg="12"
                    md="12"
                    sm="12"
                    className="py-1"
                    key={index}
                  >
                    <Label htmlFor="website" className="text-capitalize">
                      {`Operasional Manajemen ${index + 1}`}
                    </Label>
                    <div className="d-flex flex-row">
                      <Input
                        type="text"
                        name={`Bendahara ${index + 1}`}
                        className="btn-custom"
                        {...register(`Bendahara ${index + 1}`)}
                      />
                      <div className="d-flex flex-column justify-content-center align-items-center p-1">
                        <FontAwesomeIcon
                          icon={faPlus}
                          onClick={() => handleOperasionalProsedur("plus")}
                        />
                        <FontAwesomeIcon
                          icon={faMinus}
                          onClick={() => handleOperasionalProsedur("minus")}
                        />
                      </div>
                    </div>
                  </Col>
                ))}
              </>
            )}
            <Col xl="12" lg="12" md="12" sm="12" className="py-4">
              <h3 className="">
                10. PENILAIAN KESEHATAN KSP/USP dan KSPPS/USPPS
              </h3>
            </Col>
            <Col xl="5" lg="5" md="5" sm="12" className="py-2">
              <Label htmlFor="website" className="label">
                Penilaian
              </Label>
              <Input
                type="select"
                {...register("website", {
                  required: true,
                })}
              >
                <option value="">~</option>
                <option value="aktif">Sudah di Nilai</option>
                <option value="non_aktif">Belum di Nilai</option>
              </Input>
            </Col>
            <Col xl="5" lg="5" md="5" sm="12" className="py-2">
              <Label htmlFor="website" className="label">
                Predikat Penilaian
              </Label>
              <Input
                type="select"
                {...register("website", {
                  required: true,
                })}
              >
                <option>~</option>
                <option>Sehat</option>
                <option>Cukup sehat</option>
                <option>Kurang Sehat</option>
                <option>Tidak Sehat</option>
                <option>Sangat tidak sehat</option>
              </Input>
            </Col>
            <Col xl="2" lg="2" md="2" sm="12" className="py-2">
              <Label htmlFor="no_badan_hukum" className="label">
                SKOR
              </Label>
              <Input
                type="number"
                name="no_badan_hukum"
                className="btn-custom"
                {...register("no_badan_hukum", {
                  required: true,
                })}
              />
            </Col>
            <Col xl="12" lg="12" md="12" sm="12" className="py-4">
              <h3 className="">11. PENILAIAN PEMERINGKATAN KOPERASI </h3>
            </Col>
            <Col xl="6" lg="6" md="6" sm="12" className="py-2">
              <Label htmlFor="tahun_pengawas" className="text-capitalize">
                Apakah Sudah Memiliki Setifikat Nomor Induk Koperasi ?
              </Label>
              <Input
                type="select"
                name="tahun_pengawas"
                onChange={(e) => setStatusPemeringkatan(e)}
              >
                <option value="">~</option>
                <option value="sudah">Sudah dinilai pemeringkatan</option>
                <option value="belum">Belum dinilai pemeringkatan</option>
              </Input>
            </Col>
            {pemeringkatan === "sudah" && (
              <>
                <Col xl="6" lg="6" md="6" sm="12" className="py-2">
                  <Label htmlFor="tahun_pengawas" className="text-capitalize">
                    Apakah Sudah Memiliki Setifikat Nomor Induk Koperasi ?
                  </Label>
                  <Input
                    type="select"
                    name="tahun_pengawas"
                    onChange={(e) => setStatusPemeringkatan(e)}
                  >
                    <option>~</option>
                    <option>Sangat Berkualitas</option>
                    <option>Cukup Berkualitas</option>
                    <option>Tidak Berkualitas</option>
                  </Input>
                </Col>
              </>
            )}
            <Col xl="12" lg="12" md="12" sm="12" className="py-1">
              <Row className="d-flex justify-content-end">
                <Col xl="4" lg="4" md="8" sm="12" className="py-1">
                  <Button
                    block
                    color="primary"
                    type="submit"
                    className="bg-success my-3"
                    // disabled={loading}
                  >
                    {/* {loading ? <Spinner color="light" /> : "Masuk"} */}
                    SUBMIT
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </div>
    </Style>
  );
};

export default InputForm;
