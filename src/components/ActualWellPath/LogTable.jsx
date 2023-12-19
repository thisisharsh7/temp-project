import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { useMatchStore } from '../../store/store';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useEffect } from 'react';
import { formatNumberToTwoDecimalPlaces, getSavedData } from '../constant';

export default function LogTable() {
    const { setOpen, logArray, logIndex, setLogIndex, surveyRows, setSurveyRows, setUp } = useMatchStore();

    const handleButton = (val, idx) => {

        setOpen({ show: true, text: val, id: idx });
    }

    const handleRowClick = (e) => {
        const rowIndex = parseInt(e.currentTarget.getAttribute('data-row-index'));
        setLogIndex(rowIndex);
    };

    const fetchSurveys = async () => {
        let updateSurveys = [
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
        ]
        try {
            const idVal = localStorage.getItem('id');
            const previousSurvey = await getSavedData(`https://og-project.onrender.com/api/v1/allSurveys?logName=${logArray[logIndex].logName}&id=${idVal}`);

            if (previousSurvey.surveys.length) {
                const updatedDataMap = previousSurvey.surveys.reduce((map, obj) => {
                    map[obj.fieldNumber] = obj;
                    return map;
                }, {});
                console.log(updatedDataMap, 'harsh');

                updateSurveys = surveyRows.map(row => {
                    const updatedObject = updatedDataMap[row.fieldNumber];
                    if (updatedObject) {
                        // If there's an update for the current fieldNumber, merge the objects
                        updatedObject["md"] = formatNumberToTwoDecimalPlaces(updatedObject["md"]);
                        updatedObject["azi"] = formatNumberToTwoDecimalPlaces(updatedObject["azi"]);
                        updatedObject["inc"] = formatNumberToTwoDecimalPlaces(updatedObject["inc"]);
                        return { ...row, ...updatedObject };
                    }
                    return row;
                });
            }
            setSurveyRows(updateSurveys);
        } catch (error) {
            console.log('Survey error');
            setSurveyRows(updateSurveys);
        }

    };

    useEffect(() => {
        if (logIndex !== -1) {
            fetchSurveys();
        }
    }, [logIndex])
    return (
        <TableContainer component={Paper} elevation={0} >
            <Table aria-label="simple table" >
                <TableHead>
                    <TableRow >
                        <TableCell sx={{
                            fontSize: "0.95rem",
                            fontWeight: "600",
                            fontFamily: '\'Ubuntu\', sans-serif',
                            paddingLeft: 3.5
                        }}>Log Name</TableCell>
                        <TableCell align="right" width={120} sx={{
                            fontSize: "0.95rem",
                            fontWeight: "600",
                            fontFamily: '\'Ubuntu\', sans-serif',
                        }}>Depth From</TableCell>
                        <TableCell align="right" width={120} sx={{
                            fontSize: "0.95rem",
                            fontWeight: "600",
                            fontFamily: '\'Ubuntu\', sans-serif',
                        }}>Depth To</TableCell>
                        <TableCell width={200}></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {logArray.map((row, index) => (
                        <TableRow
                            key={index}
                            hover
                            sx={{
                                '&:last-child td, &:last-child th': { border: 0 },
                                ':hover': {
                                    cursor: 'pointer'
                                }
                            }}
                            data-row-index={index}
                            onClick={handleRowClick}
                            className={logIndex === index ? "table-row selected" : "table-row"}
                        >
                            <TableCell component="th" scope="row" sx={{
                                paddingLeft: 3.5,
                                fontSize: '15.2px',
                                fontWeight: 500,
                            }}>
                                {row.logName}
                            </TableCell>
                            <TableCell align="right" sx={{
                                fontSize: '15.2px',
                                fontWeight: 500,
                            }}>{(Number(row.usedFrom)) ? formatNumberToTwoDecimalPlaces(row.usedFrom) : " "}</TableCell>
                            <TableCell align="right" sx={{
                                fontSize: '15.2px',
                                fontWeight: 500
                            }}>{(Number(row.usedBy)) ? formatNumberToTwoDecimalPlaces(row.usedBy) : " "}</TableCell>
                            <TableCell align="right" sx={{
                                paddingRight: 3.5
                            }}>
                                <Stack direction={'row'} justifyContent={'flex-end'} spacing={3}>
                                    <IconButton color='primary' size='small' onClick={() => handleButton('Edit', index)} sx={{
                                        "&.MuiButtonBase-root:hover": {
                                            bgcolor: "transparent"
                                        }
                                    }}>
                                        <EditOutlinedIcon fontSize='18px' />
                                    </IconButton>
                                    <IconButton color='primary' size='small' onClick={() => handleButton('Remove', index)} sx={{
                                        "&.MuiButtonBase-root:hover": {
                                            bgcolor: "transparent"
                                        }
                                    }}>
                                        <DeleteOutlineOutlinedIcon fontSize='18px' />
                                    </IconButton>
                                </Stack>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}