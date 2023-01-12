import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Circle = () => {
  return (
    <Box  position= "relative"   paddingLeft='70px'>
   <Box position= "relative" width= "100px" height= "90px"  overflow= "hidden"  paddingLeft='30px'>
    
    <Box  position = "absolute" top= "0" left= "0" width= "120px" height= "120px" borderRadius= "50%"  boxSizing= "border-box"  border= "10px solid blue">
    <Typography variant="h3" fontWeight="400" color='black' paddingTop='30px'>76 %</Typography>
        </Box>
         </Box>
 
  </Box>
  )
}
export default Circle
