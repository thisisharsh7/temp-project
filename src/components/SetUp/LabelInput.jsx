import { Stack, TextField } from '@mui/material';
import { useMatchStore } from '../../store/store';

const LabelInput = ({ fieldName, fieldLabel, fieldValue, fieldStatus }) => {

  const { setUp, updateSetUp } = useMatchStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const obj = name.split('.');
    const first = obj[1];
    const second = obj[2];
    updateSetUp({
      ...setUp, [first]: { ...setUp[first], [second]: value },
    })
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
      />
    </Stack>
  )
}

export default LabelInput