import React from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import ReactDatePicker from 'react-datepicker';
import NumberFormat from 'react-number-format';
import moment from 'moment';

const Form5 = ({ onSubmit, store, setValue, value }) => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    // defaultValues: {
    //   test: [{ firstName: "Bill", lastName: "Luo" }],
    // },
    defaultValues: store,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'manager',
  });

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col xl='12' lg='12' md='12' sm='12' className='py-2'>
            <h1 className='text-center text-uppercase'> Kelembagaan</h1>
          </Col>
          <Col xl='2' lg='2' md='6' sm='12' className='py-2'>
            <label htmlFor='tahunKelembagaan' className=''>
              Tahun
            </label>

            <input className='customInput' {...register('tahunKelembagaan')} />
          </Col>
        </Row>
        <Row>
          <Col xl='3' lg='3' md='6' sm='12' className='py-2'>
            <label htmlFor='jumlahAnggota' className=''>
              Jumlah Anggota
            </label>
            <input className='customInput' {...register('jumlahAnggota')} />
          </Col>
          <Col xl='3' lg='3' md='6' sm='12' className='py-2'>
            <label htmlFor='anggotaL' className=''>
              Laki Laki
            </label>
            <input className='customInput' {...register('anggotaL')} />
          </Col>
          <Col xl='3' lg='3' md='6' sm='12' className='py-2'>
            <label htmlFor='anggotaP' className=''>
              Perempuan
            </label>
            <input className='customInput' {...register('anggotaP')} />
          </Col>
          <Col xl='3' lg='3' md='6' sm='12' className='py-2'>
            <label htmlFor='jumlahKaryawan' className=''>
              Jumlah Karyawan
            </label>
            <input className='customInput' {...register('jumlahKaryawan')} />
          </Col>
        </Row>
        <Row>
          {fields.map((item, index) => {
            return (
              <Col xl='4' lg='4' md='4' sm='12' className='py-1' key={index}>
                <label htmlFor='website' className='text-capitalize'>
                  {`Manajer ${index + 1}`}
                </label>
                <div className='d-flex flex-row'>
                  <input
                    className='customInput'
                    defaultValue={`${item.nama}`} // make sure to set up defaultValue
                    {...register(`manager[${index}].nama`)}
                  />
                  <div className='d-flex flex-column justify-content-center align-items-center p-1'>
                    <FontAwesomeIcon
                      icon={faPlus}
                      onClick={() => {
                        if (fields.length < 3) {
                          append({ nama: '' });
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
          <Col xl='2' lg='2' md='6' sm='12' className='py-2'>
            <label htmlFor='tglRAT' className=''>
              Tgl RAT
            </label>
            <br />

            <Controller
              control={control}
              name='tglRAT'
              rules={{ required: true }}
              render={(props) => (
                <ReactDatePicker
                  className='customInput'
                  dateFormat='dd/MM/yyyy'
                  placeholderText='Select date'
                  onChange={(e) => props.field.onChange(e)}
                  selected={
                    props.field.value === ''
                      ? props.field.value
                      : moment(props.field.value).toDate()
                  }
                />
              )}
            />
            {errors.tanggalBadanHukum && (
              <p className='text-danger'> data tidak boleh kosong </p>
            )}
          </Col>
        </Row>
        <Row>
          <Col xl='12' lg='12' md='12' sm='12' className='py-2'>
            <h1 className='text-center text-uppercase'> Indikator Usaha</h1>
          </Col>
          <Col xl='2' lg='2' md='6' sm='12' className='py-2'>
            <label htmlFor='modalSendiri' className=''>
              Modal Sendiri
            </label>
            <Controller
              render={({ field }) => (
                <NumberFormat
                  prefix={'Rp '}
                  thousandSeparator
                  {...field}
                  className='customInput'
                />
              )}
              name='modalSendiri'
              className='input'
              control={control}
            />
          </Col>
          <Col xl='2' lg='2' md='6' sm='12' className='py-2'>
            <label htmlFor='modalLuar' className=''>
              Modal Luar
            </label>
            <Controller
              render={({ field }) => (
                <NumberFormat
                  prefix={'Rp '}
                  thousandSeparator
                  {...field}
                  className='customInput'
                />
              )}
              name='modalLuar'
              className='input'
              control={control}
            />
          </Col>
          <Col xl='2' lg='2' md='6' sm='12' className='py-2'>
            <label htmlFor='nilaiAset' className=''>
              Nilai Aset
            </label>
            <Controller
              render={({ field }) => (
                <NumberFormat
                  prefix={'Rp '}
                  thousandSeparator
                  {...field}
                  className='customInput'
                />
              )}
              name='nilaiAset'
              className='input'
              control={control}
            />
          </Col>
          <Col xl='2' lg='2' md='6' sm='12' className='py-2'>
            <label htmlFor='volumeUsaha' className=''>
              Volume Usaha
            </label>
            <Controller
              render={({ field }) => (
                <NumberFormat
                  prefix={'Rp '}
                  thousandSeparator
                  {...field}
                  className='customInput'
                />
              )}
              name='volumeUsaha'
              className='input'
              control={control}
            />
          </Col>
          <Col xl='2' lg='2' md='6' sm='12' className='py-2'>
            <label htmlFor='SHU' className=''>
              SHU
            </label>
            <Controller
              render={({ field }) => (
                <NumberFormat
                  prefix={'Rp '}
                  thousandSeparator
                  {...field}
                  className='customInput'
                />
              )}
              name='SHU'
              className='input'
              control={control}
            />
          </Col>
        </Row>

        <Row>
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
              value='next >>'
            />
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default Form5;
