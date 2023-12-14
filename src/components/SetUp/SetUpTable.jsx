
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { useMatchStore } from '../../store/store';
import { Padding } from '@mui/icons-material';

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
        paddingRight: '27px',

    },
    '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
        borderBottom: `1px solid #e7e7e6`,
    },
    '& .MuiDataGrid-row--lastVisible .MuiDataGrid-cell': {
        borderBottom: 'none'
    },
    '& .MuiDataGrid-row--lastVisible .MuiDataGrid-cell:first-of-type': {
        borderRadius: '0rem 0rem 0rem 0.2rem',
    },
    '& .MuiDataGrid-cell:first-of-type': {
        paddingLeft: '27px',
    },
    '& .MuiDataGrid-row--lastVisible .column-cell': {
        borderRadius: '0rem 0rem 0.2rem 0rem'
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
        height: '3px'
    },


    '& ::-webkit-scrollbar-track': {
        background: 'lightgray',
        borderRadius: '0rem 0rem 0.2rem 0rem'
    },
    '& ::-webkit-scrollbar-thumb': {
        background: '#f1f1f1',
        borderRadius: '0rem 0rem 0.2rem 0rem'
    },
    '& .empty-cell': {
        backgroundColor: '#f6f6f6',

    },
    '& .last-cellempty': {
        backgroundColor: '#f6f6f6',
        borderRight: 'none',
        borderRadius: '0rem 0rem 0.2rem 0rem'

    },
}));

const initialRows = [
    { id: 1, col1: 'Slot Location', col2: '', col3: '', col4: '', col5: '', col6: '', col7: '', col8: '', col9: '' },
    { id: 2, col1: 'Facility Reference Pt', col2: '', col3: '', col4: '', col5: '', col6: '', col7: '', col8: '', col9: '' },
    { id: 3, col1: 'Field Reference Pt', col2: '', col3: '', col4: '', col5: '', col6: '', col7: '', col8: '', col9: '' },

];

const initialColumns = [
    { field: 'col1', headerName: '', minWidth: 195, sortable: false, cellClassName: 'first--cell', flex: 1 },
    { field: 'col2', headerName: 'Local North', headerUnits: '(ft)', minWidth: 195, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'frozen--cell', flex: 1 },
    { field: 'col3', headerName: 'Local East', headerUnits: '(ft)', minWidth: 195, align: 'right', headerAlign: 'center', sortable: false, cellClassName: 'Unfrozen--cell', },
    { field: 'col4', headerName: 'Grid East', headerUnits: '(m)', minWidth: 195, align: 'right', headerAlign: 'center', sortable: false, flex: 1, cellClassName: 'Unfrozen--cell', },
    { field: 'col5', headerName: 'Grid North', headerUnits: '(m)', minWidth: 195, align: 'right', headerAlign: 'center', sortable: false, flex: 1, cellClassName: 'frozen--cell' },
    { field: 'col6', headerName: 'Latitude', headerUnits: '', minWidth: 195, align: 'right', headerAlign: 'center', sortable: false, flex: 1, cellClassName: 'frozen--cell' },
    { field: 'col7', headerName: 'Longitude', headerUnits: '', minWidth: 195, align: 'right', headerAlign: 'center', sortable: false, flex: 1, cellClassName: 'frozen--cell' },
    { field: 'col8', headerName: 'Horiz Uncert 1sd', headerUnits: '(ft)', minWidth: 195, align: 'right', headerAlign: 'center', sortable: false, flex: 1, cellClassName: 'frozen--cell' },
    { field: 'col9', headerName: 'Vert Uncert 1sd', headerUnits: '(ft)', minWidth: 195, align: 'right', headerAlign: 'center', sortable: false, flex: 1, cellClassName: 'frozen--cell' },
];

export default function PathTable() {
    const [rows, setRows] = useState(initialRows);
    const [columns, setColumns] = useState(initialColumns)
    const { setUp } = useMatchStore();


    const getCellClassName = ({ value, field }) => {
        if (!value && field !== 'col9') {
            return 'empty-cell';
        } else if (field === 'col9' && !value) {
            return 'last-cellempty';
        } else if (field === 'col9') {
            return 'last--cell';
        }
        return '';
    };
    useEffect(() => {
        if (setUp.excelName != "") {
            const {
                localNorthSlotLocation
                , localEastSlotLocation
                , localGridNorthSlotLocation
                , localGridEastSlotLocation
                , localLongitudeSlotLocation
                , localLatitudeSlotLocation
                , localHorizSlotLocation
                , localVertSlotLocation
                , localNorthFacilityReferencePt
                , localEastFacilityReferencePt
                , localGridNorthFacilityReferencePt
                , localGridEastFacilityReferencePt
                , localLongitudeFacilityReferencePt
                , localLatitudeFacilityReferencePt
                , localHorizFacilityReferencePt
                , localVertFacilityReferencePt
                , localNorthFieldReferencePt
                , localEastFieldReferencePt
                , localGridNorthFieldReferencePt
                , localGridEastFieldReferencePt
                , localLongitudeFieldReferencePt
                , localLatitudeFieldReferencePt
                , localHorizFieldReferencePt
                , localVertFieldReferencePt
            } = setUp
            const modifiedRows = [
                { id: 1, col1: 'Slot Location', col2: localNorthSlotLocation, col3: localEastSlotLocation, col4: localGridNorthSlotLocation, col5: localGridEastSlotLocation, col6: localLongitudeSlotLocation, col7: localLatitudeSlotLocation, col8: localHorizSlotLocation, col9: localVertSlotLocation },
                { id: 2, col1: 'Facility Reference Pt', col2: localNorthFacilityReferencePt, col3: localEastFacilityReferencePt, col4: localGridNorthFacilityReferencePt, col5: localGridEastFacilityReferencePt, col6: localLongitudeFacilityReferencePt, col7: localLatitudeFacilityReferencePt, col8: localHorizFacilityReferencePt, col9: localVertFacilityReferencePt },
                { id: 3, col1: 'Field Reference Pt', col2: localNorthFieldReferencePt, col3: localEastFieldReferencePt, col4: localGridNorthFieldReferencePt, col5: localGridEastFieldReferencePt, col6: localLongitudeFieldReferencePt, col7: localLatitudeFieldReferencePt, col8: localHorizFieldReferencePt, col9: localVertFieldReferencePt },
            ];
            const modifiedColumns = initialColumns.map((column, index) => {
                const modifiedColumn = { ...column };
                if (index !== 0) {
                    modifiedColumn.editable = true;
                }
                return modifiedColumn;
            });
            setColumns(modifiedColumns);
            setRows(modifiedRows);
        } else {
            setRows(initialRows);
        }
    }, [setUp.excelName])
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
                columns={columns.map((column) => ({
                    ...column,
                    cellClassName: getCellClassName,
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