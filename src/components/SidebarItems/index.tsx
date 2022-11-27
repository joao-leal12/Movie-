import { SidebarLinks } from '../SidebarLinks';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { SidebarWrapperLink } from '../SidebarWrapperLink';
export const SidebarItems = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  useEffect(() => {
    console.log('Ola');
  }, [pathname]);

  return (
    <SidebarWrapperLink>
      <SidebarLinks />
    </SidebarWrapperLink>
  );
};
