import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Col, Row } from "reactstrap";

const Form1 = ({ onSubmit, store, setValue, setStore, value }) => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: store,
  });
  const [status, setStatus] = useState(store.SNIK);

  const setStatusKoperasi = (e) => {
    const value = e.target.value;
    setStatus(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row className="p-3">
          <Col xl="12" lg="12" md="12" sm="12" className="py-2">
            <h1 className="text-center">LEGALITAS</h1>
          </Col>
        </Row>
        <Row className="p-3">
          <Col xl="4" lg="4" md="6" sm="12" className="py-2">
            <label htmlFor="SNIK" className="">
              Sudah Memiliki Setifikat Nomor Induk Koperasi
            </label>
            <select
              className="customInput"
              {...register("SNIK")}
              onChange={(e) => setStatusKoperasi(e)}
            >
              <option value="">~</option>
              <option value="aktif">Sudah </option>
              <option value="non_aktif">Belum</option>
            </select>
          </Col>
          {status === "aktif" && (
            <>
              <Col xl="4" lg="4" md="6" sm="12" className="py-2">
                <label htmlFor="nomorSNIK" className="">
                  Nomor SNIK
                </label>

                <input
                  className="customInput"
                  placeholder="Nomor SNIK"
                  {...register("nomorSNIK")}
                />
              </Col>
            </>
          )}
          {status === "non_aktif" && (
            <>
              <Col xl="4" lg="4" md="6" sm="12" className="py-2">
                <label htmlFor="nomorNIK" className="">
                  Nomor NIK
                </label>

                <input
                  className="customInput"
                  placeholder="Nomor NIK"
                  {...register("nomorNIK")}
                />
              </Col>
            </>
          )}
          <Col xl="4" lg="4" md="6" sm="12" className="py-2">
            <label htmlFor="SISP" className="">
              Surat Ijin Simpan Pinjam
            </label>

            <input
              className="customInput"
              placeholder="Nomor SISP"
              {...register("SISP")}
            />
          </Col>
          <Col xl="4" lg="4" md="6" sm="12" className="py-2">
            <label htmlFor="NPWP" className="">
              NPWP
            </label>

            <input
              className="customInput"
              placeholder="Nomor NPWP"
              {...register("NPWP")}
            />
          </Col>
          <Col xl="4" lg="4" md="6" sm="12" className="py-2">
            <label htmlFor="NIB" className="">
              NIB
            </label>

            <input
              className="customInput"
              placeholder="Nomor NIB"
              {...register("NIB")}
            />
          </Col>
          <Col xl="4" lg="4" md="6" sm="12" className="py-2">
            <label htmlFor="SIUP" className="">
              SIUP
            </label>

            <input
              className="customInput"
              placeholder="Nomor SIUP"
              {...register("SIUP")}
            />
          </Col>
          <Col xl="4" lg="4" md="6" sm="12" className="py-2">
            <label htmlFor="TDP" className="">
              TDP
            </label>

            <input
              className="customInput"
              placeholder="Nomor TDP"
              {...register("TDP")}
            />
          </Col>
        </Row>
        <Row className="p-3">
          <Col xl="6" lg="6" md="6" sm="6" className="py-2">
            <input
              className="customSubmit"
              type="button"
              onClick={() => setValue(value - 1)}
              value="<< prev"
            />
          </Col>
          <Col xl="6" lg="6" md="6" sm="6" className="py-2">
            <input
              className="customSubmit"
              type="submit"
              title="next"
              value="next >>"
            />
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default Form1;
