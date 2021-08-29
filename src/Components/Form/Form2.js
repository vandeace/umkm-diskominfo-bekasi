import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Form2 = ({ onSubmit, store, setValue, value }) => {
  const { register, control, handleSubmit, reset, watch } = useForm({
    // defaultValues: {
    //   test: [{ firstName: "Bill", lastName: "Luo" }],
    // },
    defaultValues: store,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "ketuaKepengurusan",
  });
  const {
    fields: dataBendahara,
    append: appendBendahara,
    remove: removeBendahara,
  } = useFieldArray({
    control,
    name: "bendaharaKepengurusan",
  });
  const {
    fields: dataSekretaris,
    append: appendSekretaris,
    remove: removeSekretaris,
  } = useFieldArray({
    control,
    name: "sekretarisKepengurusan",
  });

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xl="12" lg="12" md="12" sm="12" className="py-2">
            <h1 className="text-center"> Kepengurusan Koperasi</h1>
          </Col>
          <Col xl="2" lg="2" md="6" sm="12" className="py-2">
            <label htmlFor="tahunKepengurusan" className="">
              Tahun Kepengurusan
            </label>

            <input className="customInput" {...register("tahunKepengurusan")} />
          </Col>
        </Row>
        <Row>
          {fields.map((item, index) => {
            return (
              <Col xl="4" lg="4" md="4" sm="12" className="py-1" key={index}>
                <label htmlFor="website" className="text-capitalize">
                  {`Ketua ${index + 1}`}
                </label>
                <div className="d-flex flex-row">
                  <input
                    className="customInput"
                    defaultValue={`${item.nama}`} // make sure to set up defaultValue
                    {...register(`ketuaKepengurusan[${index}].nama`)}
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
          {dataBendahara.map((item, index) => {
            return (
              <Col xl="4" lg="4" md="4" sm="12" className="py-1" key={index}>
                <label htmlFor="website" className="text-capitalize">
                  {`Bendahara ${index + 1}`}
                </label>
                <div className="d-flex flex-row">
                  <input
                    className="customInput"
                    defaultValue={`${item.nama}`} // make sure to set up defaultValue
                    {...register(`bendaharaKepengurusan[${index}].nama`)}
                  />
                  <div className="d-flex flex-column justify-content-center align-items-center p-1">
                    <FontAwesomeIcon
                      icon={faPlus}
                      onClick={() => {
                        if (dataBendahara.length < 3) {
                          appendBendahara({ nama: "" });
                        }
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faMinus}
                      onClick={() => removeBendahara(index)}
                    />
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
        <Row>
          {dataSekretaris.map((item, index) => {
            return (
              <Col xl="4" lg="4" md="4" sm="12" className="py-1" key={index}>
                <label htmlFor="website" className="text-capitalize">
                  {`Sekretaris ${index + 1}`}
                </label>
                <div className="d-flex flex-row">
                  <input
                    className="customInput"
                    defaultValue={`${item.nama}`} // make sure to set up defaultValue
                    {...register(`sekretarisKepengurusan[${index}].nama`)}
                  />
                  <div className="d-flex flex-column justify-content-center align-items-center p-1">
                    <FontAwesomeIcon
                      icon={faPlus}
                      onClick={() => {
                        if (dataSekretaris.length < 3) {
                          appendSekretaris({ nama: "" });
                        }
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faMinus}
                      onClick={() => removeSekretaris(index)}
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

export default Form2;
