
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useState } from 'react';

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
        fontWeight: "1000",
    },
    '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
        borderRight: `1px solid #e7e7e6`,
        paddingLeft: '10px',
        paddingRight: '10px'

    },
    '& .MuiDataGrid-columnHeader:last-of-type , .MuiDataGrid-cell:last-of-type': {
        borderRight: `none`,
        paddingLeft: '10px',
        paddingRight: '10px'

    },
    '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
        borderBottom: `1px solid #e7e7e6`,
    },
    '& .MuiDataGrid-row--lastVisible .MuiDataGrid-cell': {
        borderBottom: 'none'
    },
    '& .MuiDataGrid-row--lastVisible .MuiDataGrid-cell:first-of-type': {
        borderRadius: '0rem 0rem 0rem 0.2rem'
    },
    '& .MuiDataGrid-row--lastVisible .column-cell': {
        borderRadius: '0rem 0rem 0.2rem 0rem',
    },
    '& .MuiDataGrid-cell': {
        fontSize: '15.2px',
        fontWeight: 500,
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
        gap: '0.25rem'
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
        fontWeight: 'normal',
        fontSize: '0.75rem',
        color: theme.palette.mode === 'light' ? 'lightgray' : 'darkgray',
        lineHeight: '1rem',
    },
    '& .MuiDataGrid-row:hover': {
        backgroundColor: 'transparent'
    },
    '& .frozen--cell': {
        backgroundColor: '#fafafa'
    },
    '& ::-webkit-scrollbar': {
        width: '4px' ,
        height: '4px'
    },


    '& ::-webkit-scrollbar-track': {
        background: 'lightgray',
        borderRadius: '0rem 0rem 0.2rem 0rem'
    },
    '& .column-cell': {
        borderRight: "none",
    },
    '& ::-webkit-scrollbar-thumb': {
        background: '#f1f1f1',
        borderRadius: '0rem 0rem 0.2rem 0rem'
    }
}));

const initialRows = [
    { id: 1, fieldName: '1', md: '0.02', inc: '0.00', azi: '193.630', tvd: '0.02', tvdss: '0.00', north: '0.02', east: '0.002', dls: '0.00', toolface: '0', buildrate: '0.5', turnrate: '0', vs: '0', comments: 'this is comment' },
    { id: 2, fieldName: '2', md: '0.02', inc: '0.00', azi: '193.630', tvd: '0.02', tvdss: '0.00', north: '0.02', east: '0.002', dls: '0.00', toolface: '0', buildrate: '0.5', turnrate: '0', vs: '0', comments: 'this is comment' },
    { id: 3, fieldName: '3', md: '0.02', inc: '0.00', azi: '193.630', tvd: '0.02', tvdss: '0.00', north: '0.02', east: '0.002', dls: '0.00', toolface: '0', buildrate: '0.5', turnrate: '0', vs: '0', comments: 'this is comment' },
    { id: 4, fieldName: '4', md: '0.02', inc: '0.00', azi: '193.630', tvd: '0.02', tvdss: '0.00', north: '0.02', east: '0.002', dls: '0.00', toolface: '0', buildrate: '0.5', turnrate: '0', vs: '0', comments: 'this is comment' },
    { id: 5, fieldName: '5', md: '0.02', inc: '0.00', azi: '193.630', tvd: '0.02', tvdss: '0.00', north: '0.02', east: '0.002', dls: '0.00', toolface: '0', buildrate: '0.5', turnrate: '0', vs: '0', comments: 'this is comment' },
    { id: 6, fieldName: '6', md: '0.02', inc: '0.00', azi: '193.630', tvd: '0.02', tvdss: '0.00', north: '0.02', east: '0.002', dls: '0.00', toolface: '0', buildrate: '0.5', turnrate: '0', vs: '0', comments: 'this is comment' },
    { id: 7, fieldName: '7', md: '0.02', inc: '0.00', azi: '193.630', tvd: '0.02', tvdss: '0.00', north: '0.02', east: '0.002', dls: '0.00', toolface: '0', buildrate: '0.5', turnrate: '0', vs: '0', comments: 'this is comment' },
    { id: 8, fieldName: '8', md: '0.02', inc: '0.00', azi: '193.630', tvd: '0.02', tvdss: '0.00', north: '0.02', east: '0.002', dls: '0.00', toolface: '0', buildrate: '0.5', turnrate: '0', vs: '0', comments: 'this is comment' },
    { id: 9, fieldName: '9', md: '0.02', inc: '0.00', azi: '193.630', tvd: '0.02', tvdss: '0.00', north: '0.02', east: '0.002', dls: '0.00', toolface: '0', buildrate: '0.5', turnrate: '0', vs: '0', comments: 'this is comment' },
    { id: 10, fieldName: '10', md: '0.02', inc: '0.00', azi: '193.630', tvd: '0.02', tvdss: '0.00', north: '0.02', east: '0.002', dls: '0.00', toolface: '0', buildrate: '0.5', turnrate: '0', vs: '0', comments: 'this is comment' },
    { id: 11, fieldName: '11', md: '0.02', inc: '0.00', azi: '193.630', tvd: '0.02', tvdss: '0.00', north: '0.02', east: '0.002', dls: '0.00', toolface: '0', buildrate: '0.5', turnrate: '0', vs: '0', comments: 'this is comment' },
    { id: 12, fieldName: '12', md: '0.02', inc: '0.00', azi: '193.630', tvd: '0.02', tvdss: '0.00', north: '0.02', east: '0.002', dls: '0.00', toolface: '0', buildrate: '0.5', turnrate: '0', vs: '0', comments: 'this is comment' },
    { id: 13, fieldName: '13', md: '0.02', inc: '0.00', azi: '193.630', tvd: '0.02', tvdss: '0.00', north: '0.02', east: '0.002', dls: '0.00', toolface: '0', buildrate: '0.5', turnrate: '0', vs: '0', comments: 'this is comment' },
    { id: 14, fieldName: '14', md: '0.02', inc: '0.00', azi: '193.630', tvd: '0.02', tvdss: '0.00', north: '0.02', east: '0.002', dls: '0.00', toolface: '0', buildrate: '0.5', turnrate: '0', vs: '0', comments: 'this is comment' },
    { id: 15, fieldName: '15', md: '0.02', inc: '0.00', azi: '193.630', tvd: '0.02', tvdss: '0.00', north: '0.02', east: '0.002', dls: '0.00', toolface: '0', buildrate: '0.5', turnrate: '0', vs: '0', comments: 'this is comment' },
    { id: 16, fieldName: '16', md: '0.02', inc: '0.00', azi: '193.630', tvd: '0.02', tvdss: '0.00', north: '0.02', east: '0.002', dls: '0.00', toolface: '0', buildrate: '0.5', turnrate: '0', vs: '0', comments: 'this is comment' },
    { id: 17, fieldName: '17', md: '0.02', inc: '0.00', azi: '193.630', tvd: '0.02', tvdss: '0.00', north: '0.02', east: '0.002', dls: '0.00', toolface: '0', buildrate: '0.5', turnrate: '0', vs: '0', comments: 'this is comment' },
    { id: 18, fieldName: '18', md: '0.02', inc: '0.00', azi: '193.630', tvd: '0.02', tvdss: '0.00', north: '0.02', east: '0.002', dls: '0.00', toolface: '0', buildrate: '0.5', turnrate: '0', vs: '0', comments: 'this is comment' },
    { id: 19, fieldName: '19', md: '0.02', inc: '0.00', azi: '193.630', tvd: '0.02', tvdss: '0.00', north: '0.02', east: '0.002', dls: '0.00', toolface: '0', buildrate: '0.5', turnrate: '0', vs: '0', comments: 'this is comment' },
    { id: 20, fieldName: '20', md: '0.02', inc: '0.00', azi: '193.630', tvd: '0.02', tvdss: '0.00', north: '0.02', east: '0.002', dls: '0.00', toolface: '0', buildrate: '0.5', turnrate: '0', vs: '0', comments: 'this is comment' },

];

const initialColumns = [
    { field: 'fieldName', headerName: '', width: 50, sortable: false, align: 'center', headerAlign: 'center', },
    { field: 'md', headerName: 'MD', headerUnits: '(ft)', minWidth: 100, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell' },
    { field: 'inc', headerName: 'Inc', headerUnits: '(deg)', minWidth: 100, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', },
    { field: 'azi', headerName: 'Azi', headerUnits: '(deg)', minWidth: 100, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', },
    { field: 'tvd', headerName: 'TVD', headerUnits: '(ft)', minWidth: 100, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', },
    { field: 'tvdss', headerName: 'TVDSS', headerUnits: '(ft)', minWidth: 100, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', },
    { field: 'north', headerName: 'North', headerUnits: '(ft)', minWidth: 100, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', },
    { field: 'east', headerName: 'East', headerUnits: '(ft)', minWidth: 100, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', },
    { field: 'dls', headerName: 'DLS', headerUnits: '(deg)', minWidth: 100, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', },
    { field: 'toolface', headerName: 'Toolface', headerUnits: '(deg)', minWidth: 100, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', },
    { field: 'buildrate', headerName: 'Build Rate', headerUnits: '(deg)', minWidth: 100, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', },
    { field: 'turnrate', headerName: 'Turn Rate', headerUnits: '(deg)', minWidth: 100, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', },
    { field: 'vs', headerName: 'VS', headerUnits: '(ft)', minWidth: 100, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', },
    { field: 'comments', headerName: 'Comments', minWidth: 100, align: 'center', headerAlign: 'center', flex: 1, sortable: false, cellClassName: ['frozen--cell', 'column-cell'], },
];


export default function PathTable() {
    const [rows, setRows] = useState(initialRows);


    return (
        <Box component={'div'} sx={{ height: 800, width: '100%' }}>
            <StyledDataGrid
                rowSelection={false}
                disableColumnMenu
                disableColumnFilter
                rows={rows}
                hideFooter
                rowHeight={42}
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