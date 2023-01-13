import { Box,IconButton} from "@mui/material";

import Header from "../../components/Header";
import SearchIconOutlined from "@mui/icons-material/Search";
import GridViewOutlined from "@mui/icons-material/GridView";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Topbar = () => {

  return (
    
    <Box display="flex" justifyContent="space-between" p={2}>
        <Header title="Dashboard" />     
        <Box display="flex" justifyContent='flex-end'>
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
    </Box>
    

  );
};

export default Topbar;
