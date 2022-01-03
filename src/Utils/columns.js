import { format } from 'date-fns';
export const COLUMNS = [
  {
    Header: 'Nama Koperasi',
    accessor: 'namaKoperasi',
  },
  {
    Header: 'No Badan Hukum',
    accessor: 'nomorBadanHukum',
  },
  {
    Header: 'Tgl Badan Hukum',
    accessor: 'tanggalBadanHukum',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy');
    },
  },
  {
    Header: 'Tgl RAT',
    accessor: 'tglRAT',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy');
    },
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: 'Alamat',
    accessor: 'jalan',
  },
];

export const COLUMNUSER = [
  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'FullName',
    accessor: 'fullName',
  },
  {
    Header: 'Role',
    accessor: 'role',
  },
];
