import React, { useState } from "react";
import { Input, Label } from "reactstrap";

const FormI = ({ nextStep, data, handleOnChange }) => {
  const next = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div>
      <h1>Form 1</h1>
      <button onClick={nextStep}>next</button>
      <br />
      <Label htmlFor="nama">Nama Koperasi</Label>
      <Input
        type="text"
        name="nomor"
        id="nomor"
        placeholder="nama koperasi"
        value={data.nomor}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default FormI;
