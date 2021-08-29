import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Input, Label, Form, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useStore } from "../api/index";
import { API } from "../config/api";
import Modal from "../Components/ModalError";

const Style = styled.div`
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #56b6f7;
  font-family: "Roboto", sans-serif;
  .lakugan-title {
    font-weight: bold;
    margin-bottom: 30px;
    @media (max-width: 1200px) {
      font-size: 20px;
    }
    @media (max-width: 900px) {
      text-align: center;
    }
  }
  .login-page {
    height: 100%;
    width: 100%;
    display: flex;
    overflow: hidden;
  }
  .btn-custom {
    border-radius: 25px;
    margin: 0 20px 0 20px;
    width: 100%;
  }
  .background-image {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #4a4a4a;
  }
  .card {
    &-image {
      width: 65%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      @media (max-width: 900px) {
        display: none;
      }
    }
    &-form {
      padding: 20px;
      display: flex;
      align-items: center;
      height: 100%;
      width: 35%;
      form {
        width: 100%;
      }
      .lakugan-logo {
        width: 150px;
        margin-bottom: 30px;
        @media (max-width: 900px) {
          display: block;
          margin: 0 auto 20px;
        }
      }
      @media (max-width: 900px) {
        width: 100%;
      }
    }
  }
  .label {
    margin: 10px 20px 10px 20px;
    font-weight: 600;
  }
  .register {
    display: block;
    margin-top: 5px;
    margin-left: 20px;
    font-size: 14px;
    a {
      color: red;
    }
    @media (max-width: 450px) {
      font-size: 12px;
    }
  }
`;

const Login = () => {
  const isAuth = useStore((state) => state.isAuth);
  const setAuthTrue = useStore((state) => state.setAuthTrue);
  const history = useHistory();
  const [error, setError] = useState({ error: false, message: "" });
  const [loader, setLoader] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoader(true);
    const payload = {
      email: data.Email,
      password: data.Password,
    };
    const res = await API.post("/login", payload).catch(function (error) {
      if (error.response) {
        const errorMessage = error?.response?.data?.message;
        setLoader(false);
        setError({
          error: true,
          message: `${errorMessage} Wrong Username or Password`,
        });
      }
    });
    if (res?.status === 200) {
      localStorage.removeItem("token");
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", res.data.role);
      setAuthTrue();
      setLoader(false);
    }
  };

  useEffect(() => {
    if (isAuth) {
      history.push("/");
    } else {
      const token = localStorage.getItem("token");
      if (token) {
        setAuthTrue();
      }
    }
  }, [isAuth]);

  const toggle = () => {
    setError({
      error: false,
      message: "",
    });
  };

  return (
    <Style id="login">
      <Modal
        modal={error.error}
        toggle={toggle}
        message={error.message}
        setError={setError}
      />
      <div className="login-page">
        <div className="card-image">
          <img src="./login.jpg" alt="" className="img-fluid" />
        </div>
        <div className="card-form">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className="d-flex justify-content-center">
              <img src="./logo-umkm.png" />
            </Row>
            <Row className="d-flex justify-content-center">
              <h1 className="text-center">SIRAGA KOPERASI</h1>
            </Row>

            <Row>
              <Label htmlFor="receiver" className="label">
                Email
              </Label>
              <Input
                type="text"
                placeholder="Email"
                className="btn-custom p-3 mb-3"
                {...register("Email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              <Label htmlFor="receiver" className=" label">
                Password
              </Label>
              <Input
                type="password"
                placeholder="Password"
                className="btn-custom p-3 mb-3"
                {...register("Password", { required: true })}
              />
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
                  MASUK
                </Button>
              </div>
            </Row>
            <Row>
              <Link
                to="/register"
                className="text-decoration-none text-black-50"
              >
                <span className="register">Belum punya akun?</span>
              </Link>
            </Row>
          </Form>
        </div>
      </div>
    </Style>
  );
};

export default Login;
