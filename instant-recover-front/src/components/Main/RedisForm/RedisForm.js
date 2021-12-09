import React, { useState } from "react";
import { useFormik } from "formik";
import { initialFormValues } from "utils/formValues";
import { validationSchema } from "utils/validations";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
//import FormGroup from "@mui/material/FormGroup";
//import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
//import Tooltip from "@mui/material/Tooltip";
//import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import CircularProgress from "@mui/material/CircularProgress";
import { StyledForm, StyledSelect } from "./RedisForm.style";
import InputSwitch from "./inputs/InputSwitch";

const RedisForm = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setLoading(false);
      }, 400);
    },
  });
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledSelect>
        <FormLabel component="legend">
          Data structuter of the indexed log.
        </FormLabel>
        <FormControl
          sx={{ minWidth: "200px", margin: "10px 0" }}
          error={
            formik.touched.indexedlog_structure &&
            formik.errors.indexedlog_structure
          }
        >
          <InputLabel id="indexedlog_structure_label">
            Indexed log structure
          </InputLabel>
          <Select
            labelId="indexedlog_structure_label"
            id="indexedlog_structure"
            name="indexedlog_structure"
            label="Indexed log structure"
            value={formik.values.indexedlog_structure}
            onChange={formik.handleChange}
            error={
              formik.touched.indexedlog_structure &&
              Boolean(formik.errors.indexedlog_structure)
            }
            helperText={
              formik.touched.indexedlog_structure &&
              formik.errors.indexedlog_structure
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="BTREE">BTREE</MenuItem>
            <MenuItem value="HASH">HASH</MenuItem>
          </Select>
          {formik.touched.indexedlog_structure &&
            formik.errors.indexedlog_structure && (
              <FormHelperText>
                {formik.errors.indexedlog_structure}
              </FormHelperText>
            )}
        </FormControl>
      </StyledSelect>
      <InputSwitch
        value={formik.values.instant_recovery_synchronous}
        setFieldValue={formik.setFieldValue}
        fieldName={"instant_recovery_synchronous"}
        label="Synchronous Recovery"
        helperText="Enables sychronous logging indexing, i.e., a transaction must wait the log indexing. 
        If OFF is setted, the log indexing is asychronous, i.e., a transaction must not wait
        for the log indexing. OFF is the default value."
      />

      {loading && <CircularProgress />}
      <Button
        color="primary"
        variant="contained"
        type="submit"
        onClick={formik.handleSubmit}
        style={{ alignSelf: "center", marginTop: "50px" }}
      >
        Submit
      </Button>
    </StyledForm>
  );
};

export default RedisForm;
