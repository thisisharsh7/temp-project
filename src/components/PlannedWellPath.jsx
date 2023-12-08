import { Box, Stack, Button, Typography } from '@mui/material';
import { VisuallyHiddenInput, uploadFile } from './constant';
import { useMatchStore } from '../store/store';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect } from 'react';
import PathTable from './PlannedWellPath/PathTable';

const PlannedWellPath = () => {
  const { plannedWell, setPlannedWell } = useMatchStore();

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log(file);
      setPlannedWell({ ...plannedWell, loading: true, enteries: false })
      const data = await uploadFile(file);
      if (data) {
        setPlannedWell({ uploadFile: file.name, loading: false, enteries: true });
        console.log('done');
      } else {
        setPlannedWell({ ...plannedWell, loading: false, enteries: false });
        alert('File not supported!');
      }
    }
  };

  useEffect(() => {
    console.log(plannedWell);
  })

  return (
    <Box mt={2.5} component="div">

      <Stack alignItems={{ md: "center", xs: "space-between" }} justifyContent={'space-between'} spacing={4} direction={{ md: 'row', xs: 'column-reverse' }}>
        <Typography variant='h5' fontWeight={500} width={'100%'} >
          {
            (!plannedWell.enteries) ? "Import Well Path" : "Current Well Path"
          }
        </Typography>
        <Stack direction={{ sm: 'row', xs: 'row-reverse' }} width={'100%'} justifyContent={{ sm: "flex-end", xs: "space-between" }} alignItems='center' gap={{ sm: 8, xs: 2 }} alignSelf={{ sm: "flex-end", xs: "flex-start" }}>
          {
            (plannedWell.enteries) && <Typography variant='h5' fontWeight={500} color="#009B4D">{plannedWell.uploadFile}</Typography>
          }
          {
            (plannedWell.loading) && <CircularProgress size={28} />
          }

          <Button variant="contained" onClick={() => document.getElementById('fileInput').click()} sx={{
            "&.MuiButtonBase-root:hover": {
              bgcolor: "#0abd61"
            }
          }}>
            Select File
            <VisuallyHiddenInput id="fileInput" type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
          </Button>
        </Stack>
      </Stack>
      <Box component='div' mt={8} mb={6}>
        <PathTable />
      </Box>
    </Box>
  )
}

export default PlannedWellPath