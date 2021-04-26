import React, { useState } from "react";
import Form1 from "./Forms/Form1";
import Form2 from "./Forms/Form2";

const InputForm = () => {
  const [step, setStep] = useState(1);
  const [inputValues, setInputValues] = useState({
    nama: "",
    nomor: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  switch (step) {
    case 1:
      return (
        <Form1
          data={inputValues}
          handleOnChange={handleOnChange}
          nextStep={() => setStep(step + 1)}
        />
      );
    case 2:
      return (
        <Form2
          data={inputValues}
          handleOnChange={handleOnChange}
          nextStep={() => setStep(step + 1)}
          prevStep={() => setStep(step - 1)}
        />
      );
    default:
      console.log("This is a multi-step form built with React.");
  }
};

export default InputForm;
