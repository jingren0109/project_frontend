import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import HelpOutlineTwoToneIcon from "@mui/icons-material/HelpOutlineTwoTone";

const FormRow = ({
  type,
  name,
  value,
  handleChange,
  labelText,
  description,
}) => {
  // eslint-disable-next-line
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseOver = () => {
    setShowDescription(true);
  };

  const handleMouseOut = () => {
    setShowDescription(false);
  };

  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}{" "}
        <Tooltip title={description}>
          <HelpOutlineTwoToneIcon
            fontSize="inherit"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        </Tooltip>
      </label>

      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};

export default FormRow;
