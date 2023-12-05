import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useMatchStore } from '../../store/store';

function createData(logName, usedFrom, usedTo) {
    return { logName, usedFrom, usedTo };
}

const rows = [
    createData('ADNC Onshore / 13-3/Bin Csg Gyro Surveys <25.0ft - 154.03ft>', '25.00', '1543.00')
];

export default function LogTable() {
    const { setOpen } = useMatchStore();
    const handleClick = (e) => {
        if (e.detail === 2) {
            setOpen({ show: true, text: 'Edit' });
        }
    }
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table" >
                <TableHead>
                    <TableRow>
                        <TableCell>Log Name</TableCell>
                        <TableCell align="right">Used From</TableCell>
                        <TableCell align="right">Used To</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.logName}
                            hover
                            onClick={handleClick}
                            sx={{
                                '&:last-child td, &:last-child th': { border: 0 },
                                ':hover': {
                                    cursor: 'pointer'
                                }
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {row.logName}
                            </TableCell>
                            <TableCell align="right">{row.usedTo}</TableCell>
                            <TableCell align="right">{row.usedFrom}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}