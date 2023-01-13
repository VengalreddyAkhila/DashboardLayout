import { Box, Button, Typography} from "@mui/material";


const StatBox = ({ title, subtitle, icon, progress, increase,decrease }) => {
  

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color:'black' }}
          >
            {subtitle}
          </Typography>
        </Box>
        
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: 'black' }}>
          {title}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: 'green' }}
        >
          <Button sx={{ color: 'green' }}>
          {increase}
          </Button>
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: 'red' }}
        >
         <Button sx={{ color: 'red' }}>
          {decrease}
          </Button>
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
