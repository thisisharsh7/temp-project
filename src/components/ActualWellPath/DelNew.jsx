import { Button, Box, Modal, Stack, Paper, Typography } from "@mui/material"
import { useMatchStore } from "../../store/store";
import BoxHeader from "../SetUp/BoxHeader";
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from "react";
import { DeleteLogData } from "../constant";


const style = {
    position: 'absolute',
    top: '50%',
    borderRadius: '0.5em',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
};

const DelNew = () => {
    const { setOpen, open, logArray, setLog, setSurveyRows } = useMatchStore();
    const [loading, setLoading] = useState(false);

    const handleClose = () => {
        setOpen({ show: false, text: '', id: -1 });
    }
    const handleDelete = async () => {
        setLoading(true);
        const idVal = localStorage.getItem('id');
        const logData = await DeleteLogData(`https://og-project.onrender.com/api/v1/deleteALog?id=${idVal}`, {
            "logName": logArray[open.id].logName,
        });
        if (logData) {
            const updatedLogArray = [
                ...logArray.slice(0, open.id),
                ...logArray.slice(open.id + 1),
            ];
            setLog(updatedLogArray);
            setSurveyRows([
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

            ])
        } else {
            alert('Log not Deleted.');
        }
        // Update the state with the new array
        handleClose();
        setLoading(false);
    }
    return (
        <div >
            <Modal
                open={open.show}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} width={{
                    xl: 480,
                    sm: 320,
                    xs: 220
                }} >
                    <Paper square={false} elevation={0} sx={{
                        border: "1px solid #a8a4a48f"
                    }}>
                        <Stack direction='column' alignItems={'stretch'} width={'100%'}>

                            <BoxHeader boxHead="Delete Survey Log" />

                            <Stack display={'grid'} mt={2} padding={{ md: "20px 28px", sm: "20px 20px", xs: "20px 18px" }} gap={2}>

                                <Typography variant="subtitle1">All surveys associated with this Survey Log will be deleted. Are you sure?
                                </Typography>

                                <Stack direction={'row'} mt={2} justifyContent="flex-end" spacing={2}>
                                    <Button variant="text" sx={{
                                        color: "gray"
                                    }} onClick={handleClose}>Cancel</Button>
                                    <Button variant="text" sx={{
                                        color: "#0abd61",
                                        fontWeight: "600",
                                    }} onClick={handleDelete}> {loading ? <CircularProgress size={14} /> : 'Confirm'}</Button>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Paper>
                </Box>
            </Modal>
        </div>
    )
}

export default DelNew