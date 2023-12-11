import { create } from 'zustand'

export const useMatchStore = create((set) => ({
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

    //variable to update set up tab
    updateSetUp: (newSetUp) => set(state => ({ setUp: newSetUp })),
}))