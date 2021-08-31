import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Label,
  Form,
  Row,
} from "reactstrap";
import { useForm } from "react-hook-form";
import { API } from "../../config/api";

const ModalCustom = (props) => {
  const [eror, setEror] = useState({
    error: false,
    message: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setEror({
      error: false,
    });
    const payload = {
      password: data.new_password,
    };
    if (data.new_password === data.new_password_retype) {
      const token = localStorage.getItem("token");
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const res = await API.post("/update", payload, {
        headers: headers,
      }).catch(function (error) {
        if (error.response) {
          const errorMessage = error?.response?.data?.message;
          setEror({
            error: true,
            message: `${errorMessage}`,
          });
        }
      });
      if (res?.status === 200) {
        props.toggle();
      }
    } else {
      setEror({
        error: true,
        message: "karakter tidak sama",
      });
    }
  };
  return (
    <div>
      <Modal
        isOpen={props.modal}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <ModalBody className=" text-center pl-10">
          <h3>Change Password</h3>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row style={{ padding: 25 }}>
              <Label htmlFor="receiver" className="label">
                New Password
              </Label>
              <Input
                type="password"
                placeholder="new password"
                className="btn-custom p-3 mb-3"
                {...register("new_password", {
                  required: true,
                })}
              />
              <Label htmlFor="new-password-retype" className=" label">
                New Password
              </Label>
              <Input
                type="password"
                placeholder="Re Enter New Password"
                className="btn-custom p-3 mb-3"
                {...register("new_password_retype", {
                  required: true,
                })}
              />
              {eror.error && <span>{eror.message}</span>}
            </Row>
            <Row className="d-flex justify-content-center ">
              <div
                to="/"
                className="text-black-50 text-decoration-none btn-custom"
              >
                <Button
                  block
                  color="primary"
                  type="submit"
                  className="btn-custom m-0 my-2"
                  // disabled={loading}
                >
                  CHANGE
                </Button>
              </div>
            </Row>
          </Form>
        </ModalBody>

        <ModalFooter>
          <Button color="danger" onClick={() => props.toggle()}>
            CLOSE
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalCustom;
