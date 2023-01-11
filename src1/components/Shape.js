import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { motion } from 'framer-motion';

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const Shape = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <Box
      width={windowSize.innerWidth}
      height={windowSize.innerHeight}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        //! width: '100vw',
        //! height: '100vh',
      }}
    >
      <Box
        width='200px'
        height='200px'
        bgcolor='white'
        borderRadius='35px'
        component={motion.div}
        intial={{ scale: 1 }}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ['%0', '%0', '50%', '50%', '0%']
        }}
        transition={{
          duration: 10,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1
        }}
      >
      </Box>
    </Box >
  )
}

export default Shape