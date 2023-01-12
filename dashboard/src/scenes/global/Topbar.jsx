import { Box} from "@mui/material";

import Header from "../../components/Header";

const Topbar = () => {

  return (
    
    <Box display="flex" justifyContent="space-between" p={2}>
        <Header title="Dashboard" />         
    </Box>
  );
};

export default Topbar;
