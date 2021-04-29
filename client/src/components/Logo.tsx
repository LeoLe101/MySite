import { Box, Text } from '@chakra-ui/layout';
import React from 'react';

interface LogoProps {}

const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <Box>
      <Text fontSize="lg" fontWeight="bold">
        Logo
      </Text>
    </Box>
  );
};

export default Logo;
