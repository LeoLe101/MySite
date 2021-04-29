import { CloseIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/layout';
import { MenuIcon } from '@chakra-ui/menu';
import React from 'react';

interface MenuToggleProps {
  toggle(): any;
  isOpen: boolean;
}

const MenuToggle: React.FC<MenuToggleProps> = (props) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={props.toggle}>
      {props.isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

export default MenuToggle;
