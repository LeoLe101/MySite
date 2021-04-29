import { Flex } from '@chakra-ui/layout';
import React from 'react';
import MenuToggle from './MenuToggle';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Flex>

      <MenuToggle isOpen={false} toggle={toggle} />
    </Flex>
  );
};

export default Header;
