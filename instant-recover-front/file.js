export const file = {

  // Mandatory
  aof_filename: "logs/sequentialLog.aof",
  instant_recovery_state: "ON",
  indexedlog_structure: "BTREE",
  indexedlog_filename: "logs/indexedLog.db",


  // Optionals 
  instant_recovery_synchronous: "OFF",
  indexer_time_interval: 500000,
  display_indexer_information: "OFF",
  indexer_information_time_interaval: 60,
  redisHostname: "127.0.0.1",
  redisPort: 6379,

  //Checkpointer component options
  checkpint_state: "ON",
  number_checkpoints: 0,
  selftune_checkpoint_time_interval: "OFF",
  checkpoint_time_interval: 60,
  checkpoint_start_time: 0,
  stop_checkpoint_after_benchmark: "ON",
  display_checkpoint_information: "OFF",
  // 				Memtier Bechmark execution options  
  //	Options to perform Memtier automatically in RedisIR.
  memtier_benchmark_state: "OFF",
  memtier_benchmark_workload_run_times: 1,
  restart_after_bechmarking: 0,
  time_tostop_benchmarking_always: 0,
  preload_database_and_restart: 0,
  memtier_benchmark_parameters: "",

  // 				Report options
  generate_recovery_report: "OFF",
  recovery_report_filename: "ecovery_report/recovery_report.txt",
  generate_checkpoint_ratio: "OFF",
  generate_executed_commands_csv: "OFF",
  executed_commands_csv_filename: "datasets/datasets.csv",
  generate_report_files_automatically: "OFF",
  overwrite_report_files: "ON"
}