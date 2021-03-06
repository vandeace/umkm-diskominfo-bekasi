import 'chart.js/auto';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useTable,
} from 'react-table';
import { Table } from 'reactstrap';
import styled from 'styled-components';
import { useStore } from '../../api';
import { COLUMNS } from '../../Utils/columns';
import GlobalFilter from '../../Utils/GlobalFilter';
import { CSVLink, CSVDownload } from 'react-csv';

const Style = styled.div`
  margin: 30px;
  padding: 20px;
  border: 0px solid #dae1e7;
  box-shadow: rgba(0, 0, 0, 0.11) 0px 15px 30px 0px,
    rgba(0, 0, 0, 0.08) 0px 5px 15px 0px;
  .overview {
    height: 450px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .left {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    canvas {
      height: 400px !important;
      width: 400px !important;
    }
  }
  .table-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .t-head {
    min-width: 100px;
    font-size: 18px;
    padding: 5px;
    text-align: center;
    .datashow {
      height: 400px;
    }
    &-no {
      min-width: 20px;
    }
    &-name {
      min-width: 200px;
    }
    &-nohukum {
      min-width: 200px;
    }
    &-telp {
      min-width: 100px;
    }
    &-alamat {
      min-width: 250px;
    }
    &-status {
      min-width: 100px;
    }
    &-action {
      min-width: 100px;
    }
  }
`;

const Index = () => {
  // const [data, setData] = useState(data_koperasi);
  const tableRef = useRef(null);
  const data = useStore((state) => state.collection);
  const [exportData, setExportData] = useState([]);
  const fetchCollection = useStore((state) => state.fetchCollection);
  const columns = useMemo(() => COLUMNS, []);
  const [active, setActive] = useState(0);
  const [nonActive, setNonActive] = useState(0);
  const dataPie = {
    labels: ['Non Active', 'Active'],
    datasets: [
      {
        data: [nonActive, active],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(75, 192, 192, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination,
    useRowSelect
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    state,
    setGlobalFilter,
    prepareRow,
  } = tableInstance;

  const { pageIndex, globalFilter } = state;

  useEffect(() => {
    fetchCollection();
  }, []);

  useEffect(() => {
    const active = data.filter(checkAge);
    const nonActive = data.filter(nonActiveCheck);
    function checkAge(payload) {
      console.log(payload, 'payload');
      return payload.status === 'aktif';
    }
    function nonActiveCheck(payload) {
      console.log(payload, 'payload');
      return payload.status === 'non_aktif';
    }

    setActive(active.length);
    setNonActive(nonActive.length);

    const exportedData = data.map(
      ({
        ketuaKepengurusan,
        sekretarisKepengurusan,
        anggotaPengawasan,
        manager,
        diklat,
        pembiayaan,
        pemasaran,
        mitra,
        peraturanKhusus,
        SOP,
        SOM,
        bendaharaKepengurusan,
        ...rest
      }) => ({ ...rest })
    );
    setExportData(exportedData);
  }, [data]);

  return (
    <Style>
      <h1 className='text-uppercase text-center'>DashBoard SIRAGA KOPERASI</h1>
      <div className='overview'>
        <div className='right'>
          <Pie data={dataPie} />
        </div>
        <div className='left'>
          <div className='text-wrapper'>
            <h4 className='title'>Total Koperasi</h4>
            <h4 className='title-data'>{data.length}</h4>
          </div>
          <div className='text-wrapper'>
            <h4 className='title'>Total Koperasi Aktif</h4>
            <h4 className='title-data'>{active}</h4>
          </div>
          <div className='text-wrapper'>
            <h4 className='title'>Total Koperasi Non Aktif</h4>
            <h4 className='title-data'>{nonActive}</h4>
          </div>
        </div>
      </div>
      <div className='card'></div>
      <h3 className='text-uppercase text-center'>Data Koperasi</h3>
      <div className='table'>
        <div className='table-header'>
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
          <CSVLink data={exportData}>Export To Excel</CSVLink>
        </div>
        <Table className='text-center' responsive bordered {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
        <div className='text-center'>
          <h6>
            <span>
              Page <strong>{pageIndex + 1}</strong> of{' '}
              <strong>{pageOptions.length}</strong>
            </span>
          </h6>

          <button
            className='mr-1 bg-secondary text-white'
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {'<<'}
          </button>
          <button
            className='mr-1 bg-secondary text-white'
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Prev
          </button>
          <button
            className='mr-1 bg-secondary text-white'
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next
          </button>
          <button
            className='mr-1 bg-secondary text-white'
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {'>>'}
          </button>
        </div>
      </div>
    </Style>
  );
};

export default Index;
