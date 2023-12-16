import { create } from 'zustand'

export const useMatchStore = create((set) => ({
    //object variable for planned well path
    plannedRows: [
        { id: 1, fieldNumber: '1', md: '', inc: '', azi: '', tvd: '', tvdss: '', north: '', east: '', dls: '', toolface: '', buildrate: '', turnrate: '', vs: '', comments: '' },
        { id: 2, fieldNumber: '2', md: '', inc: '', azi: '', tvd: '', tvdss: '', north: '', east: '', dls: '', toolface: '', buildrate: '', turnrate: '', vs: '', comments: '' },
        { id: 3, fieldNumber: '3', md: '', inc: '', azi: '', tvd: '', tvdss: '', north: '', east: '', dls: '', toolface: '', buildrate: '', turnrate: '', vs: '', comments: '' },
        { id: 4, fieldNumber: '4', md: '', inc: '', azi: '', tvd: '', tvdss: '', north: '', east: '', dls: '', toolface: '', buildrate: '', turnrate: '', vs: '', comments: '' },
        { id: 5, fieldNumber: '5', md: '', inc: '', azi: '', tvd: '', tvdss: '', north: '', east: '', dls: '', toolface: '', buildrate: '', turnrate: '', vs: '', comments: '' },
        { id: 6, fieldNumber: '6', md: '', inc: '', azi: '', tvd: '', tvdss: '', north: '', east: '', dls: '', toolface: '', buildrate: '', turnrate: '', vs: '', comments: '' },
        { id: 7, fieldNumber: '7', md: '', inc: '', azi: '', tvd: '', tvdss: '', north: '', east: '', dls: '', toolface: '', buildrate: '', turnrate: '', vs: '', comments: '' },
        { id: 8, fieldNumber: '8', md: '', inc: '', azi: '', tvd: '', tvdss: '', north: '', east: '', dls: '', toolface: '', buildrate: '', turnrate: '', vs: '', comments: '' },
        { id: 9, fieldNumber: '9', md: '', inc: '', azi: '', tvd: '', tvdss: '', north: '', east: '', dls: '', toolface: '', buildrate: '', turnrate: '', vs: '', comments: '' },
        { id: 10, fieldNumber: '10', md: '', inc: '', azi: '', tvd: '', tvdss: '', north: '', east: '', dls: '', toolface: '', buildrate: '', turnrate: '', vs: '', comments: '' },
        { id: 11, fieldNumber: '11', md: '', inc: '', azi: '', tvd: '', tvdss: '', north: '', east: '', dls: '', toolface: '', buildrate: '', turnrate: '', vs: '', comments: '' },
        { id: 12, fieldNumber: '12', md: '', inc: '', azi: '', tvd: '', tvdss: '', north: '', east: '', dls: '', toolface: '', buildrate: '', turnrate: '', vs: '', comments: '' },
        { id: 13, fieldNumber: '13', md: '', inc: '', azi: '', tvd: '', tvdss: '', north: '', east: '', dls: '', toolface: '', buildrate: '', turnrate: '', vs: '', comments: '' },
        { id: 14, fieldNumber: '14', md: '', inc: '', azi: '', tvd: '', tvdss: '', north: '', east: '', dls: '', toolface: '', buildrate: '', turnrate: '', vs: '', comments: '' },
        { id: 15, fieldNumber: '15', md: '', inc: '', azi: '', tvd: '', tvdss: '', north: '', east: '', dls: '', toolface: '', buildrate: '', turnrate: '', vs: '', comments: '' },
        { id: 16, fieldNumber: '16', md: '', inc: '', azi: '', tvd: '', tvdss: '', north: '', east: '', dls: '', toolface: '', buildrate: '', turnrate: '', vs: '', comments: '' },
        { id: 17, fieldNumber: '17', md: '', inc: '', azi: '', tvd: '', tvdss: '', north: '', east: '', dls: '', toolface: '', buildrate: '', turnrate: '', vs: '', comments: '' },
        { id: 18, fieldNumber: '18', md: '', inc: '', azi: '', tvd: '', tvdss: '', north: '', east: '', dls: '', toolface: '', buildrate: '', turnrate: '', vs: '', comments: '' },
        { id: 19, fieldNumber: '19', md: '', inc: '', azi: '', tvd: '', tvdss: '', north: '', east: '', dls: '', toolface: '', buildrate: '', turnrate: '', vs: '', comments: '' },
        { id: 20, fieldNumber: '20', md: '', inc: '', azi: '', tvd: '', tvdss: '', north: '', east: '', dls: '', toolface: '', buildrate: '', turnrate: '', vs: '', comments: '' },

    ],
    setPlannedRows: (rows) => set(state => ({ plannedRows: rows })),

    //object variable for log table
    logIndex: -1,
    setLogIndex: (idx) => set(state => ({ logIndex: idx })),

    //object variable for survey table
    surveyRows: [
        { id: 1, fieldNumber: 'Tie On', md: '0.00', inc: '0.00', azi: '193.630', tvd: '0.00', ns: '0.00', ew: '0.00', dls: '', vs: '0.00', comment: '' },
        { id: 2, fieldNumber: 1, md: '', cl: '', inc: '', azi: '', tvd: '', ns: '', ew: '', dls: '', vs: '', comment: '' },
        { id: 3, fieldNumber: 2, md: '', cl: '', inc: '', azi: '', tvd: '', ns: '', ew: '', dls: '', vs: '', comment: '' },
        { id: 4, fieldNumber: 3, md: '', cl: '', inc: '', azi: '', tvd: '', ns: '', ew: '', dls: '', vs: '', comment: '' },
        { id: 5, fieldNumber: 4, md: '', cl: '', inc: '', azi: '', tvd: '', ns: '', ew: '', dls: '', vs: '', comment: '' },
        { id: 6, fieldNumber: 5, md: '', cl: '', inc: '', azi: '', tvd: '', ns: '', ew: '', dls: '', vs: '', comment: '' },
        { id: 7, fieldNumber: 6, md: '', cl: '', inc: '', azi: '', tvd: '', ns: '', ew: '', dls: '', vs: '', comment: '' },
        { id: 8, fieldNumber: 7, md: '', cl: '', inc: '', azi: '', tvd: '', ns: '', ew: '', dls: '', vs: '', comment: '' },
        { id: 9, fieldNumber: 8, md: '', cl: '', inc: '', azi: '', tvd: '', ns: '', ew: '', dls: '', vs: '', comment: '' },
        { id: 10, fieldNumber: 9, md: '', cl: '', inc: '', azi: '', tvd: '', ns: '', ew: '', dls: '', vs: '', comment: '' },
        { id: 11, fieldNumber: 10, md: '', cl: '', inc: '', azi: '', tvd: '', ns: '', ew: '', dls: '', vs: '', comment: '' },
        { id: 12, fieldNumber: 11, md: '', cl: '', inc: '', azi: '', tvd: '', ns: '', ew: '', dls: '', vs: '', comment: '' },
        { id: 13, fieldNumber: 12, md: '', cl: '', inc: '', azi: '', tvd: '', ns: '', ew: '', dls: '', vs: '', comment: '' },
        { id: 14, fieldNumber: 13, md: '', cl: '', inc: '', azi: '', tvd: '', ns: '', ew: '', dls: '', vs: '', comment: '' },
        { id: 15, fieldNumber: 14, md: '', cl: '', inc: '', azi: '', tvd: '', ns: '', ew: '', dls: '', vs: '', comment: '' },

    ],
    setSurveyRows: (rows) => set(state => ({ surveyRows: rows })),

    //object variable of actualWellPath
    logArray: [],
    setLog: (log) => set(state => ({ logArray: log })),

    //variable for edit modal for setUp
    open: {
        show: false,
        text: '',
        id: -1
    },
    setOpen: (sopen) => set(state => ({ open: sopen })),

    //object variable for setUp Tab
    setUp: {
        excelName: "",
        well: "",
        wellbore: "",
        planRevision: "",
        fieldName: "",
        utm: "",
        northReference: "",
        magneticDeclination: "",
        convergence: "",
        fieldVerticalReference: "",
        rotaryToField: "",
        rotarySubsea: "",
        rotaryToMHL: "",
        sectionX: "",
        sectionY: "",
        verticalSectionAzimuth: "",
        LastRevised: "dd-mm-yy",
        enteries: false,
        loading: false,
    },
    updateSetUp: (newSetUp) => set(state => ({ setUp: newSetUp })),


    //object variable for interpolate Tab
    interpolateRows : [
        { id: 1, col1: '1', col2: '0.02', col3: '0.00', col4: '193.630', col5: '0.02', col6: '0.00', col7: '0.02', col8: '0.002', col9: '0.00', col10: '0', col11: '0.5', col12: '0', col13: '0', col14: 'this is comment' },
        { id: 2, col1: '2', col2: '0.02', col3: '0.00', col4: '193.630', col5: '0.02', col6: '0.00', col7: '0.02', col8: '0.002', col9: '0.00', col10: '0', col11: '0.5', col12: '0', col13: '0', col14: 'this is comment' },
        { id: 3, col1: '3', col2: '0.02', col3: '0.00', col4: '193.630', col5: '0.02', col6: '0.00', col7: '0.02', col8: '0.002', col9: '0.00', col10: '0', col11: '0.5', col12: '0', col13: '0', col14: 'this is comment' },
        { id: 4, col1: '4', col2: '0.02', col3: '0.00', col4: '193.630', col5: '0.02', col6: '0.00', col7: '0.02', col8: '0.002', col9: '0.00', col10: '0', col11: '0.5', col12: '0', col13: '0', col14: 'this is comment' },
        { id: 5, col1: '5', col2: '0.02', col3: '0.00', col4: '193.630', col5: '0.02', col6: '0.00', col7: '0.02', col8: '0.002', col9: '0.00', col10: '0', col11: '0.5', col12: '0', col13: '0', col14: 'this is comment' },
        { id: 6, col1: '6', col2: '0.02', col3: '0.00', col4: '193.630', col5: '0.02', col6: '0.00', col7: '0.02', col8: '0.002', col9: '0.00', col10: '0', col11: '0.5', col12: '0', col13: '0', col14: 'this is comment' },
        { id: 7, col1: '7', col2: '0.02', col3: '0.00', col4: '193.630', col5: '0.02', col6: '0.00', col7: '0.02', col8: '0.002', col9: '0.00', col10: '0', col11: '0.5', col12: '0', col13: '0', col14: 'this is comment' },
        { id: 8, col1: '8', col2: '0.02', col3: '0.00', col4: '193.630', col5: '0.02', col6: '0.00', col7: '0.02', col8: '0.002', col9: '0.00', col10: '0', col11: '0.5', col12: '0', col13: '0', col14: 'this is comment' },
        { id: 9, col1: '9', col2: '0.02', col3: '0.00', col4: '193.630', col5: '0.02', col6: '0.00', col7: '0.02', col8: '0.002', col9: '0.00', col10: '0', col11: '0.5', col12: '0', col13: '0', col14: 'this is comment' },
        { id: 10, col1: '10', col2: '0.02', col3: '0.00', col4: '193.630', col5: '0.02', col6: '0.00', col7: '0.02', col8: '0.002', col9: '0.00', col10: '0', col11: '0.5', col12: '0', col13: '0', col14: 'this is comment' },
        { id: 11, col1: '11', col2: '0.02', col3: '0.00', col4: '193.630', col5: '0.02', col6: '0.00', col7: '0.02', col8: '0.002', col9: '0.00', col10: '0', col11: '0.5', col12: '0', col13: '0', col14: 'this is comment' },
        { id: 12, col1: '12', col2: '0.02', col3: '0.00', col4: '193.630', col5: '0.02', col6: '0.00', col7: '0.02', col8: '0.002', col9: '0.00', col10: '0', col11: '0.5', col12: '0', col13: '0', col14: 'this is comment' },
        { id: 13, col1: '13', col2: '0.02', col3: '0.00', col4: '193.630', col5: '0.02', col6: '0.00', col7: '0.02', col8: '0.002', col9: '0.00', col10: '0', col11: '0.5', col12: '0', col13: '0', col14: 'this is comment' },
        { id: 14, col1: '14', col2: '0.02', col3: '0.00', col4: '193.630', col5: '0.02', col6: '0.00', col7: '0.02', col8: '0.002', col9: '0.00', col10: '0', col11: '0.5', col12: '0', col13: '0', col14: 'this is comment' },
        { id: 15, col1: '15', col2: '0.02', col3: '0.00', col4: '193.630', col5: '0.02', col6: '0.00', col7: '0.02', col8: '0.002', col9: '0.00', col10: '0', col11: '0.5', col12: '0', col13: '0', col14: 'this is comment' },
        { id: 16, col1: '16', col2: '0.02', col3: '0.00', col4: '193.630', col5: '0.02', col6: '0.00', col7: '0.02', col8: '0.002', col9: '0.00', col10: '0', col11: '0.5', col12: '0', col13: '0', col14: 'this is comment' },
        { id: 17, col1: '17', col2: '0.02', col3: '0.00', col4: '193.630', col5: '0.02', col6: '0.00', col7: '0.02', col8: '0.002', col9: '0.00', col10: '0', col11: '0.5', col12: '0', col13: '0', col14: 'this is comment' },
        { id: 18, col1: '18', col2: '0.02', col3: '0.00', col4: '193.630', col5: '0.02', col6: '0.00', col7: '0.02', col8: '0.002', col9: '0.00', col10: '0', col11: '0.5', col12: '0', col13: '0', col14: 'this is comment' },
        { id: 19, col1: '19', col2: '0.02', col3: '0.00', col4: '193.630', col5: '0.02', col6: '0.00', col7: '0.02', col8: '0.002', col9: '0.00', col10: '0', col11: '0.5', col12: '0', col13: '0', col14: 'this is comment' },
        { id: 20, col1: '20', col2: '0.02', col3: '0.00', col4: '193.630', col5: '0.02', col6: '0.00', col7: '0.02', col8: '0.002', col9: '0.00', col10: '0', col11: '0.5', col12: '0', col13: '0', col14: 'this is comment' },
    
    ],
    
}))