import TextField from "@mui/material/TextField";
import ToolTipHelper from "./shared/TooltipHelper";

const InputText = ({ value, onChange, fieldName, label, ...rest }) => {
  return (
    <div style={{ margin: "10px 0" }}>
      <TextField
        id={fieldName}
        name={fieldName}
        variant="outlined"
        label={label}
        value={value}
        onChange={onChange}
        type={rest.type || "text"}
        style={{ width: "250px" }}
      />
      {rest.helperText && <ToolTipHelper title={rest.helperText} />}
    </div>
  );
};

export default InputText;
