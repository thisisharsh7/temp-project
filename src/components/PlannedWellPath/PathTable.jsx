
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    border: 0,
    color:
        theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.85)',
    fontFamily: '\'Ubuntu\', sans-serif',
    WebkitFontSmoothing: 'auto',
    letterSpacing: 'normal',
    '& .MuiDataGrid-columnsContainer': {
        backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d',
    },
    '& .MuiDataGrid-iconSeparator': {
        display: 'none',
    },
    '& .MuiDataGrid-columnHeader': {
        fontSize: "0.95rem",
        fontWeight: "600",
    },
    '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
        borderRight: `1px solid #a8a4a48f`,
        paddingLeft: '28px',
        paddingRight: '28px'

    },
    '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
        borderBottom: `px solid #a8a4a48f`,
    },
    '& .MuiDataGrid-cell': {
        color:
            theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.65)',
    },
    '& .MuiPaginationItem-root': {
        borderRadius: 0,
    },
    '& .MuiDataGrid-columnHeaderTitle': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    '& .MuiDataGrid-colCellTitle': {
        fontWeight: 'bold',
        fontSize: '0.95rem',
        lineHeight: '1.4rem',
    },

    '& .MuiDataGrid-colCellTitle, .MuiDataGrid-cell': {
        color:
            theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.65)',
    },

    '& .MuiDataGrid-colCellTitleUnits': {
        fontSize: '0.75rem',
        color: theme.palette.mode === 'light' ? 'lightgray' : 'darkgray',
        lineHeight: '1rem',
    },
    '& .MuiDataGrid-row:hover': {
        backgroundColor: 'transparent'
    },
    '& .frozen--cell': {
        backgroundColor: '#efefef',
        color: 'gray'
    }
}));

const initialRows = [
    { id: 1, col2: '0', col3: 0, col4: 0, col5: 0, col6: '0.00N', col7: '0.00E', col8: '', col9: 0 },
    { id: 2, col2: 25, col3: 0.05, col4: 203.37, col5: 25, col6: '0.01S', col7: '0.00E', col8: 0.2, col9: 0 },
    { id: 3, col2: 50, col3: 0.11, col4: 203.37, col5: 50, col6: '0.04S', col7: '0.02W', col8: 0.24, col9: '-0.01' },
    { id: 4, col2: 50, col3: 0.11, col4: 203.37, col5: 50, col6: '0.04S', col7: '0.02W', col8: 0.24, col9: '-0.01' },
    { id: 5, col2: 50, col3: 0.11, col4: 203.37, col5: 50, col6: '0.04S', col7: '0.02W', col8: 0.24, col9: '-0.01' },
    { id: 6, col2: 50, col3: 0.11, col4: 203.37, col5: 50, col6: '0.04S', col7: '0.02W', col8: 0.24, col9: '-0.01' },
    { id: 7, col2: 50, col3: 0.11, col4: 203.37, col5: 50, col6: '0.04S', col7: '0.02W', col8: 0.24, col9: '-0.01' },
    { id: 8, col2: 50, col3: 0.11, col4: 203.37, col5: 50, col6: '0.04S', col7: '0.02W', col8: 0.24, col9: '-0.01' },
    { id: 9, col2: 50, col3: 0.11, col4: 203.37, col5: 50, col6: '0.04S', col7: '0.02W', col8: 0.24, col9: '-0.01' },
    { id: 10, col2: 50, col3: 0.11, col4: 203.37, col5: 50, col6: '0.04S', col7: '0.02W', col8: 0.24, col9: '-0.01' },
    { id: 11, col2: 50, col3: 0.11, col4: 203.37, col5: 50, col6: '0.04S', col7: '0.02W', col8: 0.24, col9: '-0.01' },
    { id: 12, col2: 50, col3: 0.11, col4: 203.37, col5: 50, col6: '0.04S', col7: '0.02W', col8: 0.24, col9: '-0.01' },
    { id: 13, col2: 50, col3: 0.11, col4: 203.37, col5: 50, col6: '0.04S', col7: '0.02W', col8: 0.24, col9: '-0.01' },
    { id: 14, col2: 50, col3: 0.11, col4: 203.37, col5: 50, col6: '0.04S', col7: '0.02W', col8: 0.24, col9: '-0.01' },

];

const initialColumns = [
    { field: 'col2', headerName: 'MD', headerUnits: '( ft )', minWidth: 121.5, editable: true, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', flex: 1 },
    { field: 'col3', headerName: 'Inc', headerUnits: '( deg )', minWidth: 121.5, editable: true, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', flex: 1, },
    { field: 'col4', headerName: 'Azi', headerUnits: '( deg )', minWidth: 121.5, editable: true, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', flex: 1, },
    { field: 'col5', headerName: 'TVD', headerUnits: '( ft )', minWidth: 121.5, editable: true, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', flex: 1, },
    { field: 'col6', headerName: 'North', headerUnits: '( ft )', minWidth: 121.5, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', flex: 1 },
    { field: 'col7', headerName: 'East', headerUnits: '( ft )', minWidth: 121.5, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', flex: 1 },
    { field: 'col8', headerName: 'DLS', headerUnits: '( deg/100ft )', minWidth: 121.5, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', flex: 1 },
    { field: 'col9', headerName: 'VS', headerUnits: '( ft )', minWidth: 121.5, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', flex: 1 },
];


export default function PathTable() {
    const [rows, setRows] = useState(initialRows);


    return (
        <Box component={'div'} sx={{ height: 900, width: '100%' }}>
            <StyledDataGrid
                rowSelection={false}
                disableColumnMenu
                disableColumnFilter
                rows={rows}
                hideFooter
                columnHeaderHeight={72}
                columns={initialColumns.map((column) => ({
                    ...column,
                    renderHeader: (params) => (
                        <div className="MuiDataGrid-columnHeaderTitle">
                            <div className="MuiDataGrid-colCellTitle">{column.headerName}</div>
                            <div className="MuiDataGrid-colCellTitleUnits">{column.headerUnits}</div>
                        </div>
                    ),
                }))}
            />
        </Box>
    );
}