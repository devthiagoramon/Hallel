import React from "react";
import "./button_barra_lateral.css";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

const ButtonBarraLateral = ({
  handleClickButtonLateral,
  icon,
  selected,
  text,
  to,
  isToShowInnerTabs,
  showInnerTabs,
  handleExpandMore,
}) => {
  return (
    <div
      className={`container_button_brl ${selected ? "selected" : ""}`}
      onClick={() => handleClickButtonLateral(to)}
    >
      {icon}
      <label>{text}</label>
      {isToShowInnerTabs && (
        <>
          {showInnerTabs ? (
            <IconButton sx={{ color: "#FAFAFA" }} onClick={handleExpandMore}>
              <ExpandMore sx={{ width: 30, height: 30 }} />
            </IconButton>
          ) : (
            <IconButton sx={{ color: "#FAFAFA" }} onClick={handleExpandMore}>
              <ExpandLess sx={{ width: 30, height: 30 }} />
            </IconButton>
          )}
        </>
      )}
    </div>
  );
};

export default ButtonBarraLateral;
