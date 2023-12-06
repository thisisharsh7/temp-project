import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const createData = (cnt, MD, Inc, Azi, TVD, North, East, Dogleg, VerticalSection) => {
    return { cnt, MD, Inc, Azi, TVD, North, East, Dogleg, VerticalSection };
};
const val = 1;

export default function SurveyTable() {
    const [rows, setRows] = useState([
        createData('Tie on', '0.00', '0.00', '193.630', '0.00', '0.00', '0.00', '', '0.00'),
        createData('', '', '', '', '0.00', '0.00', '0.00', '', '0.00'),
        createData('', '', '', '', '0.00', '0.00', '0.00', '', '0.00'),
        createData('', '', '', '', '0.00', '0.00', '0.00', '', '0.00'),
        createData('', '', '', '', '0.00', '0.00', '0.00', '', '0.00'),
    ]);

    const handleInputChange = (event, index) => {
        const { name, value } = event.target;
        const newRows = [...rows];
        newRows[index][name] = value;
        setRows(newRows);
    };

    const addRow = () => {
        setRows((prevRows) => [
            ...prevRows,
            createData('Tie on', '', '', '', '0.00', '0.00', '0.00', '', '0.00'),
        ]);
    };

    return (
        <TableContainer component={Paper} elevation={0}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell width={'80px'}></TableCell>
                        <TableCell align="right" sx={{ width: 100 }} >MD (ft)</TableCell>
                        <TableCell align="right" sx={{ width: 100 }}>Inc [deg]</TableCell>
                        <TableCell align="right" sx={{ width: 100 }}>Azi [deg]</TableCell>
                        <TableCell align="right" sx={{ width: 100 }}>TVD [ft]</TableCell>
                        <TableCell align="right" sx={{ width: 100 }}>North [ft]</TableCell>
                        <TableCell align="right" sx={{ width: 100 }}>East [ft]</TableCell>
                        <TableCell align="right" sx={{ width: 100 }}>Dogleg [deg/100ft]</TableCell>
                        <TableCell align="right" sx={{ width: 100 }}>Vertical Section [ft]</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" >
                                {index === 0 ? 'Tie On' : (
                                    index + 1
                                )}
                            </TableCell>
                            <TableCell align="right">
                                {index === 0 ? row.Inc : (
                                    <Input
                                        name="Inc"
                                        value={row.Inc}
                                        onChange={(event) => handleInputChange(event, index)}
                                        sx={{ direction: 'rtl' }}
                                    />
                                )}
                            </TableCell>
                            <TableCell align="right">
                                {index === 0 ? row.MD : (
                                    <Input
                                        name="MD"
                                        value={row.MD}
                                        onChange={(event) => handleInputChange(event, index)}
                                        sx={{ direction: 'rtl' }}
                                    />
                                )}
                            </TableCell>
                            <TableCell align="right">
                                {index === 0 ? row.Azi : (
                                    <Input
                                        name="Azi"
                                        value={row.Azi}
                                        onChange={(event) => handleInputChange(event, index)}
                                        sx={{ direction: 'rtl' }}
                                    />
                                )}
                            </TableCell>
                            <TableCell align="right">
                                {row.TVD}
                            </TableCell>
                            <TableCell align="right">
                                {row.North}
                            </TableCell>
                            <TableCell align="right">
                                {row.East}
                            </TableCell>
                            <TableCell align="right">
                                {row.Dogleg}
                            </TableCell>
                            <TableCell align="right">
                                {row.VerticalSection}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {/* <Stack m={4} alignItems={'flex-end'}>
                <Button onClick={addRow} variant='contained'>Add Row</Button>
            </Stack> */}
        </TableContainer>
    );
}
