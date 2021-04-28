import { Box } from '@chakra-ui/layout';
import React from 'react';

interface WrapperProps {}

const Wrapper: React.FC<WrapperProps> = (props) => {
  return (
    <Box mt={8} m={'auto'}>
      {{ props }}
    </Box>
  );
};

export default Wrapper;
