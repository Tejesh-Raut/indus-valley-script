import * as React from 'react';
import * as _ from 'lodash';
import { shallowEqual, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import signs from '../utils/signs.json';

export const Signs = () => {
  const theme = useSelector((state: AppState) => state.theme, shallowEqual);

  return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={_.map(signs, id => ({ id: id, src: (('000' + id).slice(-3)) }))}
            columns={[
              { field: 'id', headerName: 'ID', width: 90 },
              {
                field: 'src',
                headerName: 'Sign',
                minWidth: 300,
                renderCell: (params) =>
                    <img className={'sign-' + theme.palette.mode}
                         src={require('../signs/' + params.value + '.svg')} alt={params.value}/>
              }
            ]}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
        />
      </div>);
};
