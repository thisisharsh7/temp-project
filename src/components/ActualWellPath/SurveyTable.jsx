
import { DataGrid, GridRowEditStopReasons, } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { postLogData } from '../constant';
import { useMatchStore } from '../../store/store';

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
        borderRight: `1px solid #e7e7e6`,
        paddingLeft: '28px',
        paddingRight: '28px'

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
    '& .Unfrozen--cell': {
        backgroundColor: '#f2ffff'
    },

    '& .MuiDataGrid-virtualScroller::-webkit-scrollbar': {
        width: '4px' /* Change this value to adjust the width of the scrollbar */
    },


    '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track': {
        background: 'lightgray',
        borderRadius: '0rem 0rem 0.2rem 0rem'
    },
    '& .column-cell': {
        borderRight: "none",
    },
    '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb': {
        background: '#f1f1f1',
        borderRadius: '0rem 0rem 0.2rem 0rem'
    },
    '& ::-webkit-scrollbar': {
        width: '4px',
        height: '4px'
    },


    '& ::-webkit-scrollbar-track': {
        background: 'lightgray',
        borderRadius: '0rem 0rem 0.2rem 0rem'
    },
    '& ::-webkit-scrollbar-thumb': {
        background: '#f1f1f1',
        borderRadius: '0rem 0rem 0.2rem 0rem'
    }
}));

const initialRows = [
    { id: 1, fieldNumber: 'Tie On', md: '0.00', inc: '0.00', azi: '193.630', tvd: '0.00', ns: '0.00', ew: '0.00', dls: '', vs: '0.00', comment: '' },
    { id: 2, fieldNumber: 2, md: '', cl: '', inc: '', azi: '', tvd: '', ns: '', ew: '', dls: '', vs: '', comment: '' },
    { id: 3, fieldNumber: 3, md: '', cl: '', inc: '', azi: '', tvd: '', ns: '', ew: '', dls: '', vs: '', comment: '' },
    { id: 4, fieldNumber: 4, md: '', cl: '', inc: '', azi: '', tvd: '', ns: '', ew: '', dls: '', vs: '', comment: '' },
    { id: 5, fieldNumber: 5, md: '', cl: '', inc: '', azi: '', tvd: '', ns: '', ew: '', dls: '', vs: '', comment: '' },
    { id: 6, fieldNumber: 6, md: '', cl: '', inc: '', azi: '', tvd: '', ns: '', ew: '', dls: '', vs: '', comment: '' },
    { id: 7, fieldNumber: 7, md: '', cl: '', inc: '', azi: '', tvd: '', ns: '', ew: '', dls: '', vs: '', comment: '' },
    { id: 8, fieldNumber: 8, md: '', cl: '', inc: '', azi: '', tvd: '', ns: '', ew: '', dls: '', vs: '', comment: '' },
    { id: 9, fieldNumber: 9, md: '', cl: '', inc: '', azi: '', tvd: '', ns: '', ew: '', dls: '', vs: '', comment: '' },
    { id: 10, fieldNumber: 10, md: '', cl: '', inc: '', azi: '', tvd: '', ns: '', ew: '', dls: '', vs: '', comment: '' },
    { id: 11, fieldNumber: 11, md: '', cl: '', inc: '', azi: '', tvd: '', ns: '', ew: '', dls: '', vs: '', comment: '' },
    { id: 12, fieldNumber: 12, md: '', cl: '', inc: '', azi: '', tvd: '', ns: '', ew: '', dls: '', vs: '', comment: '' },
    { id: 13, fieldNumber: 13, md: '', cl: '', inc: '', azi: '', tvd: '', ns: '', ew: '', dls: '', vs: '', comment: '' },
    { id: 14, fieldNumber: 14, md: '', cl: '', inc: '', azi: '', tvd: '', ns: '', ew: '', dls: '', vs: '', comment: '' },
    { id: 15, fieldNumber: 15, md: '', cl: '', inc: '', azi: '', tvd: '', ns: '', ew: '', dls: '', vs: '', comment: '' },

];


const initialColumns = [
    { field: 'fieldNumber', headerName: '', width: 105, sortable: false },
    { field: 'md', type: 'number', headerName: 'MD', headerUnits: '(ft)', minWidth: 115, editable: true, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'Unfrozen--cell' },
    { field: 'cl', type: 'number', headerName: 'CL', headerUnits: '(ft)', minWidth: 115, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell' },
    { field: 'inc', type: 'number', headerName: 'Inc', headerUnits: '(deg)', minWidth: 115, editable: true, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'Unfrozen--cell', },
    { field: 'azi', type: 'number', headerName: 'Azi', headerUnits: '(deg)', minWidth: 115, editable: true, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'Unfrozen--cell', },
    { field: 'tvd', type: 'number', headerName: 'TVD', headerUnits: '(ft)', minWidth: 115, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', },
    { field: 'ns', type: 'number', headerName: 'North', headerUnits: '(ft)', minWidth: 115, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', },
    { field: 'ew', type: 'number', headerName: 'East', headerUnits: '(ft)', minWidth: 115, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', },
    { field: 'dls', type: 'number', headerName: 'DLS', headerUnits: '(deg)', minWidth: 115, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', },
    { field: 'vs', type: 'number', headerName: 'VS', headerUnits: '(ft)', minWidth: 115, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', },
    { field: 'comment', headerName: 'Comment', minWidth: 180, align: 'right', editable: true, headerAlign: 'center', flex: 1, sortable: false, cellClassName: ['Unfrozen--cell', 'column-cell'], },
];


export default function SurveyTable() {
    const [rows, setRows] = useState(initialRows);
    const { setUp, logArray } = useMatchStore();

    const handleRowEditStop = (params, event) => {
        if (params.reason === GridRowEditStopReasons.rowFocusOut) {
            event.defaultMuiPrevented = true;
        }
    };

    const processRowUpdate = async (newRow) => {

        const formattedRow = {
            ...newRow,
            md: parseFloat(newRow.md).toFixed(2),
            inc: parseFloat(newRow.inc).toFixed(2),
            azi: parseFloat(newRow.azi).toFixed(2),
        };

        console.log({
            "md": formattedRow.md,
            "inc": formattedRow.inc,
            "azi": formattedRow.azi,
            "logName": logArray[0].naam,
            "well": setUp.well,
            "fieldNumber": (formattedRow.fieldNumber - 1)
        });

        const data = await postLogData('https://og-project.onrender.com/api/v1/survey', {
            "md": formattedRow.md,
            "inc": formattedRow.inc,
            "azi": formattedRow.azi,
            "logName": logArray[0].naam,
            "well": setUp.well,
            "fieldNumber": (formattedRow.fieldNumber - 1)
        });

        let updatedRow;

        if (data) {
            updatedRow = {
                "id": formattedRow.id,
                "fieldNumber": formattedRow.fieldNumber,
                "md": data.newSurvey["md"],
                "cl": data.newSurvey["cl"],
                "inc": data.newSurvey["inc"],
                "azi": data.newSurvey["azi"],
                "tvd": data.newSurvey["tvd"],
                "ns": data.newSurvey["ns"],
                "ew": data.newSurvey["ew"],
                "dls": data.newSurvey["dls"],
                "vs": data.newSurvey["vs"],
                "comment": formattedRow.comment
            };
        } else {
            updatedRow = { ...formattedRow };
        }

        const updatedRows = rows.map((row) => (row.id === formattedRow.id ? updatedRow : row));
        setRows(updatedRows);

        return updatedRow;
    };

    const onProcessRowUpdateError = () => {
        alert('Error Occured');
    }


    return (
        <Box component={'div'} sx={{ height: 702, width: '100%' }}>
            <StyledDataGrid
                rowSelection={false}
                disableColumnMenu
                disableColumnFilter
                editMode='row'
                onRowEditStop={handleRowEditStop}
                processRowUpdate={processRowUpdate}
                onProcessRowUpdateError={onProcessRowUpdateError}
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