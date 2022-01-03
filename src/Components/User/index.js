import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalCustom from '../Modal';

const Style = styled.div`
  margin: 30px;
  padding: 20px 50px 20px 50px;
  border: 1px solid #dae1e7;
  font-size: 16px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: rgba(0, 0, 0, 0.11) 0px 15px 30px 0px,
    rgba(0, 0, 0, 0.08) 0px 5px 15px 0px;
  .btn-custom {
    border-radius: 5px;
  }
  .custom-card {
    margin-top: 50px;
    border: 1px solid #dae1e7;
    width: 500px;
    padding: 30px;
    min-height: 700px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    h5 {
      color: #a9a4a8;
      font-size: 16px;
      font-weight: 700;
      line-height: 18px;
    }
    h6 {
      color: #a0a4ad;
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
    }
  }
  .btn-change {
    font-size: 14.4px;
    line-height: 21.6px;
    padding: 0;
    text-decoration: none solid rgb(40, 128, 206);
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    height: 35px;
    width: 100px;
    border: 1px solid #2880ce;
    background-color: #ffffff;
    border-radius: 5px;
    :hover {
      background-color: #2880ce;
      color: #fff;
    }
  }
  .user {
    align-items: center;
    border: 3px solid #a9a4a8;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
  }
`;

const Index = ({ data }) => {
  const [modal, setModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <Style>
      <ModalCustom modal={modal} toggle={toggle} userId={data.id} />
      <h1 className='text-center text-uppercase'>DATA PROFILE USER</h1>
      <div className='card'></div>
      <div className='custom-card'>
        <div className='d-flex justify-content-center my-5'>
          <div className='user py-2'>
            <FontAwesomeIcon icon={faUser} size='7x' />
          </div>
        </div>
        <div className='d-flex flex-column my-3 border-bottom py-1'>
          <h5 className='bold'>Nama</h5>
          <h6>{data.fullName}</h6>
        </div>
        <div className='d-flex flex-column my-3 border-bottom py-1'>
          <h5 className='bold'>Email</h5>
          <h6>{data.email}</h6>
        </div>
        <div className='d-flex flex-row justify-content-between py-1 align-items-center border-bottom my-3'>
          <div className='d-flex flex-column'>
            <h5 className='bold'>Role</h5>
            <h6>{data.role}</h6>
          </div>
        </div>
        <div className='d-flex flex-row justify-content-between py-1 align-items-center border-bottom my-3'>
          <div className='d-flex flex-column'>
            <h5 className='bold'>Password</h5>
            <h6>*************</h6>
          </div>
          <button className='btn-change' onClick={() => setModal(!modal)}>
            Ubah
          </button>
        </div>
      </div>
    </Style>
  );
};

export default Index;
