import { toTitleCase } from "../utils/format";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import HelpOutlineTwoToneIcon from "@mui/icons-material/HelpOutlineTwoTone";

const FormRowSelect = ({
  labelText,
  name,
  value,
  handleChange,
  list,
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
        {labelText || name}
        <Tooltip title={description}>
          <HelpOutlineTwoToneIcon
            fontSize="inherit"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        </Tooltip>
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className="form-select"
      >
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue}>
              {toTitleCase(itemValue)}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormRowSelect;
