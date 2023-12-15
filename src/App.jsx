import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography'
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SetUp from "./components/SetUp";
import PlannedWellPath from "./components/PlannedWellPath";
import Interpolate from "./components/Interpolate";
import Comparison from "./components/Comparison"
import ActualWellPath from './components/ActualWellPath';
import AddNew from './components/ActualWellPath/AddNew'
import EditNew from './components/ActualWellPath/EditNew'
import DelNew from './components/ActualWellPath/DelNew'
import { useMatchStore } from './store/store';
import { getSavedData, updateDate } from './components/constant';




const userCurrentFile = localStorage.getItem('fileName');


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const { open, setPlannedRows, setUp, setLog, updateSetUp, logArray, plannedRows } = useMatchStore();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const fetchPlanned = async () => {
    try {
      const data = await getSavedData(`https://og-project.onrender.com/api/v1/getWellPlanned?excelName=${setUp.excelName}`);
      if (data.plan.length) {
        setPlannedRows(data.plan)
      }
    } catch (error) {
      console.log('error');
    }

  };
  const fetchData = async () => {
    try {
      const data = await getSavedData(`https://og-project.onrender.com/api/v1/getAllFields?excelName=${userCurrentFile}`);
      if (data.details) {
        updateSetUp({
          ...data.details, loading: false, enteries: true, LastRevised: updateDate()
        });
      }
    } catch (error) {
      console.log('error');
    }

  };
  const fetchLogs = async () => {
    try {
      const data = await getSavedData(`https://og-project.onrender.com/api/v1/allLogs/`);
      if (data.logs.length) {
        setLog(data.logs);
      }
    } catch (error) {
      console.log('error');
    }
  };


  React.useEffect(() => {
    fetchData();
    fetchPlanned();
    fetchLogs();
  }, [setUp.excelName])

  return (
    <Box component="main" maxWidth={"1920px"} marginInline={"auto"} >
      {(open.text === 'Add') && <AddNew />}
      {(open.text === 'Edit') && <EditNew />}
      {(open.text === 'Remove') && <DelNew />}

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Stack display={'grid'} gridTemplateColumns={{ md: '300px 1fr', sm: '1fr 1fr' }} alignItems={'center'} justifyContent={'space-between'}>
          <Typography variant="h5" mx={2.5} mt={0.5} fontWeight={700} flex={1} width={'400px'}>Survey Application Demo</Typography>
          <Tabs value={value} onChange={handleChange} sx={{
            placeSelf: { md: "flex-end" },
            mx: 1
          }} variant='scrollable' allowScrollButtonsMobile aria-label="basic tabs example" >
            <Tab label="Set Up" sx={{ fontSize: "16px" }}  {...a11yProps(0)} />
            <Tab label="Planned Well Path" sx={{ fontSize: "16px" }}  {...a11yProps(1)} />
            <Tab label="Interpolate" sx={{ fontSize: "16px" }}  {...a11yProps(2)} />
            <Tab label="Actual Well Path" sx={{ fontSize: "16px" }}  {...a11yProps(3)} />
            <Tab label="Comparison" sx={{ fontSize: "16px" }}  {...a11yProps(4)} />
          </Tabs>
        </Stack>
      </Box>

      <CustomTabPanel value={value} index={0} >
        <SetUp />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <PlannedWellPath />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Interpolate />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <ActualWellPath />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Comparison />
      </CustomTabPanel>
    </Box >
  );
}