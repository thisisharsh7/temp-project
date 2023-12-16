import { Stack, TextField } from '@mui/material';
import { useMatchStore } from '../../store/store';
import { useState } from 'react';
import { postFieldData } from '../constant';

const LabelDateInput = ({ fieldName, fieldLabel, fieldValue, fieldStatus }) => {
    const [type, setType] = useState('text');
    const { setUp, updateSetUp } = useMatchStore();
    const sendData = async (fieldObj) => {
        console.log(fieldObj);
        try {
            const data = await postFieldData(`https://og-project.onrender.com/api/v1/updateFields?excelName=${setUp.excelName}`, fieldObj);
            if (data) {
                console.log('data updated');
            }
        } catch (error) {
            console.log('error');
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        const obj = name.split('.');
        const second = obj[1];

        updateSetUp({
            ...setUp, [second]: value,
        })
        sendData({ [second]: value });
    }

    return (
        <Stack direction="column" style={{
            fontSize: '15.2px',
            fontWeight: 500,
            fontFamily: '\'Poppins\', sans-serif',
            gap: "0.3rem",
        }}>
            {fieldLabel}
            <TextField
                onChange={handleChange}
                variant="outlined"
                label={null}
                name={fieldName}
                disabled={fieldStatus}
                value={fieldValue || ''}
                inputProps={{ style: { fontSize: '15.2px', height: '15px', padding: '13px 10px' } }}
                size="small"
                type={type}
                onFocus={() => setType('date')}
                onBlur={() => setType('text')}
            />
        </Stack>
    )
}

export default LabelDateInput