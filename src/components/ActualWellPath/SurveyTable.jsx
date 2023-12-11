
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { formatNumberToTwoDecimalPlaces, formatStringInNumberToTwoDecimalPlaces, postLogData } from '../constant';
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





export default function SurveyTable() {
    const { setUp, logArray } = useMatchStore();
    const [rows, setRows] = useState(initialRows);
    const [ids, setIds] = useState(0);
    const initialColumns = [
        { field: 'fieldNumber', headerName: '', width: 105, sortable: false },
        { field: 'md', headerName: 'MD', headerUnits: '(ft)', minWidth: 115, editable: (logArray.length) ? true : false, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'Unfrozen--cell' },
        { field: 'cl', headerName: 'CL', headerUnits: '(ft)', minWidth: 115, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell' },
        { field: 'inc', headerName: 'Inc', headerUnits: '(deg)', minWidth: 115, editable: (logArray.length) ? true : false, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'Unfrozen--cell', },
        { field: 'azi', headerName: 'Azi', headerUnits: '(deg)', minWidth: 115, editable: (logArray.length) ? true : false, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'Unfrozen--cell', },
        { field: 'tvd', headerName: 'TVD', headerUnits: '(ft)', minWidth: 115, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', },
        { field: 'ns', headerName: 'North', headerUnits: '(ft)', minWidth: 115, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', },
        { field: 'ew', headerName: 'East', headerUnits: '(ft)', minWidth: 115, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', },
        { field: 'dls', headerName: 'DLS', headerUnits: '(deg)', minWidth: 115, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', },
        { field: 'vs', headerName: 'VS', headerUnits: '(ft)', minWidth: 115, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', },
        { field: 'comment', headerName: 'Comment', minWidth: 180, align: 'right', editable: (logArray.length) ? true : false, headerAlign: 'center', flex: 1, sortable: false, cellClassName: ['Unfrozen--cell', 'column-cell'], },
    ];



    const handleCellEditStop = (params, event) => {
        let updateCell = rows;
        if (params.field !== 'comment') {
            const val = formatStringInNumberToTwoDecimalPlaces(event.target.value);
            updateCell = rows.map((sRow, index) => {
                if (index === params.id - 1) {
                    // Update the specified field for the target row
                    return {
                        ...sRow,
                        [params.field]: val,
                    };
                } else {
                    // Keep the row unchanged
                    return sRow;
                }
            });
        } else {
            updateCell = rows.map((sRow, index) => {
                if (index === params.id - 1) {
                    // Update the specified field for the target row
                    return {
                        ...sRow,
                        [params.field]: event.target.value,
                    };
                } else {
                    // Keep the row unchanged
                    return sRow;
                }
            });
        }
        setIds(params.id - 1);
        setRows(updateCell);
    };
    const processRowUpdate = async (currentRow) => {
        const data = await postLogData('https://og-project.onrender.com/api/v1/survey', {
            "md": Number(currentRow.md),
            "inc": Number(currentRow.inc),
            "azi": Number(currentRow.azi),
            "logName": logArray[0].naam,
            "well": setUp.well,
            "fieldNumber": (currentRow.fieldNumber - 1).toString()
        });

        let updatedRow;

        if (data) {
            updatedRow = {
                "id": currentRow.id,
                "fieldNumber": currentRow.fieldNumber,
                "md": formatNumberToTwoDecimalPlaces(data.newSurvey["md"]),
                "cl": formatNumberToTwoDecimalPlaces(data.newSurvey["cl"]),
                "inc": formatNumberToTwoDecimalPlaces(data.newSurvey["inc"]),
                "azi": formatNumberToTwoDecimalPlaces(data.newSurvey["azi"]),
                "tvd": formatNumberToTwoDecimalPlaces(data.newSurvey["tvd"]),
                "ns": formatNumberToTwoDecimalPlaces(data.newSurvey["ns"]),
                "ew": formatNumberToTwoDecimalPlaces(data.newSurvey["ew"]),
                "dls": formatNumberToTwoDecimalPlaces(data.newSurvey["dls"]),
                "vs": formatNumberToTwoDecimalPlaces(data.newSurvey["vs"]),
                "comment": currentRow.comment
            };
        } else {
            updatedRow = { ...currentRow };
        }

        const updatedRows = rows.map((row) => (row.id === currentRow.id ? updatedRow : row));
        setRows(updatedRows);
    }

    useEffect(() => {
        if (ids !== 0) {
            const currentRow = rows[ids];
            if (currentRow.md && currentRow.azi && currentRow.inc) {
                processRowUpdate(currentRow);
            }
        }
        if (!logArray.length) {
            console.log('yes')
            setRows(initialRows);
        }

    }, [rows, logArray])



    return (
        <Box component={'div'} sx={{ height: 702, width: '100%' }}>
            <StyledDataGrid
                rowSelection={false}
                disableColumnMenu
                disableColumnFilter
                onCellEditStop={handleCellEditStop}
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