import { useDisclosure } from '@mantine/hooks';
import { Drawer, Burger, useMatches } from '@mantine/core';
import { navLinks } from './Header';

const SideBar = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const size = useMatches({
    xs: 'md',
    sm: 'lg'
  });
  return (
    <>

      <Drawer.Root
        className='bs:hidden !-z-10' position='right' size={'50vw'} opened={opened} onClose={toggle}>
        <Drawer.Overlay className='!-z-0 !backdrop-opacity-85 blur-sm' />
        <Drawer.Content className='!-z-0' bg='#0A192F'>
          {/* Here I'm using Interpolation Method */}
          {/* Here I'm making items in my menu center */}
          <Drawer.Body className='mt-20 xs:mt-24 flex flex-col gap-5' bg='#0A192F'>{navLinks(true, toggle)}</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      {/* <Button onClick={open} >Open drawer</Button> isko replace kia hai below one sy */}
      <Burger className='bs:!hidden !z-50 relative' color='#64ffda' size={size} opened={opened} onClick={toggle} />

    </>
  );
}
export default SideBar;