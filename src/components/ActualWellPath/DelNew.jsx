import { Button, Box, Modal, Stack, Paper, Typography } from "@mui/material"
import { useMatchStore } from "../../store/store";
import BoxHeader from "../SetUp/BoxHeader";


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
    const { setOpen, open, logArray, setLog } = useMatchStore();

    const handleClose = () => {
        setOpen({ show: false, text: '', id: -1 });
    }
    const handleDelete = () => {
        const updatedLogArray = [
            ...logArray.slice(0, open.id),
            ...logArray.slice(open.id + 1),
        ];

        // Update the state with the new array
        setLog(updatedLogArray);
        handleClose();
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

                            <Stack display={'grid'} padding={{ md: "20px 28px", sm: "20px 20px", xs: "20px 18px" }} gap={2}>

                                <Typography variant="body1" textAlign={"center"}>All surveys associated with this Survey Log will be deleted.<br /> Are you sure?
                                </Typography>

                                <Stack direction={'row'} mt={2} justifyContent="flex-end" spacing={2}>
                                    <Button variant="text" sx={{
                                        color: "gray"
                                    }} onClick={handleClose}>Cancel</Button>
                                    <Button variant="contained" onClick={handleDelete}>Confirm</Button>
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