import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import GridViewOutlined from "@mui/icons-material/GridView";
import FilemanagerOutlinedIcon from "@mui/icons-material/DriveFileMove";
import ChatOutlinedIcon from "@mui/icons-material/ChatBubble";
import PersonOutlinedIcon from "@mui/icons-material/Person";
import WorkOutlinedIcon from '@mui/icons-material/Work'
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import InvoicsOutlinedIcon from "@mui/icons-material/Inbox";
import FormsOutlinedIcon from "@mui/icons-material/BorderColor";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/Wifi";
import ProjectsOutlinedIcon from '@mui/icons-material/Luggage'

const Item = ({ title, to, icon, selected, setSelected,iconButton }) => {

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: 'grey',
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      iconButton = {iconButton}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const LeftSidebar = () => {
  
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
    sx={{
      "& .pro-sidebar-inner": {
        background: `#000036 !important`,
      },
      "& .pro-icon-wrapper": {
        backgroundColor: "transparent !important",
      },
      "& .pro-inner-item": {
        padding: "5px 35px 5px 20px !important",
      },
      "& .pro-inner-item:hover": {
        color: "#868dfb !important",
      },
      "& .pro-menu-item.active": {
        color: "#6870fa !important",
      },
    }}
      
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
            
              color: 'grey',
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="flex-end"
              
              >              
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box >
             <Typography
                  variant="h6"
                  color='gery'
                  fontWeight="bold"
                  
                >
                  MENU
                </Typography>
            </Box>
          )}

          <Box >
            
            <Item
              title="Dashboard"
              to="/dash"
              icon={<GridViewOutlined />}
              selected={selected}
              setSelected={setSelected}         
            />
            


        <Item
              title="Ecommerce"
              to="/"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Saas"
              to="/"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Crypto"
              to="/"
              selected={selected}
              setSelected={setSelected}
            />
      

            <Typography
              variant="h6"
              color='grey'
            
            >
              Applications
            </Typography>
            <Item
              title="Calender"
              to="/"
              icon={<CalendarTodayOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Chat"
              to="/"
              icon={<ChatOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="File Manager"
              to="/"
              icon={<FilemanagerOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
               <Item
              title="Ecommerce"
              to="/"
              icon={<WorkOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Email"
              to="/"
              icon={<EmailOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices"
              to="/"
              icon={<InvoicsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
               <Item
              title="Projects"
              to="/"
              icon={<ProjectsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts"
              to="/"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
        

            <Typography
              variant="h6"
              color='grey'
              
            >
              Layouts
            </Typography>
            
            <Typography
              variant="h6"
              color='grey'
      
            >
              Pages
            </Typography>
            <Item
              title="Authentication"
              to="/"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Utility"
              to="/"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            
            <Typography
              variant="h6"
              color='grey'
            
            >
              Components
            </Typography>
            <Item
              title="UI Elements"
              to="/"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Forms"
              to="/"
              icon={<FormsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
           
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default LeftSidebar;
