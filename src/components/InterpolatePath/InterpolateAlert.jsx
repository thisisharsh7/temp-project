import { Button, Box, Modal, Stack, Paper, Typography } from "@mui/material"
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

const InterpolateAlert = ({ show, handleClose }) => {
    const MaxMD = localStorage.getItem('MaxMd');

    return (
        <div >
            <Modal
                open={show}
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

                            <BoxHeader boxHead="Error" />

                            <Stack display={'grid'} mt={2} padding={{ md: "20px 28px", sm: "20px 20px", xs: "20px 18px" }} gap={2}>

                                <Typography variant="subtitle1">Input MD can not be less than 0 or more than {MaxMD} as per Well Plan.
                                </Typography>

                                <Stack direction={'row'} mt={2} justifyContent="flex-end" spacing={2}>
                                    <Button variant="text" sx={{
                                        color: "gray"
                                    }} onClick={handleClose}>Cancel</Button>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Paper>
                </Box>
            </Modal>
        </div>
    )
}

export default InterpolateAlert