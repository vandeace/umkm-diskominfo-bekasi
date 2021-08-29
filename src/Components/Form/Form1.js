import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Col, Row } from "reactstrap";
import ReactDatePicker from "react-datepicker";
import { convert } from "../../Utils/date";
import { data } from "../../Utils/DropdownData";

import moment from "moment";

const Form1 = ({ onSubmit, store, setValue, setStore }) => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: store,
  });
  const [status, setStatus] = useState(store.status);

  const setStatusKoperasi = (e) => {
    const value = e.target.value;
    setStatus(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row className="p-3">
          <Col xl="12" lg="12" md="12" sm="12" className="py-2">
            <h1 className="text-center">KELEMBAGAAN KOPERASI</h1>
          </Col>
        </Row>
        <Row className="p-3">
          <Col xl="5" lg="5" md="6" sm="12" className="py-2">
            <label htmlFor="namaKoperasi" className="">
              Nama Koperasi
            </label>

            <input
              className="customInput"
              placeholder="Nama Koperasi"
              {...register("namaKoperasi", {
                required: true,
              })}
            />
            {errors.namaKoperasi && (
              <p className="text-danger"> data tidak boleh kosong </p>
            )}
          </Col>
          <Col xl="5" lg="5" md="6" sm="12" className="py-2">
            <label htmlFor="nomorBadanHukum" className="">
              No Badan Hukum
            </label>

            <input
              className="customInput"
              placeholder="No Badan Hukum"
              {...register("nomorBadanHukum", {
                required: true,
              })}
            />
            {errors.nomorBadanHukum && (
              <p className="text-danger"> data tidak boleh kosong </p>
            )}
          </Col>
          <Col xl="2" lg="2" md="6" sm="12" className="py-2">
            <label htmlFor="tanggalBadanHukum" className="">
              Tgl Badan Hukum
            </label>
            <br />

            <Controller
              control={control}
              name="tanggalBadanHukum"
              rules={{ required: true }}
              render={(props) => (
                <ReactDatePicker
                  className="customInput"
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select date"
                  onChange={(e) => props.field.onChange(e)}
                  selected={props.field.value}
                />
              )}
            />
            {errors.tanggalBadanHukum && (
              <p className="text-danger"> data tidak boleh kosong </p>
            )}
          </Col>
          <Col xl="10" lg="10" md="6" sm="12" className="py-2">
            <label htmlFor="jalan" className="">
              Jalan
            </label>

            <input
              className="customInput"
              placeholder="Jalan"
              {...register("jalan", {
                required: true,
              })}
            />
            {errors.jalan && (
              <p className="text-danger"> data tidak boleh kosong </p>
            )}
          </Col>
          <Col xl="1" lg="1" md="6" sm="12" className="py-2">
            <label htmlFor="rt" className="">
              RT
            </label>

            <input
              className="customInput"
              placeholder="RT"
              {...register("rt", {
                required: true,
              })}
            />
            {errors.rt && (
              <p className="text-danger"> data tidak boleh kosong </p>
            )}
          </Col>
          <Col xl="1" lg="1" md="6" sm="12" className="py-2">
            <label htmlFor="rw" className="">
              RW
            </label>

            <input
              className="customInput"
              placeholder="RW"
              {...register("rw", {
                required: true,
              })}
            />
            {errors.rw && (
              <p className="text-danger"> data tidak boleh kosong </p>
            )}
          </Col>
          <Col xl="4" lg="4" md="6" sm="12" className="py-2">
            <label htmlFor="kelurahan" className="">
              Kelurahan
            </label>

            <input
              className="customInput"
              placeholder="Kelurahan"
              {...register("kelurahan", {
                required: true,
              })}
            />
            {errors.kelurahan && (
              <p className="text-danger"> data tidak boleh kosong </p>
            )}
          </Col>
          <Col xl="4" lg="4" md="6" sm="12" className="py-2">
            <label htmlFor="kecamatan" className="">
              Kecamatan
            </label>

            <input
              className="customInput"
              placeholder="Kecamatan"
              {...register("kecamatan", {
                required: true,
              })}
            />
            {errors.kecamatan && (
              <p className="text-danger"> data tidak boleh kosong </p>
            )}
          </Col>
          <Col xl="4" lg="4" md="6" sm="12" className="py-2">
            <label htmlFor="telepon" className="">
              Number Phone
            </label>

            <input
              className="customInput"
              placeholder="Number Phone"
              {...register("telepon", {
                required: true,
              })}
            />
            {errors.telepon && (
              <p className="text-danger"> data tidak boleh kosong </p>
            )}
          </Col>
          <Col xl="4" lg="4" md="6" sm="12" className="py-2">
            <label htmlFor="email" className="">
              <span className="optional">*</span> Email
            </label>

            <input
              className="customInput"
              placeholder="Email"
              {...register("email")}
            />
          </Col>
          <Col xl="4" lg="4" md="6" sm="12" className="py-2">
            <label htmlFor="website" className="">
              <span className="optional">*</span> Website
            </label>

            <input
              className="customInput"
              placeholder="Website"
              {...register("website")}
            />
          </Col>
          <Col xl="4" lg="4" md="6" sm="12" className="py-2">
            <label htmlFor="nama_koperasi" className="">
              Status Koperasi
            </label>
            <select
              className="customInput"
              {...register("status")}
              onChange={(e) => setStatusKoperasi(e)}
            >
              <option value="">~</option>
              <option value="aktif">Aktif</option>
              <option value="non_aktif">Non Aktif</option>
            </select>
          </Col>
          {status === "aktif" && (
            <>
              <Col xl="4" lg="4" md="6" sm="12" className="py-2">
                <label htmlFor="bentukKoperasi" className="">
                  <span className="optional">*</span> Bentuk Koperasi
                </label>

                <select className="customInput" {...register("bentukKoperasi")}>
                  {data.bentuk_koperasi.map((item, index) => (
                    <option key={index}>{item}</option>
                  ))}
                </select>
              </Col>
              <Col xl="4" lg="4" md="6" sm="12" className="py-2">
                <label htmlFor="jenisKoperasi" className="">
                  <span className="optional">*</span> Jenis Koperasi
                </label>

                <select className="customInput" {...register("jenisKoperasi")}>
                  {data.jenis_koperasi.map((item, index) => (
                    <option key={index}>{item}</option>
                  ))}
                </select>
              </Col>
              <Col xl="4" lg="4" md="6" sm="12" className="py-2">
                <label htmlFor="kelompokKoperasi" className="">
                  <span className="optional">*</span> Kelompok Koperasi
                </label>
                <select
                  className="customInput"
                  {...register("kelompokKoperasi")}
                >
                  {data.kelompok_koperasi.map((item, index) => (
                    <option key={index}>{item}</option>
                  ))}
                </select>
              </Col>
              <Col xl="4" lg="4" md="6" sm="12" className="py-2">
                <label htmlFor="sektorUsaha" className="">
                  <span className="optional">*</span> Sektor Usaha
                </label>
                <select className="customInput" {...register("sektorUsaha")}>
                  {data.sektor_usaha.map((item, index) => (
                    <option key={index}>{item}</option>
                  ))}
                </select>
              </Col>
            </>
          )}
          {status === "non_aktif" && (
            <>
              <Col xl="2" lg="2" md="6" sm="12" className="py-2">
                <label htmlFor="tglNonAktif" className="">
                  Tgl Non Aktif
                </label>
                <br />

                <Controller
                  control={control}
                  name="tglNonAktif"
                  render={(props) => (
                    <ReactDatePicker
                      className="customInput"
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Select date"
                      onChange={(e) => props.field.onChange(e)}
                      selected={props.field.value}
                    />
                  )}
                />
                {errors.tglNonAktif && (
                  <p className="text-danger"> data tidak boleh kosong </p>
                )}
              </Col>
              <Col xl="10" lg="10" md="6" sm="12" className="py-2">
                <label htmlFor="ketNonAktif" className="">
                  Keterangan NonAktif
                </label>

                <input
                  className="customInput"
                  placeholder="Keterangan NonAktif"
                  {...register("ketNonAktif")}
                />
                {errors.ketNonAktif && (
                  <p className="text-danger"> data tidak boleh kosong </p>
                )}
              </Col>
              <Col xl="12" lg="12" md="12" sm="12" className="py-2">
                <input
                  className="customSubmit"
                  type="submit"
                  title="next"
                  value="submit"
                />
              </Col>
            </>
          )}
          {status !== "non_aktif" && (
            <Col xl="12" lg="12" md="12" sm="12" className="py-2">
              <input
                className="customSubmit"
                type="submit"
                title="next"
                value="next >>"
              />
            </Col>
          )}
        </Row>
      </form>
      {/* <button onClick={() => setValue(1)}>Next</button> */}
    </div>
  );
};

export default Form1;
