import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import WeekendIcon from "@mui/icons-material/Weekend";
import ManIcon from "@mui/icons-material/Man";
function List() {
  return (
    <div className="list">
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <MobileScreenShareIcon />
          </ListItemIcon>
          <Link className="link" to="electronics">
            <ListItemText primary="Electronics" />
          </Link>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <WeekendIcon />
          </ListItemIcon>
          <Link className="link" to="furniture">
            <ListItemText primary="Furniture" />
          </Link>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ManIcon />
          </ListItemIcon>
          <Link className="link" to="mensFashion">
            <ListItemText primary="Mens Fashion" />
          </Link>
        </ListItemButton>
      </ListItem>
    </div>
  );
}
export default List;
