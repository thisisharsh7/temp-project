import { create } from 'zustand'

export const useMatchStore = create((set) => ({
    //object variable of actualWellPath
    logArray: [{ naam: "ADNOC Onshore/ 13-3/Bin Csg Gyro Surveys/ <25.0ft - 38.0ft>", model: "ISCWSA MWD", error: "MWD-STD" }],
    setLog: (log) => set(state => ({ logArray: log })),

    //object vairable for plannedwellPath
    plannedWell: {
        uploadFile: "",
        enteries: false,
        loading: false
    },
    setPlannedWell: (splan) => set(state => ({ plannedWell: splan })),

    //variable for edit modal for setUp
    open: {
        show: false,
        text: '',
        id: -1
    },

    setOpen: (sopen) => set(state => ({ open: sopen })),
    //object variable for setUp Tab
    setUp: {
        uploadFile: "",
        wellbore: {
            Name: "",
            Created: "dd-mm-yy",
            LastRevised: "dd-mm-yy",
        },
        well: {
            Name: "",
            GovernmentId: "",
            LastRevised: "dd-mm-yy",
        },
        slot: {
            Name: "",
            GridNorthing: "",
            GridEasting: "",
            Latitude: "",
            Longitude: "",
            North: "",
            East: ""
        },
        installation: {
            Name: "",
            Easting: "",
            Northing: "",
            MapName: "",
            NorthAlignment: ""
        },
        field: {
            Name: "",
            Easting: "",
            Northing: "",
            MapName: "",
            NorthAlignment: ""
        },
        additional: {
            Units: "",
            VerticalSectionAzimuth: "",
            SurveyReferencePoint: ""
        },
        enteries: false,
        loading: false,
    },

    //variable to update set up tab
    updateSetUp: (newSetUp) => set(state => ({ setUp: newSetUp })),
}))