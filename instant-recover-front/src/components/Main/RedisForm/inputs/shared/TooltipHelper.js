import Tooltip from "@mui/material/Tooltip";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const ToolTipHelper = ({ title }) => {
  return (
    <Tooltip title={title} style={{ marginLeft: "10px" }}>
      <HelpOutlineIcon />
    </Tooltip>
  );
};

export default ToolTipHelper;
