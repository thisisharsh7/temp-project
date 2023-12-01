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
      fontSize: "0.95rem",
      fontWeight: "600",
      fontFamily: '\'Ubuntu\', sans-serif',
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
        inputProps={{ style: { fontSize: 17.2 } }}
        size="small"
      />
    </Stack>
  )
}

export default LabelInput