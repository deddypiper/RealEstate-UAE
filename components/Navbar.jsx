import Link from 'next/link';
import { Menu, MenuButton, MenuList, Box, IconButton, Flex, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { set } from 'nprogress';


const Navbar = () => {
  
  const [isMobile, setIsMobile] = useState(false);
  
  const handleResize = () =>{
    if (window.innerWidth < 850) {
      setIsMobile(true);
    } else { setIsMobile(false); }
  }
 
  useEffect(() =>{
    window.addEventListener('resize', handleResize)
  });

  return (
  <Flex p='2' borderBottom='1px' borderColor='gray.100'>
    <Box fontSize='3xl' color='teal.400' fontWeight='bold'>
      <Link href='/' paddingLeft='2'>CodePipr Realtor</Link>
    </Box>
    <Spacer />
    {
      isMobile ?
    <Box>
      <Menu>
        <MenuButton as={IconButton} icon={<FcMenu />} variant='outline' color='red.400' />
        <MenuList>
          <Link href='/' passHref>
            <Box icon={<FcHome />}>Home</Box>
          </Link>
          <Link href='/search' passHref>
            <Box icon={<BsSearch />}>Search</Box>
          </Link>
          <Link href='/search?purpose=for-sale' passHref>
            <Box icon={<FcAbout />}>Buy Property</Box>
          </Link>
          <Link href='/search?purpose=for-rent' passHref>
            <Box icon={<FiKey />}>Rent Property</Box>
          </Link>
        </MenuList>
      </Menu>
    </Box>
    :
    <Box display="flex" flex="1" justifyContent="space-between" alignItems="space-between" p='2'>
   
   
          <Link  href='/' passHref>
            <Box cursor="pointer">Home <FcHome /></Box>
          </Link>
          <Link href='/search' passHref>
            <Box cursor="pointer">Search <BsSearch /></Box>
          </Link>
          <Link href='/search?purpose=for-sale' passHref>
            <Box cursor="pointer">Buy Property <FcAbout /></Box>
          </Link>
          <Link href='/search?purpose=for-rent' passHref>
            <Box cursor="pointer">Rent Property <FiKey /></Box>
          </Link>
       
 
    </Box>
    }
  </Flex>
  )
};

export default Navbar;