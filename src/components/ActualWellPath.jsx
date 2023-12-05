import { Box, Stack, Paper, Typography, Button } from '@mui/material';
import LogTable from './ActualWellPath/LogTable';
import SurveyTable from './ActualWellPath/SurveyTable';
import BoxHeader from './SetUp/BoxHeader';
import { useMatchStore } from '../store/store';

const ActualWellPath = () => {
  const { setOpen } = useMatchStore();

  const handleClick = (val) => {
    setOpen({ show: true, text: val });
  }
  return (
    <Box mt={2.5} component="div">
      <Stack direction={'column'} spacing={5}>
        <Paper square={false} elevation={0} sx={{
          border: "1px solid #a8a4a48f"
        }}>
          <Stack direction='column' alignItems={'stretch'} width={'100%'}>
            <Box padding={{ md: "14px 28px", sm: "14px 20px", xs: "14px 18px" }} sx={{
              backgroundColor: "#f1f1f1",
              borderRadius: "0.2rem 0.2rem 0rem 0rem",
              borderBottom: "1px solid #a8a4a48f"
            }} >
              <Stack direction={{ sm: 'row', xs: 'column' }} spacing={4} justifyContent={'space-between'} alignItems={'center'}>
                <Typography variant='h5' component='h1' fontWeight={'bold'}>
                  Survey Tool Program
                </Typography>
                <Stack direction={{ sm: 'row', xs: 'column' }} spacing={{ sm: 4, xs: 2 }} alignSelf={{ sm: 'flex-end', xs: 'flex-start' }}>
                  <Button variant="outlined" sx={{
                    'color': 'black',
                    'borderColor': 'black !important',
                    ':hover': {
                      backgroundColor: '#0abd61 !important',
                      borderColor: '#0abd61  !important',
                      color: 'white'
                    },
                  }} onClick={() => handleClick('Add')}>
                    Add New
                  </Button>
                  <Button variant="outlined" sx={{
                    'color': 'black',
                    'borderColor': 'black !important',
                    ':hover': {
                      backgroundColor: '#0abd61 !important',
                      borderColor: '#0abd61  !important',
                      color: 'white'
                    },
                  }} onClick={() => handleClick('Edit')}>
                    Edit
                  </Button>
                  <Button variant="outlined" sx={{
                    'color': 'black',
                    'borderColor': 'black !important',
                    ':hover': {
                      backgroundColor: '#0abd61 !important',
                      borderColor: '#0abd61  !important',
                      color: 'white'
                    },
                  }} onClick={() => handleClick('Remove')}>
                    Remove
                  </Button>
                </Stack>
              </Stack>
            </Box>
            <LogTable />
          </Stack>
        </Paper>
        <Paper square={false} elevation={0} sx={{
          border: "1px solid #a8a4a48f"
        }}>
          <Stack direction='column' alignItems={'stretch'} width={'100%'}>

            <BoxHeader boxHead="Actual Survey" />

            <SurveyTable />
          </Stack>
        </Paper>
      </Stack>
    </Box>
  )
}

export default ActualWellPath