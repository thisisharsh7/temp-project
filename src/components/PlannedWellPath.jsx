import { Box, Stack, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { VisuallyHiddenInput } from './constant';

const PlannedWellPath = () => {

  const [fileSelected, selectFile] = useState("");
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      selectFile(file);
    }
  };

  return (
    <Box mt={2.5} component="div">

      <Stack alignItems={{ md: "center", xs: "space-between" }} justifyContent={'space-between'} spacing={4} direction={{ md: 'row', xs: 'column-reverse' }}>
        {/* <Typography variant='h5' fontWeight={500} width={'100%'} >
          {
            (fileSelected === "") ? "Import Well Plan" : "Current Well Plan"
          }
        </Typography> */}
        <Stack direction={{ sm: 'row', xs: 'row-reverse' }} width={'100%'} justifyContent={{ sm: "flex-end", xs: "space-between" }} alignItems='center' gap={{ sm: 8, xs: 2 }} alignSelf={{ sm: "flex-end", xs: "flex-start" }}>
          {
            (fileSelected !== "") && <Typography variant='h5' fontWeight={500} color="#009B4D">{fileSelected.name.split('.')[0].slice(0, 16)}.xlsx</Typography>
          }
          <Button variant="contained" onClick={() => document.getElementById('fileInput').click()}>
            Upload File
            <VisuallyHiddenInput id="fileInput" type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
          </Button>
        </Stack>
      </Stack>

      <Stack component='div' my={6} direction='column' spacing={4} >
      </Stack>
    </Box>
  )
}

export default PlannedWellPath