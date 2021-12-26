import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import ToolTipHelper from "./shared/TooltipHelper";

const InputSwitch = ({ value, setFieldValue, fieldName, label, ...rest }) => {
  return (
    <FormGroup style={{ flexDirection: "row", margin: "10px 0" }}>
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
        style={{ marginRight: 0 }}
      />
      {rest.helperText && <ToolTipHelper title={rest.helperText} />}
    </FormGroup>
  );
};

export default InputSwitch;
