import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Form8 = ({ onSubmit, store, setValue, value }) => {
  const { register, control, handleSubmit, reset, watch } = useForm({
    defaultValues: store,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "peraturanKhusus",
  });
  const {
    fields: dataSOP,
    append: appendSOP,
    remove: removeSOP,
  } = useFieldArray({
    control,
    name: "SOP",
  });
  const {
    fields: dataSOM,
    append: appendSOM,
    remove: removeSOM,
  } = useFieldArray({
    control,
    name: "SOM",
  });

  const [status, setStatus] = useState(store.aturanKhusus);

  const peraturanKhusus = (e) => {
    const value = e.target.value;
    setStatus(value);
  };
  console.log(status, "status");
  console.log(fields, "fields");
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xl="12" lg="12" md="12" sm="12" className="py-2">
            <h1 className="text-center">Kemitraan</h1>
          </Col>
          <Col xl="6" lg="6" md="6" sm="12" className="py-2">
            <label htmlFor="aturanKhusus" className="">
              Aturan Rumah Tangga
            </label>
            <select className="customInput" {...register("aturanRT")}>
              <option value="">~</option>
              <option value="sudah">Ada </option>
              <option value="belum">Belum Ada</option>
            </select>
          </Col>
          <Col xl="6" lg="6" md="6" sm="12" className="py-2">
            <label htmlFor="aturanKhusus" className="">
              Aturan Khusus
            </label>
            <select
              className="customInput"
              {...register("aturanKhusus")}
              onChange={(e) => peraturanKhusus(e)}
            >
              <option value="">~</option>
              <option value="sudah">Ada </option>
              <option value="belum">Belum Ada</option>
            </select>
          </Col>
        </Row>
        {status === "sudah" && (
          <>
            <Row>
              <Col xl="12" lg="12" md="12" sm="12" className="py-2">
                <h1 className="">Peraturan Khusus</h1>
              </Col>
            </Row>
            {fields.map((item, index) => {
              return (
                <Row key={index}>
                  <Col xl="12" lg="12" md="12" sm="12" className="py-1">
                    <label htmlFor="Lembaga" className="text-capitalize">
                      {`Peraturan ${index + 1} `}
                    </label>
                    <div className="d-flex flex-row">
                      <input
                        className="customInput"
                        defaultValue={`${item.peraturan}`} // make sure to set up defaultValue
                        {...register(`peraturanKhusus[${index}].peraturan`)}
                      />
                      <div className="d-flex flex-column justify-content-center align-items-center p-1 ml-2">
                        {fields.length !== 10 && (
                          <FontAwesomeIcon
                            icon={faPlus}
                            onClick={() => {
                              if (fields.length < 10) {
                                append({ peraturan: "" });
                              }
                            }}
                          />
                        )}

                        {fields.length !== 1 && (
                          <FontAwesomeIcon
                            icon={faMinus}
                            onClick={() => remove(index)}
                          />
                        )}
                      </div>
                    </div>
                  </Col>
                </Row>
              );
            })}
            <Row>
              <Col xl="12" lg="12" md="12" sm="12" className="py-2">
                <h1 className="">Standar Operasional Prosedur</h1>
              </Col>
            </Row>
            {dataSOP.map((item, index) => {
              return (
                <Row key={index}>
                  <Col xl="12" lg="12" md="12" sm="12" className="py-1">
                    <label
                      htmlFor={`SOP ${index + 1} `}
                      className="text-capitalize"
                    >
                      {`SOP ${index + 1} `}
                    </label>
                    <div className="d-flex flex-row">
                      <input
                        className="customInput"
                        defaultValue={`${item.peraturan}`} // make sure to set up defaultValue
                        {...register(`SOP[${index}].peraturan`)}
                      />
                      <div className="d-flex flex-column justify-content-center align-items-center p-1 ml-2">
                        {dataSOP.length !== 10 && (
                          <FontAwesomeIcon
                            icon={faPlus}
                            onClick={() => {
                              if (fields.length < 10) {
                                appendSOP({ peraturan: "" });
                              }
                            }}
                          />
                        )}

                        {dataSOP.length !== 1 && (
                          <FontAwesomeIcon
                            icon={faMinus}
                            onClick={() => removeSOP(index)}
                          />
                        )}
                      </div>
                    </div>
                  </Col>
                </Row>
              );
            })}
            <Row>
              <Col xl="12" lg="12" md="12" sm="12" className="py-2">
                <h1 className="">Standar Operasional Manajemen</h1>
              </Col>
            </Row>
            {dataSOM.map((item, index) => {
              return (
                <Row key={index}>
                  <Col xl="12" lg="12" md="12" sm="12" className="py-1">
                    <label
                      htmlFor={`SOM ${index + 1} `}
                      className="text-capitalize"
                    >
                      {`SOM ${index + 1} `}
                    </label>
                    <div className="d-flex flex-row">
                      <input
                        className="customInput"
                        defaultValue={`${item.peraturan}`} // make sure to set up defaultValue
                        {...register(`SOM[${index}].peraturan`)}
                      />
                      <div className="d-flex flex-column justify-content-center align-items-center p-1 ml-2">
                        {dataSOM.length !== 10 && (
                          <FontAwesomeIcon
                            icon={faPlus}
                            onClick={() => {
                              if (fields.length < 10) {
                                appendSOM({ peraturan: "" });
                              }
                            }}
                          />
                        )}

                        {dataSOM.length !== 1 && (
                          <FontAwesomeIcon
                            icon={faMinus}
                            onClick={() => removeSOM(index)}
                          />
                        )}
                      </div>
                    </div>
                  </Col>
                </Row>
              );
            })}
          </>
        )}

        <Row>
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

export default Form8;
