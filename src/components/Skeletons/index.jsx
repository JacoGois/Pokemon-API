import { Box, Skeleton } from '@mui/material'
import React from 'react'

export const Skeletons = () => {
  return <>
  <Box display="flex" gap="2em" flexDirection="column">
    <Box width="100%" marginTop="3em">
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />  
    </Box>
    <Box width="100%">
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />  
    </Box>
    <Box width="100%">
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />  
    </Box>
    <Box width="100%">
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />  
    </Box>
    <Box width="100%">
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />  
    </Box>
    <Box width="100%">
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />  
    </Box>
  </Box>
    </>
  
}
