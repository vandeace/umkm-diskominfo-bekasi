import React, { useEffect, useMemo, useState } from 'react';
import { Table } from 'reactstrap';
import styled from 'styled-components';
import {
  useTable,
  usePagination,
  useRowSelect,
  useGlobalFilter,
} from 'react-table';
import { COLUMNUSER } from '../../Utils/columns';
import GlobalFilter from '../../Utils/GlobalFilter';
import { useStore } from '../../api';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import ModalCustom from '../Modal';

const Style = styled.div`
  margin: 30px;
  padding: 20px;
  border: 0px solid #dae1e7;
  box-shadow: rgba(0, 0, 0, 0.11) 0px 15px 30px 0px,
    rgba(0, 0, 0, 0.08) 0px 5px 15px 0px;
  .t-head {
    min-width: 100px;
    font-size: 18px;
    padding: 5px;
    text-align: center;
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
  const [modal, setModal] = useState(false);
  const [deleteID, setDeleteID] = useState(0);
  const [userId, setUserId] = useState(0);

  const data = useStore((state) => state.users);
  const fetchData = useStore((state) => state.getUsers);
  const columns = useMemo(() => COLUMNUSER, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        ...columns,

        {
          Header: 'Action',
          Cell: ({ row }) => (
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <div>
                <FontAwesomeIcon
                  icon={faPencilAlt}
                  className='mx-1'
                  color='blue'
                  size='1x'
                  onClick={() => {
                    setUserId(row.original.id);
                    toggle();
                  }}
                />
              </div>
            </div>
          ),
        },
      ]);
    }
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
    fetchData();
  }, []);
  console.log(data, 'data');

  const deleteItem = (id) => {
    setDeleteID(id);
    setModal(true);
  };

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <Style>
      <ModalCustom modal={modal} toggle={toggle} userId={userId} />
      <h1 className='text-uppercase text-center'>DashBoard SIRAGA KOPERASI</h1>
      <div className='card'></div>
      <h3 className='text-uppercase text-center'>Data Koperasi</h3>
      <div className=''>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
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
