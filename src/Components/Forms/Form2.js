import React, { useState } from "react";
import { Input, Label } from "reactstrap";

const Form2 = ({ nextStep, prevStep, data, handleOnChange }) => {

  const next = (e) => {
    e.preventDefault();
    nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    prevStep();
  };
  
  return (
    <div>
      <h1>Form 2</h1>
      <button onClick={prevStep}>prev</button>
      <br />
      <Label htmlFor="no_koperasi">No Koperasi</Label>
      <Input
        type="text"
        name="nama"
        id="no_koperasi"
        placeholder="no koperasi"
        value={data.nama}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default Form2;
