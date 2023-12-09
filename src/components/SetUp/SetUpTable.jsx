
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
        fontWeight: "1000",
    },
    '& .MuiDataGrid-columnHeaderTitleContainer': {
        alignItems: 'flex-start'
    },
    '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
        borderRight: `1px solid #e7e7e6`,
        paddingBlock: '13px',

    },
    '& .MuiDataGrid-columnHeader:last-of-type , .MuiDataGrid-cell:last-of-type': {
        borderRight: `none`,
        paddingRight: '28px',

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
    '& ::-webkit-scrollbar': {
        width: '4px',
        height: '4px'
    },


    '& ::-webkit-scrollbar-track': {
        background: 'lightgray',
        borderRadius: '0rem 0rem 0.2rem 0rem'
    },
    '& .last--cell': {
        borderRight: "none",
        paddingRight: '28px'
    },
    '& .first--cell': {
        borderRight: "none",
        paddingLeft: '28px'
    },
    '& ::-webkit-scrollbar-thumb': {
        background: '#f1f1f1',
        borderRadius: '0rem 0rem 0.2rem 0rem'
    }
}));

const initialRows = [
    { id: 1, col1: 'Slot Location', col2: '0', col3: '0', col4: '216749', col5: '2581569', col6: `23°19'16.1719"N`, col7: `54°13'49.0730"E`, col8: '0', col9: '0' },
    { id: 2, col1: 'Facility Reference Pt', col2: '', col3: '', col4: '216749', col5: '2581569', col6: `23°19'16.1719"N`, col7: `54°13'49.0730"E`, col8: '3.3', col9: '3' },
    { id: 3, col1: 'Field Reference Pt', col2: '', col3: '', col4: '209194.56', col5: '2572759.46', col6: `23°19'16.1719"N`, col7: `54°13'49.0730"E`, col8: '', col9: '' },

];

const initialColumns = [
    { field: 'col1', headerName: '', width: 195, sortable: false, cellClassName: 'first--cell' },
    { field: 'col2', headerName: 'Local North', headerUnits: '(ft)', width: 120, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell' },
    { field: 'col3', headerName: 'Local East', headerUnits: '(ft)', minWidth: 120, editable: true, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'Unfrozen--cell', },
    { field: 'col4', headerName: 'Grid East', headerUnits: '(m)', minWidth: 120, editable: true, align: 'right', headerAlign: 'center', sortable: false, flex: 1, cellClassName: 'Unfrozen--cell', },
    { field: 'col5', headerName: 'Grid North', headerUnits: '(m)', minWidth: 120, align: 'right', headerAlign: 'center', sortable: false, flex: 1, cellClassName: 'frozen--cell' },
    { field: 'col6', headerName: 'Latitude', headerUnits: '', minWidth: 145, align: 'right', headerAlign: 'center', sortable: false, flex: 1, cellClassName: 'frozen--cell' },
    { field: 'col7', headerName: 'Longitude', headerUnits: '', minWidth: 145, align: 'right', headerAlign: 'center', sortable: false, flex: 1, cellClassName: 'frozen--cell' },
    { field: 'col8', headerName: 'Horiz Uncert 1sd', headerUnits: '(ft)', minWidth: 160, align: 'right', headerAlign: 'center', sortable: false, flex: 1, cellClassName: 'frozen--cell' },
    { field: 'col9', headerName: 'Vert Uncert 1sd', headerUnits: '(ft)', minWidth: 160, align: 'right', headerAlign: 'center', sortable: false, flex: 1, cellClassName: ['last--cell', 'frozen--cell'] },
];

export default function PathTable() {
    const [rows, setRows] = useState(initialRows);


    return (
        <Box component={'div'} sx={{ height: '100%', width: '100%' }}>
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