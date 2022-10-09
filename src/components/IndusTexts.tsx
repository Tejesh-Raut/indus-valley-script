import * as React from 'react';
import * as _ from 'lodash';
import { shallowEqual, useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import texts from '../utils/texts.json';

export const IndusTexts = () => {
  const theme = useSelector((state: AppState) => state.theme, shallowEqual);

  return (<div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={_.map(texts.rows, valuesArray => ({
        id: valuesArray[0],
        text: valuesArray[39],
        text_code: valuesArray[39]
      }))}
      columns={[
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'text',
          headerName: 'Text',
          minWidth: 300,
          renderCell: (params) => {
            const signCodes = _.filter(_.split(String(params.value), /\+|\[|-|\]|\//), o => o);
            return <span className={'indus-text'}>{
              _.map(signCodes, (signCode, index) => {
                return (<img className={'sign-' + theme.palette.mode} key={index}
                             src={require('../signs/' + signCode + '.svg')} alt={String(signCode)}
                             onError={({ currentTarget }) => {
                               currentTarget.onerror = null; // prevents looping
                             }}
                />);
              })
            }</span>;
          }
        },
        { field: 'text_code', headerName: 'Text Code', width: 90 }
      ]}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
    />
  </div>);
};
