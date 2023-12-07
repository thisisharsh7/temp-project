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

export default function LogTable() {
    const { setOpen, logArray } = useMatchStore();

    const handleButton = (val, idx) => {
        setOpen({ show: true, text: val, id: idx });
    }
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
                        }}>Used From</TableCell>
                        <TableCell align="right" width={120} sx={{
                            fontSize: "0.95rem",
                            fontWeight: "600",
                            fontFamily: '\'Ubuntu\', sans-serif',
                        }}>Used To</TableCell>
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
                        >
                            <TableCell component="th" scope="row" sx={{
                                paddingLeft: 3.5
                            }}>
                                {`${row.naam} < ${row.model} >  < ${row.error} >`}
                            </TableCell>
                            <TableCell align="right" >{112.23}</TableCell>
                            <TableCell align="right">{180.23}</TableCell>
                            <TableCell align="right" sx={{
                                paddingRight: 3.5
                            }}>
                                <Stack direction={'row'} justifyContent={'flex-end'} spacing={4}>
                                    <IconButton color='primary' size='small' onClick={() => handleButton('Edit', index)}>
                                        <EditOutlinedIcon />
                                    </IconButton>
                                    <IconButton color='primary' size='small' onClick={() => handleButton('Remove', index)}>
                                        <DeleteOutlineOutlinedIcon />
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