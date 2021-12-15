import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";
import useCharacter from "./hooks/useCharacter";
import HomeIcon from "@mui/icons-material/Home";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import SaveIcon from "@mui/icons-material/Save";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
export default function NavDrawer(props) {
  const { character } = useCharacter();
  const [navList, set_navList] = useState([]);

  useEffect(() => {
    console.log(character);
    if (character.name) {
      set_navList([
        { text: "Home", path: "/", icon: <HomeIcon /> },
        {
          text: "Generate Character",
          path: "/GenChar",
          icon: <GroupAddIcon />,
        },
        {
          text: "Saved Characters",
          path: "SavedCharacters",
          icon: <SaveIcon />,
        },
        { text: "Email Character", path: "EmailChar", icon: <MailIcon /> },
        {
          text: "Current Character",
          path: "new_character",
          icon: <PersonIcon />,
        },
        {},
        { text: "Blank Sheet", path: "blank_character", icon: <ArticleIcon /> },
        { text: "Sign In", path: "SignIn", icon: <PersonAddAltIcon /> },
      ]);
    } else {
      set_navList([
        { text: "Home", path: "/", icon: <HomeIcon /> },
        {
          text: "Generate Character",
          path: "/GenChar",
          icon: <GroupAddIcon />,
        },
        {
          text: "Saved Characters",
          path: "SavedCharacters",
          icon: <SaveIcon />,
        },
        {},
        { text: "Blank Sheet", path: "blank_character", icon: <ArticleIcon /> },
        { text: "Sign In", path: "SignIn", icon: <PersonAddAltIcon /> },
      ]);
    }
  }, [character]);
  const list = () => (
    <Box role="presentation" sx={{ width: "20vw", minWidth: "200px" }}>
      <List>
        {navList.map((item, index) => {
          if (!item.text) {
            return <Divider key={"nav-" + index} />;
          }
          return (
            <ListItem
              button
              key={"nav-" + index}
              component={Link}
              to={item.path}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer anchor={"left"} open={props.open} onClose={props.onClose}>
        {list()}
      </Drawer>
    </div>
  );
}