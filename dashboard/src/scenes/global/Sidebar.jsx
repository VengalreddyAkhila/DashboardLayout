
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Button, IconButton, Typography } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";
import MenuOutlinedIcon from "@mui/icons-material/MoreHoriz"
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import StatBox from "../../components/StatBox";
import SearchIconOutlined from "@mui/icons-material/Search";
import GridViewOutlined from "@mui/icons-material/GridView";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import Circle from "../../components/Circle";

const Sidebar = () => {

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `white !important`,
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
        {/* ICONS */}
        <Box display="flex" paddingBottom='35px' paddingTop='30px' justifyContent='flex-end'>
        <IconButton>
          <SearchIconOutlined />
        </IconButton>
        
        <IconButton>
          <GridViewOutlined />
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
      <ProSidebar  >

        <Menu iconShape="square" >
          <Box display='flex' justifyContent='flex-end' >
            <MenuItem
              icon={<MenuOutlinedIcon />}
              style={{
               
                color: 'grey',
              }}
            >

            </MenuItem>
          </Box>

          <Box mb="50px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt="profile-user"
                width="100px"
                height="100px"
                src={`../../assets/userprofile.png`}
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
            </Box>
            <Box textAlign="center">
              <Typography
                variant="h4"
                color='black'
                fontWeight="600"
                sx={{ m: "10px 0 0 0" }}
              >
                Jennifier Bennett
                <Typography>Product Designer</Typography>
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-evenly" borderBottom={`1px solid black`}>

              <Typography
                variant="h6"
                fontWeight="600"
                color='black'
              >
                1,269
                <Typography>Products</Typography>

              </Typography>
              <Typography
                variant="h6"
                fontWeight="600"
                color='black'
              >
                5.2k
                <Typography>Followers</Typography>

              </Typography>


            </Box>
          </Box>


          <Box display="flex" justifyContent="space-between"  >
            <Typography
              variant="h6"
              fontWeight="600"
              color='black'
            >
              Earning
            </Typography>
            <IconButton >
              <InfoOutlined
                sx={{ color: 'black', fontSize: "16px" }} />
            </IconButton>
          </Box>
          <Box textAlign='center'  >
            <Circle/>
            <Typography color='black' variant="h4" fontWeight="600">
              $26,256
              <Typography color='black' variant="h6" fontWeight="400">
                Earning this Month
              </Typography>
            </Typography>
          </Box>
          <Box display='flex' flexDirection='row' flexWrap='nowrap'
            borderBottom={`1px solid black`}>
            <StatBox increase='+2.65%' />
            <Typography color='black' variant="h6" fontWeight="200"  >
              FromPreviousPeriod
            </Typography>
          </Box>
          <Box paddingTop='20px'>
            <Typography
              variant="h6"
              fontWeight="600"
              color='black'
            >
              Recent Activity
            </Typography>
          </Box>

          <Box display="flex" flex-direction=" row" paddingBottom='20px' paddingTop='20px' >
            <Button>12 sep</Button>
            <Typography variant="h6" fontWeight="400" color='black' >
              Responded to need "Volunteer Activities"
            </Typography>
          </Box>
          <Box display="flex" flex-direction=" row" paddingBottom='20px' >
            <Button>11 sep</Button>
            <Typography variant="h6" fontWeight="400" color='black' >
              Everyone realizes would be desirable...
            </Typography>
          </Box>
          <Box display="flex" flex-direction=" row" paddingBottom='20px'>
            <Button>10 sep</Button>
            <Typography variant="h6" fontWeight="400" color='black'>
              Joined the group "Boardsmanship Forum"
            </Typography>
          </Box>

        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
