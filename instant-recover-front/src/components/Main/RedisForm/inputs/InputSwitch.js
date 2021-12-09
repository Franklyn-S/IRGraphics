import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Tooltip from "@mui/material/Tooltip";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Switch from "@mui/material/Switch";

const InputSwitch = ({ value, setFieldValue, fieldName, label, ...rest }) => {
  return (
    <FormGroup style={{ flexDirection: "row" }}>
      <FormControlLabel
        control={
          <Switch
            id={fieldName}
            name={fieldName}
            value={value}
            onChange={(e) =>
              e.target.checked
                ? setFieldValue(fieldName, "ON")
                : setFieldValue(fieldName, "OFF")
            }
          />
        }
        label={label}
      />
      <Tooltip title={rest.helperText}>
        <HelpOutlineIcon />
      </Tooltip>
    </FormGroup>
  );
};

export default InputSwitch;
