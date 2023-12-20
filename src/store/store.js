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
        { id: 1, fieldNumber: 'Tie On', md: '', inc: '', azi: '', tvd: '', ns: '', ew: '', dls: '', vs: '', comment: '' },
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
        lastRevised: "dd-mm-yy",
        enteries: false,
        loading: false,
    },
    updateSetUp: (newSetUp) => set(state => ({ setUp: newSetUp })),


    lokiRows: [
        { id: 1, col1: 'Slot Location', col2: '', col3: '', col4: '', col5: '', col6: '', col7: '', col8: '', col9: '' },
        { id: 2, col1: 'Facility Reference Pt', col2: '', col3: '', col4: '', col5: '', col6: '', col7: '', col8: '', col9: '' },
        { id: 3, col1: 'Field Reference Pt', col2: '', col3: '', col4: '', col5: '', col6: '', col7: '', col8: '', col9: '' },

    ],

    updateLokiRows: (newLoki) => set(state => ({ lokiRows: newLoki })),



    //object variable for interpolate Tab
    interpolateRows: [
        { id: 1, index: '1', md: '', inc: '', azi: '', tvd: '', ns: '', ew: '', comment: '' },
        { id: 2, index: '2', md: '', inc: '', azi: '', tvd: '', ns: '', ew: '', comment: '' },
        { id: 3, index: '3', md: '', inc: '', azi: '', tvd: '', ns: '', ew: '', comment: '' },
        { id: 4, index: '4', md: '', inc: '', azi: '', tvd: '', ns: '', ew: '', comment: '' },
        { id: 5, index: '5', md: '', inc: '', azi: '', tvd: '', ns: '', ew: '', comment: '' },
        { id: 6, index: '6', md: '', inc: '', azi: '', tvd: '', ns: '', ew: '', comment: '' },
        { id: 7, index: '7', md: '', inc: '', azi: '', tvd: '', ns: '', ew: '', comment: '' },
        { id: 8, index: '8', md: '', inc: '', azi: '', tvd: '', ns: '', ew: '', comment: '' },
        { id: 9, index: '9', md: '', inc: '', azi: '', tvd: '', ns: '', ew: '', comment: '' },
        { id: 10, index: '10', md: '', inc: '', azi: '', tvd: '', ns: '', ew: '', comment: '' },
        { id: 11, index: '11', md: '', inc: '', azi: '', tvd: '', ns: '', ew: '', comment: '' },
        { id: 12, index: '12', md: '', inc: '', azi: '', tvd: '', ns: '', ew: '', comment: '' },
        { id: 13, index: '13', md: '', inc: '', azi: '', tvd: '', ns: '', ew: '', comment: '' },
        { id: 14, index: '14', md: '', inc: '', azi: '', tvd: '', ns: '', ew: '', comment: '' },
        { id: 15, index: '15', md: '', inc: '', azi: '', tvd: '', ns: '', ew: '', comment: '' },
        { id: 16, index: '16', md: '', inc: '', azi: '', tvd: '', ns: '', ew: '', comment: '' },
        { id: 17, index: '17', md: '', inc: '', azi: '', tvd: '', ns: '', ew: '', comment: '' },
        { id: 18, index: '18', md: '', inc: '', azi: '', tvd: '', ns: '', ew: '', comment: '' },
        { id: 19, index: '19', md: '', inc: '', azi: '', tvd: '', ns: '', ew: '', comment: '' },
        { id: 20, index: '20', md: '', inc: '', azi: '', tvd: '', ns: '', ew: '', comment: '' },
    ],

    updateInterpolateRows: (newInterpolate) => set(state => ({ interpolateRows: newInterpolate })),


    surveyNotEditRows: [
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

}))