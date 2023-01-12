import { Box, Button, IconButton, Typography } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/ArrowDropDownSharp";
import DownloadOutlined from "@mui/icons-material/MoreHoriz";
import Revenue from "@mui/icons-material/PieChart";
import ShoppingBag from "@mui/icons-material/ShoppingBag";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import PieChart from "../../components/PieChart";


const Dashboard = () => {

  return (

    <Box m="10px" >

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(9, 1fr)"
        gridAutoRows="160px"
        gap="10px"
      >
        {/* ROW 1 */}
        
        <Box
          gridColumn="span 3"
          backgroundColor='white'
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="$21,456"
            subtitle="Revenue"
            increase="+2.65%"
            icon={
              <button >
                <Revenue
                  sx={{ color: 'blue', fontSize: "26px" }}
                />
              </button>
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor='white'
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="5,643"
            subtitle="Orders"
            decrease="-0.85%"
            icon={
              <button>
                <ShoppingBag
                  sx={{ color: 'blue', fontSize: "26px" }}
                />
              </button>
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor='white'
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="45,254"
            subtitle="Customers"
            decrease="-1.04%"
            icon={
              <button>
                <PersonAddIcon
                  sx={{ color: 'blue', fontSize: "26px" }}
                />
              </button>
            }
          />
          
        </Box>
        
      

        {/* ROW 2 */}

        <Box
          gridColumn="span 3"
          gridRow="span 2"
          backgroundColor='white'

        >
           <Typography
                variant="h4"
                fontWeight="400"
                color='black'
              >
                Overview
              </Typography>
              <Box display='flex' flexDirection='row' paddingTop='20px' fontWeight='bold'>
              <Typography variant="h6"fontWeight="400" color='black'>
                ThisMonth
                <Typography variant="h4"fontWeight="600" color='black'>
                $24,568                
              </Typography>
              </Typography>
              <StatBox increase='+2.65%'/>
              </Box>
              <Box display='flex' flexDirection='row' justifyContent='space-around' paddingTop='10px' >
              <Typography variant="h6"fontWeight="400" color='black'>
                Orders
                <Typography variant="h4"fontWeight="600" color='black'>
                5,643              
              </Typography>
              </Typography>
              <Typography variant="h6"fontWeight="400" color='black'>
                Sales
                <Typography variant="h4"fontWeight="600" color='black'>
                16,273              
              </Typography>
              </Typography>
              </Box>
              <Box  display='flex' flexDirection='row' justifyContent='space-around' paddingTop='10px'>
              <Typography variant="h6"fontWeight="400" color='black'>
                Order Value
                <Typography variant="h4"fontWeight="600" color='black'>
                12.03%              
              </Typography>
              </Typography>
              <Typography variant="h6"fontWeight="400" color='black'>
                Customers
                <Typography variant="h4"fontWeight="600" color='black'>
                21,456               
              </Typography>
              </Typography>
              </Box>
              <Box display='flex' flexDirection='row' justifyContent='space-around' paddingTop='10px'>
              <Typography variant="h6"fontWeight="400" color='black'>
                Income
                <Typography variant="h4"fontWeight="600" color='black'>
                $35,652               
              </Typography>
              </Typography>
              <Typography variant="h6"fontWeight="400" color='black'>
                Expenses
                <Typography variant="h4"fontWeight="600" color='black'>
                $12,248                
              </Typography>
              </Typography>
              </Box>
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor='white'

        >
          <Box display="flex"
            justifyContent="flex-end">
            <IconButton>
              <Typography
                variant="h6"
                fontWeight="400"
                color='black'
              >
                Sort By:Yearly
              </Typography>
              <DownloadOutlinedIcon
                sx={{ fontSize: "26px", color: 'black' }}
              />
            </IconButton>
          </Box>
          
          <Box height="250px" mt="-10px" >
            <BarChart isDashboard={true} />
          </Box>
        </Box>



        {/* ROW 3 */}

        <Box
          gridColumn="span 3"
          gridRow="span 2"
          backgroundColor='white'
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            color='black'
            p="15px"
          >
            <Typography color='black' variant="h5" fontWeight="600">
              User Activity
              <Typography color='black' variant="h6" fontWeight="600">
                This Month
              </Typography>
              <Typography color='black' variant="h6" fontWeight="600">
                16,543
              </Typography>
            </Typography>
            <IconButton>
              <Typography
                variant="h6"
                fontWeight="400"
                color='black'
              > Weekly
              </Typography>
              <DownloadOutlinedIcon
                sx={{ fontSize: "26px", color: 'black' }}
              />
            </IconButton>
          </Box>
          <Box>

          </Box>
          <Box height="250px" mt="-20px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          gridColumn="span 3"
          gridRow="span 2"
          backgroundColor='white'
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"

            color='black'
            p="15px"
          >
            <Typography color='black' variant="h5" fontWeight="600">
              Order Stats
            </Typography>
            <IconButton>

              <DownloadOutlined
                sx={{ fontSize: "26px", color: 'black' }}
              />
            </IconButton>
          </Box>
          <Box height="250px" mt="-20px">
            <PieChart isDashboard={true} />
          </Box>
        </Box>


        <Box
          gridColumn="span 3"
          gridRow="span 2"
          backgroundColor='white'
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            color='white'
            p="15px"
          >
            <Typography color='black' variant="h5" fontWeight="600">
              Top Product
            </Typography>
            <IconButton>
              <Typography
                variant="h6"
                fontWeight="400"
                color='black'
              >
                Monthly

              </Typography>
              <DownloadOutlinedIcon
                sx={{ fontSize: "26px", color: 'black' }}
              />
            </IconButton>
          </Box>
          <Box display="flex" flex-direction=" row" justifyContent='space-around' paddingBottom='20px' paddingTop='20px'>
            <button borderRadius='30%'>#1</button>
            <Typography variant="h6" fontWeight="400" color='black' >
              Polo blue T-shirt
            </Typography>
            <Typography variant="h6" fontWeight="400" color='black' >
              $ 25.4
            </Typography>
            <Button>3.82k</Button>
          </Box>
          <Box display="flex" flex-direction=" row" justifyContent='space-around' paddingBottom='20px'>
            <button>#2</button>
            <Typography variant="h6" fontWeight="400" color='black' >
              Hoodie for men
            </Typography>
            <Typography variant="h6" fontWeight="400" color='black' >
              $ 24.5
            </Typography>
            <Button>3.14k</Button>
          </Box>
          <Box display="flex" flex-direction=" row" justifyContent='space-around' paddingBottom='20px'>
            <button>#3</button>
            <Typography variant="h6" fontWeight="400" color='black' >
              Red color Cap
            </Typography>
            <Typography variant="h6" fontWeight="400" color='black' >
              $ 22.5
            </Typography>
            <Button>2.84k</Button>
          </Box>
          <Box display="flex" flex-direction=" row" justifyContent='space-around' paddingBottom='20px'>
            <button>#4</button>
            <Typography variant="h6" fontWeight="400" color='black' >
              Pocket T-shirt
            </Typography>
            <Typography variant="h6" fontWeight="400" color='black'>
              $ 25.4
            </Typography>
            <Button>2.06k</Button>
          </Box>

        </Box>

      </Box>
      </Box>
  );
};

export default Dashboard;
