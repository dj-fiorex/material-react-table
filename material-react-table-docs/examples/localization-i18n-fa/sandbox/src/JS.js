import React from 'react';

//Import Material React Table and its Types
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';

//Import Material React Table Translations
import { MRT_Localization_FA } from 'material-react-table/locales/fa';

//mock data
import { data, Person } from './makeData';

const columns = [
  //column definitions...
  {
    accessorKey: 'firstName',
    header: 'نام',
  },
  {
    accessorKey: 'lastName',
    header: 'نام خانوادگی',
    enableClickToCopy: true,
  },
  {
    accessorKey: 'age',
    header: 'سن',
  },
  //end
];

const Example = () => {
  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableColumnFilterModes
      enableColumnOrdering
      enableEditing
      enablePinning
      enableRowActions
      enableRowSelection
      enableSelectAll={false}
      initialState={{ showColumnFilters: true, showGlobalFilter: true }}
      localization={MRT_Localization_FA}
    />
  );
};

//App.tsx or similar
import { createTheme, ThemeProvider, useTheme } from '@mui/material';
import { faIR } from '@mui/material/locale';

const ExampleWithThemeProvider = () => {
  const theme = useTheme(); //replace with your theme/createTheme
  return (
    //Setting Material UI locale as best practice to result in better accessibility
    <ThemeProvider theme={createTheme({ ...theme, direction: 'rtl' }, faIR)}>
      <Example />
    </ThemeProvider>
  );
};

export default ExampleWithThemeProvider;
