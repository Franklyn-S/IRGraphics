import React, { useState } from "react";
import { useFormik } from "formik";
import { initialFormValues } from "utils/formValues";
import { validationSchema } from "utils/validations";
//import FormControl from "@mui/material/FormControl";
//import FormLabel from "@mui/material/FormLabel";
//import InputLabel from "@mui/material/InputLabel";
//import Select from "@mui/material/Select";
//import FormHelperText from "@mui/material/FormHelperText";
//import MenuItem from "@mui/material/MenuItem";
//import FormGroup from "@mui/material/FormGroup";
//import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
//import Tooltip from "@mui/material/Tooltip";
//import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import CircularProgress from "@mui/material/CircularProgress";
import { StyledForm } from "./RedisForm.style";
import InputSwitch from "./inputs/InputSwitch";
import InputSelect from "./inputs/InputSelect";
import { IndexedLogStructureOptions } from "utils/options";

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
      <InputSelect
        touched={formik.touched.indexedlog_structure}
        fieldName="indexedlog_structure"
        label="Indexed log structure"
        value={formik.values.indexedlog_structure}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        helperText={
          formik.touched.indexedlog_structure &&
          formik.errors.indexedlog_structure
        }
        options={IndexedLogStructureOptions}
        errorMessage={formik.errors.indexedlog_structure}
        title="Data structuter of the indexed log."
      />
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
