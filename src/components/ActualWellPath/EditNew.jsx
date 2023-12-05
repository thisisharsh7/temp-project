import { Button, Box, Modal, Stack, TextField, Paper, Select, MenuItem, FormControl, InputLabel } from "@mui/material"
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

const EditNew = () => {
    const { setOpen, open } = useMatchStore();

    const handleClose = () => {
        setOpen({ show: false, text: '' });
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

                            <BoxHeader boxHead="Edit Survey Log" />

                            <Stack display={'grid'} padding={{ md: "20px 28px", sm: "20px 20px", xs: "20px 18px" }} gap={2}>

                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    label="Survey Tool Program Name"
                                    inputProps={{ style: { fontSize: 15.2 } }}
                                    size="medium"
                                />
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Survey Tool Model</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={""}
                                        label="Survey Tool Model"
                                    >
                                        <MenuItem value={"ISCWSA MWD"}>ISCWSA MWD</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Error Model</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={""}
                                        label="Error Model"
                                    >
                                        <MenuItem value={"MWD-STD"}>MWD-STD</MenuItem>
                                    </Select>
                                </FormControl>

                                <Stack direction={'row'} mt={2} justifyContent="flex-end" spacing={2}>
                                    <Button variant="text" sx={{
                                        color: "gray"
                                    }} onClick={handleClose}>Cancel</Button>
                                    <Button variant="contained">Save</Button>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Paper>
                </Box>
            </Modal>
        </div>
    )
}

export default EditNew