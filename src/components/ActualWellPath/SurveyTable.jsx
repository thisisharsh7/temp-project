import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { fetchAxiosData, formatNumberToTwoDecimalPlaces, formatStringInNumberToTwoDecimalPlaces, postLogData } from '../constant';
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
    '& .Unfrozen--cell': {
        backgroundColor: '#f2ffff !important'
    },
    '& .Unfrozen--row': {
        backgroundColor: '#f2ffff !important'
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



export default function SurveyTable() {
    const { setUp, logArray, setLog, surveyRows, setSurveyRows, logIndex } = useMatchStore();
    const apiRef = useGridApiRef();
    const [call, setCall] = useState(false);
    const [ids, setIds] = useState(0);
    const initialColumns = [
        { field: 'fieldNumber', headerName: '', width: 105, sortable: false, align: 'center' },
        { field: 'md', headerName: 'MD', headerUnits: '(ft)', minWidth: 115, editable: true, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'Unfrozen--cell' },
        { field: 'inc', headerName: 'Inc', headerUnits: '(deg)', minWidth: 115, editable: true, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'Unfrozen--cell', },
        { field: 'azi', headerName: 'Azi', headerUnits: '(deg)', minWidth: 115, editable: true, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'Unfrozen--cell', },
        { field: 'cl', headerName: 'CL', headerUnits: '(ft)', minWidth: 115, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', editable: true },
        { field: 'tvd', headerName: 'TVD', headerUnits: '(ft)', minWidth: 115, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', editable: true },
        { field: 'ns', headerName: 'North', headerUnits: '(ft)', minWidth: 115, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', editable: true },
        { field: 'ew', headerName: 'East', headerUnits: '(ft)', minWidth: 115, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', editable: true },
        { field: 'dls', headerName: 'DLS', headerUnits: '(deg)', minWidth: 115, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', editable: true },
        { field: 'vs', headerName: 'VS', headerUnits: '(ft)', minWidth: 115, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', editable: true },
        { field: 'comment', headerName: 'Comment', minWidth: 180, align: 'right', editable: true, headerAlign: 'center', flex: 1, sortable: false, cellClassName: ['Unfrozen--cell', 'column-cell'], },
    ];


    const handleCellEditStop = (params, event) => {

        let updateCell = surveyRows;
        if (params.field !== 'comment') {
            const val = formatStringInNumberToTwoDecimalPlaces(event.target.value);
            updateCell = surveyRows.map((sRow, index) => {
                if (index === params.id - 1) {
                    return {
                        ...sRow,
                        [params.field]: val,
                    };
                } else {
                    return sRow;
                }
            });
        } else {
            updateCell = surveyRows.map((sRow, index) => {
                if (index === params.id - 1) {
                    return {
                        ...sRow,
                        [params.field]: event.target.value,
                    };
                } else {
                    return sRow;
                }
            });
        }
        setCall(true);
        setIds(params.id - 1);
        setSurveyRows(updateCell);
    };
    const processRowUpdate = async (currentRow) => {
        const idVal = localStorage.getItem('id');
        const data = await postLogData(`https://og-project.onrender.com/api/v1/survey?id=${idVal}`, {
            "md": formatStringInNumberToTwoDecimalPlaces(currentRow.md),
            "inc": formatStringInNumberToTwoDecimalPlaces(currentRow.inc),
            "azi": formatStringInNumberToTwoDecimalPlaces(currentRow.azi),
            "logName": logArray[logIndex].logName,
            "well": setUp.well,
            "tieAzi": surveyRows[0].azi,
            "fieldNumber": (currentRow.fieldNumber).toString()
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

        const updatedRows = surveyRows.map((row) => (row.id === currentRow.id ? updatedRow : row));
        setCall(false);
        setSurveyRows(updatedRows);
    }

    const processFullRowUpdate = async (currentRow) => {
        const idVal = localStorage.getItem('id');
        const updateData = await postLogData(`https://og-project.onrender.com/api/v1/editTiePnPoint?id=${idVal}`, {
            "excelName": setUp.excelName,
            "tieOn": currentRow.azi
        })
        console.log(updateData);
        if (logIndex !== -1 && logArray.length) {
            const data = await postLogData(`https://og-project.onrender.com/api/v1/updateSurveyAzimuth?id=${idVal}`, {
                "updatedTieAzi": Number(currentRow.azi),
                "logName": logArray[logIndex].logName,
                "well": setUp.well,
            });
            if (data.surveys.length) {
                let tieOnRows
                data.surveys.map((newSurvey, index) => {
                    const updatedRow = {
                        "id": index,
                        "fieldNumber": newSurvey.fieldNumber,
                        "md": formatNumberToTwoDecimalPlaces(newSurvey["md"]),
                        "cl": formatNumberToTwoDecimalPlaces(newSurvey["cl"]),
                        "inc": formatNumberToTwoDecimalPlaces(newSurvey["inc"]),
                        "azi": formatNumberToTwoDecimalPlaces(newSurvey["azi"]),
                        "tvd": formatNumberToTwoDecimalPlaces(newSurvey["tvd"]),
                        "ns": formatNumberToTwoDecimalPlaces(newSurvey["ns"]),
                        "ew": formatNumberToTwoDecimalPlaces(newSurvey["ew"]),
                        "dls": formatNumberToTwoDecimalPlaces(newSurvey["dls"]),
                        "vs": formatNumberToTwoDecimalPlaces(newSurvey["vs"]),
                        "comment": ""
                    };
                    tieOnRows = surveyRows.map((row) => (row.id === updatedRow.id ? updatedRow : row));
                })
                setCall(false);
                setSurveyRows(tieOnRows);
            }
        }
    }

    const updateLogByMD = async (key, val) => {
        const idVal = localStorage.getItem('id');
        const logData = await postLogData(`https://og-project.onrender.com/api/v1/surveyEdit?id=${idVal}`, {
            "logName": logArray[logIndex].logName,
            [key]: val
        })
        console.log(logData);
    }
    useEffect(() => {
        if (ids !== 0 && call) {
            const currentRow = surveyRows[ids];
            if (currentRow.md && currentRow.azi && currentRow.inc) {
                processRowUpdate(currentRow);
                const rowId = currentRow.id + 1;
                const field = 'md'
                const newLog = [...logArray];
                if (newLog[logIndex]) {
                    if (newLog[logIndex]["usedFrom"] === 0 || newLog[logIndex]["usedFrom"] === "" || currentRow.md === newLog[logIndex]["usedFrom"]) {
                        updateLogByMD("usedFrom", currentRow.md);
                        newLog[logIndex]["usedFrom"] = currentRow.md;
                    } else {
                        updateLogByMD("usedBy", currentRow.md);
                        newLog[logIndex]["usedBy"] = currentRow.md;
                    }

                }
                setLog(newLog);
                apiRef.current.setCellFocus(rowId, field);
            }
        }
        if (ids === 0 && call) {
            const currentRow = surveyRows[ids];
            if (currentRow.azi) {
                const jsonData = { "azi": currentRow.azi }
                const idVal = localStorage.getItem('id');
                console.log(jsonData)
                fetchAxiosData(jsonData, idVal, setUp.excelName);
            }
        }
    }, [surveyRows])



    return (
        <Box component={'div'} sx={{ height: 702, width: '100%' }}>
            <StyledDataGrid
                rowSelection={false}
                disableColumnMenu
                apiRef={apiRef}
                disableColumnFilter
                onCellEditStop={handleCellEditStop}
                rows={surveyRows}
                getRowId={(row) => row.id}
                hideFooter
                isCellEditable={(params) => (params.id === 1 || (params.id !== 1 && (params.field === "md" || params.field === "inc" || params.field === "azi" || params.field === "comment")
                    && logIndex !== -1 && logArray.length))}
                rowHeight={42}
                columnHeaderHeight={72}
                getRowClassName={(params) =>
                    (params.id === 1) ? 'Unfrozen--row' : ''
                }

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