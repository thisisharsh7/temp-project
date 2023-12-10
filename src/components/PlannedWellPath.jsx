import { Box, Stack, Typography, Paper } from '@mui/material';
import PathTable from './PlannedWellPath/PathTable';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import BoxHeader from './SetUp/BoxHeader';

const PlannedWellPath = () => {

  return (
    <Box mt={1.5} component="div">
      <Stack>
        <Stack direction={'row'} alignSelf={'flex-start'} alignItems={'center'} spacing={2}>
          <InfoOutlinedIcon />
          <Typography sx={{
            fontSize: '15.2px',
            fontWeight: 500
          }}>You can change Planned Well Path by uploading another Well Plan from Setup Tab.</Typography>
        </Stack>
      </Stack>
      <Box mt={4.5} mb={6}>
        <Paper square={false} elevation={0} sx={{
          border: "1px solid #a8a4a48f"
        }}>
          <Stack direction='column' alignItems={'stretch'} width={'100%'}>

            <BoxHeader boxHead="Planned Surveys" />
            <Box>
              <PathTable />
            </Box>
          </Stack>
        </Paper>
      </Box>
    </Box>
  )
}

export default PlannedWellPath