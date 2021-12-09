import * as yup from "yup";

export const validationSchema = yup.object({
  indexedlog_structure: yup
    .string("Choose a structure")
    .required("indexed log structure is required"),
});
