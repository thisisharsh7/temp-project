import { Box, Stack, Typography, Paper } from '@mui/material';
import PathTable from './PlannedWellPath/PathTable';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const PlannedWellPath = () => {

  return (
    <Box mt={2.5} component="div">
      <Stack>
        <Stack direction={'row'} alignSelf={'center'} alignItems={'center'} spacing={2} border={2} borderRadius={'0.2rem'} borderColor={'lightgray'} px={2.5} py={1}>
          <InfoOutlinedIcon color={'primary'} />
          <Typography color={'primary'}>You can change Planned Well Path by uploading another Well Plan from Setup Tab.</Typography>
        </Stack>
      </Stack>
      <Box mt={8} mb={6}>
        <Paper square={false} elevation={0} sx={{
          border: "1px solid #a8a4a48f"
        }}>
          <PathTable />
        </Paper>
      </Box>
    </Box>
  )
}

export default PlannedWellPath