import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Col, Row } from 'reactstrap';

const Form11 = ({ onSubmit, store, setValue, setStore, value }) => {
  const { handleSubmit, register } = useForm({
    defaultValues: store,
  });
  const [status, setStatus] = useState(store.pemeringkatan);

  const setStatusKoperasi = (e) => {
    const value = e.target.value;
    setStatus(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row className='p-3'>
          <Col xl='12' lg='12' md='12' sm='12' className='py-2'>
            <h1 className=''>PENILAIAN KESEHATAN</h1>
          </Col>
          <Col xl='4' lg='4' md='6' sm='12' className='py-2'>
            <label htmlFor='penilaian' className=''>
              Penilaian Kesehatan KSP/USP dan KSPPS/USPPS
            </label>
            <select className='customInput' {...register('penilaian')}>
              <option value=''>~</option>
              <option value='sudah'>Sudah Dinilai</option>
              <option value='belum'>Belum Dinilai</option>
            </select>
          </Col>
          <Col xl='4' lg='4' md='6' sm='12' className='py-2'>
            <label htmlFor='penilaian' className=''>
              Predikat
            </label>
            <select className='customInput' {...register('hasilPenilaian')}>
              <option value=''>~</option>
              <option value='sangat berkualitas'>Sangat berkualitas</option>
              <option value='cukup berkualitas'>Cukup berkualitas</option>
              <option value='tidak berkualitas'>Tidak berkualitas</option>
            </select>
          </Col>
          <Col xl='4' lg='4' md='6' sm='12' className='py-2'>
            <label htmlFor='skorPenilaian' className=''>
              Skor Penilaian
            </label>

            <input
              className='customInput'
              placeholder='Skor Penilaian'
              {...register('skorPenilaian')}
            />
          </Col>
          <Col xl='12' lg='12' md='12' sm='12' className='py-2'>
            <h1 className=''>PEMERINGKATAN</h1>
          </Col>
          <Col xl='4' lg='4' md='6' sm='12' className='py-2'>
            <label htmlFor='pemeringkatan' className=''>
              Penilaian Pemeringkatan Koperasi
            </label>
            <select
              className='customInput'
              {...register('pemeringkatan')}
              onChange={(e) => setStatusKoperasi(e)}
            >
              <option value=''>~</option>
              <option value='sudah'>Sudah Dinilai</option>
              <option value='belum'>Belum Dinilai</option>
            </select>
          </Col>
          {status === 'sudah' && (
            <>
              <Col xl='4' lg='4' md='6' sm='12' className='py-2'>
                <label htmlFor='predikat' className=''>
                  Predikat
                </label>
                <select className='customInput' {...register('predikat')}>
                  <option value=''>~</option>
                  <option value='sangat berkualitas'>Sangat berkualitas</option>
                  <option value='cukup berkualitas'>Cukup berkualitas</option>
                  <option value='tidak berkualitas'>Tidak berkualitas</option>
                </select>
              </Col>
            </>
          )}
        </Row>
        <Row className='p-3'>
          <Col xl='6' lg='6' md='6' sm='6' className='py-2'>
            <input
              className='customSubmit'
              type='button'
              onClick={() => setValue(value - 1)}
              value='<< prev'
            />
          </Col>
          <Col xl='6' lg='6' md='6' sm='6' className='py-2'>
            <input
              className='customSubmit'
              type='submit'
              title='next'
              value='submit'
            />
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default Form11;
