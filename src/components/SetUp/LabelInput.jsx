import { Stack, TextField } from '@mui/material';

const LabelInput = ({ fieldName, fieldLabel, fieldValue, fieldStatus, fieldType }) => {

  return (
    <Stack component={"label"} direction="column" label style={{
      fontSize: "0.95rem",
      fontWeight: "600",
      fontFamily: '\'Ubuntu\', sans-serif',
      gap: "0.3rem",
    }}>
      {fieldLabel}
      <TextField
        variant="outlined"
        name={fieldName}
        disabled={fieldStatus}
        value={fieldValue}
        inputProps={{ style: { fontSize: 17.2 } }}
        size="small"
        type={fieldType}
      />
    </Stack>
  )
}

export default LabelInput