import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";

import { StyledSelect } from "../RedisForm.style";

const InputSelect = ({
  touched,
  title,
  label,
  fieldName,
  value,
  onChange,
  onBlur,
  options,
  errorMessage,
}) => {
  return (
    <StyledSelect>
      <FormLabel component="legend">{title}</FormLabel>
      <FormControl
        sx={{ minWidth: "200px", margin: "10px 0" }}
        error={touched && errorMessage}
      >
        <InputLabel id={`${fieldName}_label`}>{label}</InputLabel>
        <Select
          labelId={`${fieldName}_label`}
          id={fieldName}
          name={fieldName}
          label={label}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          error={touched && errorMessage}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {options.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
        {touched && <FormHelperText>{errorMessage}</FormHelperText>}
      </FormControl>
    </StyledSelect>
  );
};

export default InputSelect;
