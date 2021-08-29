import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Form8 = ({ onSubmit, store, setValue, value }) => {
  const { register, control, handleSubmit, reset, watch } = useForm({
    defaultValues: store,
  });

  const {
    fields: fieldsPemasaran,
    append: appendPemasaran,
    remove: removePemasaran,
  } = useFieldArray({
    control,
    name: "pemasaran",
  });
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xl="12" lg="12" md="12" sm="12" className="py-2">
            <h1 className="text-center"> Fasilitas Pemasaran</h1>
          </Col>
        </Row>
        {fieldsPemasaran.map((item, index) => {
          return (
            <Row key={index}>
              <Col xl="2" lg="2" md="2" sm="12" className="py-1">
                <label htmlFor="Tahun" className="text-capitalize">
                  {`Tahun`}
                </label>

                <input
                  className="customInput"
                  defaultValue={`${item.tahun}`} // make sure to set up defaultValue
                  {...register(`pemasaran[${index}].tahun`)}
                />
              </Col>

              <Col xl="10" lg="10" md="10" sm="12" className="py-1">
                <label htmlFor="Lembaga" className="text-capitalize">
                  {`Fasilitas `}
                </label>
                <div className="d-flex flex-row">
                  <input
                    className="customInput"
                    defaultValue={`${item.fasilitas}`} // make sure to set up defaultValue
                    {...register(`pemasaran[${index}].fasilitas`)}
                  />
                  <div className="d-flex flex-column justify-content-center align-items-center p-1 ml-2">
                    <FontAwesomeIcon
                      icon={faPlus}
                      onClick={() => {
                        if (fieldsPemasaran.length < 5) {
                          appendPemasaran({ fasilitas: "", tahun: "" });
                        }
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faMinus}
                      onClick={() => removePemasaran(index)}
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

export default Form8;
