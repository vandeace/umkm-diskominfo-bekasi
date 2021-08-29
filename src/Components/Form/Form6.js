import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Form6 = ({ onSubmit, store, setValue, value }) => {
  const { register, control, handleSubmit, reset, watch } = useForm({
    defaultValues: store,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "diklat",
  });
  console.log(fields, "fields");
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xl="12" lg="12" md="12" sm="12" className="py-2">
            <h1 className="text-center"> Pelaksanaan Diklat</h1>
          </Col>
          <Col xl="2" lg="2" md="6" sm="12" className="py-2">
            <label htmlFor="diklatAnggota" className="">
              Anggota yg telah ikut diklat
            </label>

            <input className="customInput" {...register("diklatAnggota")} />
          </Col>
        </Row>

        {fields.map((item, index) => {
          return (
            <Row key={index}>
              <Col xl="2" lg="2" md="2" sm="12" className="py-1">
                <label htmlFor="website" className="text-capitalize">
                  {`Tahun`}
                </label>

                <input
                  className="customInput"
                  defaultValue={`${item.tahun}`} // make sure to set up defaultValue
                  {...register(`diklat[${index}].tahun`)}
                />
              </Col>
              <Col xl="9" lg="9" md="4" sm="12" className="py-1">
                <label htmlFor="website" className="text-capitalize">
                  {`Jenis `}
                </label>
                <div className="d-flex flex-row">
                  <input
                    className="customInput"
                    defaultValue={`${item.jenis}`} // make sure to set up defaultValue
                    {...register(`diklat[${index}].jenis`)}
                  />
                  <div className="d-flex flex-column justify-content-center align-items-center p-1 ml-2">
                    <FontAwesomeIcon
                      icon={faPlus}
                      onClick={() => {
                        if (fields.length < 5) {
                          append({ jenis: "", tahun: "" });
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
            </Row>
          );
        })}
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

export default Form6;
