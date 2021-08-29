import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Form3 = ({ onSubmit, store, setValue, value }) => {
  const { register, control, handleSubmit, reset, watch } = useForm({
    defaultValues: store,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "anggotaPengawasan",
  });
  console.log(fields, "fields");
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xl="12" lg="12" md="12" sm="12" className="py-2">
            <h1 className="text-center"> Pengawas Koperasi</h1>
          </Col>
          <Col xl="2" lg="2" md="6" sm="12" className="py-2">
            <label htmlFor="tahunPengawasan" className="">
              Tahun
            </label>

            <input className="customInput" {...register("tahunPengawasan")} />
          </Col>
        </Row>
        <Row>
          <Col xl="4" lg="4" md="6" sm="12" className="py-2">
            <label htmlFor="ketuaPengawasan" className="">
              Ketua
            </label>

            <input className="customInput" {...register("ketuaPengawasan")} />
          </Col>
        </Row>
        <Row>
          {fields.map((item, index) => {
            return (
              <Col xl="4" lg="4" md="4" sm="12" className="py-1" key={index}>
                <label htmlFor="website" className="text-capitalize">
                  {`Anggota ${index + 1}`}
                </label>
                <div className="d-flex flex-row">
                  {console.log(
                    `anggotaPengawasan[${index}].nama`,
                    "data array"
                  )}
                  <input
                    className="customInput"
                    defaultValue={`${item.nama}`} // make sure to set up defaultValue
                    {...register(`anggotaPengawasan[${index}].nama`)}
                  />
                  <div className="d-flex flex-column justify-content-center align-items-center p-1">
                    <FontAwesomeIcon
                      icon={faPlus}
                      onClick={() => {
                        if (fields.length < 3) {
                          append({ nama: "" });
                        }
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faMinus}
                      onClick={() => remove(index)}
                    />
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
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

export default Form3;
