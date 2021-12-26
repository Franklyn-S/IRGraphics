import React, { useState } from "react";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

import { initialFormValues } from "utils/formValues";
import { validationSchema } from "utils/validations";
import { StyledForm } from "./RedisForm.style";
import InputSwitch from "./inputs/InputSwitch";
import InputSelect from "./inputs/InputSelect";
import { IndexedLogStructureOptions } from "utils/options";
import InputText from "./inputs/InputText";
import useAxiosRequest from "hooks/useAxiosRequest";

const RedisForm = () => {
  const { response, performRequest } = useAxiosRequest();
  const { data, loading, error } = response;
  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const options = {
        method: "POST",
        url: "http://localhost:5000/update-config",
        data: values,
      };
      performRequest(options);
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
      <InputText
        type="number"
        value={formik.values.indexer_time_interval}
        onChange={formik.handleChange}
        fieldName="indexer_time_interval"
        label="Indexer Time Interval"
        helperText="Tunes the time interval to index log records in microseconds. The default value is 500,000 microseconds."
      />
      <InputSwitch
        value={formik.values.display_indexer_information}
        setFieldValue={formik.setFieldValue}
        fieldName={"display_indexer_information"}
        label="Display Indexer Information"
        helperText="Displays some information about log indexing process. The default value is OFF."
      />
      {formik.values.display_indexer_information === "ON" && (
        <InputText
          type="number"
          value={formik.values.indexer_information_time_interaval}
          onChange={formik.handleChange}
          fieldName="indexer_information_time_interaval"
          label="Indexer Time Interval"
          helperText="Time interval (in seconds) to display information about the log indexing when the field display_indexer_information is ON. The default value is 60."
        />
      )}
      <InputText
        value={formik.values.redisHostname}
        onChange={formik.handleChange}
        fieldName="redisHostname"
        label="Redis Hostname"
        helperText="A client application is used by the Indexer component to index log records from the sequential log to the indexed log. Redis host name. The default host is 127.0.0.1."
      />
      <InputText
        type="number"
        value={formik.values.redisPort}
        onChange={formik.handleChange}
        fieldName="redisPort"
        label="Redis Port"
      />
      <h2>Checkpointer component options</h2>
      <InputSwitch
        value={formik.values.checkpint_state}
        setFieldValue={formik.setFieldValue}
        fieldName={"checkpint_state"}
        label="Checkpoint State"
        helperText="Enables the checkpoint of the indexed log during normal database processing."
      />
      <InputText
        type="number"
        value={formik.values.number_checkpoints}
        onChange={formik.handleChange}
        fieldName="number_checkpoints"
        label="Number of checkpoints"
        helperText="Number of checkpoint processes to be performed. If the value is 0 (zero), the checkpoint will be perfomed continuously in time invervals. The defaul value is 0."
      />
      <InputSwitch
        value={formik.values.selftune_checkpoint_time_interval}
        setFieldValue={formik.setFieldValue}
        fieldName={"selftune_checkpoint_time_interval"}
        label="Selftune Checkpoint Time Interval"
        helperText="Enables the self tune of time interval between checkpoint executions. The value of the time interval between checkpoints is self tuned after each checkpoint process."
      />
      {formik.values.selftune_checkpoint_time_interval === "OFF" && (
        <InputText
          type="number"
          value={formik.values.checkpoint_time_interval}
          onChange={formik.handleChange}
          fieldName="checkpoint_time_interval"
          label="Checkpoint Time Inverval"
          helperText="A fixed time interval (in seconds) to perform checkpoints. This parameter works only if the parameter 'selftune_checkpoint_time_interval' is OFF. The default value is 60 seconds."
        />
      )}
      <InputText
        type="number"
        value={formik.values.checkpoint_start_time}
        onChange={formik.handleChange}
        fieldName="checkpoint_start_time"
        label="Checkpoint Start Time"
        helperText="Time (in seconds) to start the first checkpoint process after the system startup. If the value is 0 (zero), the first checkpoint process will start only after the full database recovery. The defaul value is 0."
      />
      <InputSwitch
        value={formik.values.stop_checkpoint_after_benchmark}
        setFieldValue={formik.setFieldValue}
        fieldName={"stop_checkpoint_after_benchmark"}
        label="Stop Checkpoint after Benchmark"
        helperText="Stops the checkpoint thread after the Memtier benchmark execution."
      />
      <InputSwitch
        value={formik.values.display_checkpoint_information}
        setFieldValue={formik.setFieldValue}
        fieldName={"display_checkpoint_information"}
        label="Display Checkpoint information"
        helperText="Displays some information about checkpoint execution at the end of each checkpoint process."
      />
      <h2>Memtier Bechmark execution options</h2>
      <InputSwitch
        value={formik.values.memtier_benchmark_state}
        setFieldValue={formik.setFieldValue}
        fieldName={"memtier_benchmark_state"}
        label="Memtier Benchmark State"
        helperText="Enables Memtier automatic execution."
      />
      <InputText
        type="number"
        value={formik.values.memtier_benchmark_workload_run_times}
        onChange={formik.handleChange}
        fieldName="memtier_benchmark_workload_run_times"
        label="Memtier Benchmark Workload Runtimes"
        helperText="Memtier workload run times. If the value is 0 (zero), the workload will be runned continuously."
      />
      <InputText
        type="number"
        value={formik.values.restart_after_bechmarking}
        onChange={formik.handleChange}
        fieldName="restart_after_bechmarking"
        label="Number of Restarts after Bechmarking"
        helperText="Number of time to restart the database system after the benchmark performing. This
        useful to simulate successive failures. If the value is 0 (zero) the system will 
        not be restarted."
      />
      <InputText
        type="number"
        value={formik.values.time_tostop_benchmarking_always}
        onChange={formik.handleChange}
        fieldName="time_tostop_benchmarking_always"
        label="Number of Restarts after Bechmarking"
        helperText="Always stops the benchmark performing after a defined time (in seconds) from the database
        startup time, even if successive restarts occur, each new workload will be stoped the given
        time. If the value is 0 (zero) the system will not be stopped."
      />
      {formik.values.time_tostop_benchmarking_always === "OFF" &&
        formik.values.restart_after_bechmarking === "OFF" && (
          <InputText
            type="number"
            value={formik.values.preload_database_and_restart}
            onChange={formik.handleChange}
            fieldName="preload_database_and_restart"
            label="Preload Database and Restart"
            helperText="Loads the database into memory, starts the workload (if benckmark is ON), shuts down the 
            system after the given time, and then finally restarts perfoming the workload 
            completally. It only works if 'restart_after_bechmarking' and 'time_tostop_benchmarking_always' 
            parameters are disabled. The set value is the time 
            (in seconds) to restart the sistem after the database is loaded into memomry. If the value 
            is 0 (zero), nothing is done. "
          />
        )}
      <InputText
        value={formik.values.memtier_benchmark_parameters}
        onChange={formik.handleChange}
        fieldName="memtier_benchmark_parameters"
        label="Memtier Benchmark Parameters"
        helperText="Memtier execution parameters. Run the command line './memtier_benchmark --help' on 
        Memtier root path to see all parameters. Below are some examples of parameters.
        First example: sends 100,000 read-only randomized requests per client:  --hide-histogram -n 100000 --ratio 0:10  --randomize"
      />
      <h2>Report options</h2>
      <InputSwitch
        value={formik.values.generate_recovery_report}
        setFieldValue={formik.setFieldValue}
        fieldName={"generate_recovery_report"}
        label="Generate Recovery Report"
        helperText='Generates some reports about recovery, checkpoint and indexer.
        After the recovery, run the command "saveRecoveryReportToFile <filename>" on redis-cli 
        to save the file.'
      />
      <InputText
        value={formik.values.recovery_report_filename}
        onChange={formik.handleChange}
        fieldName="recovery_report_filename"
        label="Recovery Report Filename"
        helperText="Name of the file containig some information about recovery. It is used to save the file automatically."
      />
      <InputSwitch
        value={formik.values.generate_checkpoint_ratio}
        setFieldValue={formik.setFieldValue}
        fieldName={"generate_checkpoint_ratio"}
        label="Generate Checkpoint Ratio"
        helperText="Generates the ratio between log records and tuples in the indexed log before and after a checkpoint process."
      />
      <InputSwitch
        value={formik.values.generate_executed_commands_csv}
        setFieldValue={formik.setFieldValue}
        fieldName={"generate_executed_commands_csv"}
        label="Generate executed commands CSV"
        helperText='Generates a CSV file containing some information about all database operantins (commands) 
        executed. The fields: command name, key of the tuple handled, command start time, command 
        finishTime, and command type. After executing the commands, run 
        the command "saveCommandsExecutedToCSV <filename>" on redis-cli to save the file. This file 
        can be used to generate graphics by the script "graphic" in Redis root path.'
      />
      <InputText
        value={formik.values.executed_commands_csv_filename}
        onChange={formik.handleChange}
        fieldName="executed_commands_csv_filename"
        label="Executed commands CSV filename"
        helperText="Name of the CSV file containing proprieties about operations executed.
      	It is used to save the file automatically."
      />
      <InputSwitch
        value={formik.values.generate_report_files_automatically}
        setFieldValue={formik.setFieldValue}
        fieldName={"generate_report_files_automatically"}
        label="Generate report files automatically"
        helperText="Generates the recovery report and CSV files automatically after the memtier benckmark have finished."
      />
      <InputSwitch
        value={formik.values.overwrite_report_files}
        setFieldValue={formik.setFieldValue}
        fieldName={"overwrite_report_files"}
        label="Overwrite report files"
        helperText="Overwrites the previous recovery report and CSV files when saving automatically. Otherwise,
        concatenates the information saved. If sucessive failures occurs in your experiment, you 
        should use this parameter as OFF to not overwrite the information after a restart. "
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
