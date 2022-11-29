import { Sword, MaskSad, Balloon, Ghost, HouseLine } from 'phosphor-react';

import { SidebarLinksElement } from '../SidebarLinksElement';
export const SidebarLinks = () => {
  return (
    <>
      <SidebarLinksElement text="Home" Icon={HouseLine} path="/" end="end" />
      <SidebarLinksElement
        text="Ação e Aventura"
        Icon={Sword}
        path="/aventura"
      />
      <SidebarLinksElement text="Drama" Icon={MaskSad} path="/drama" />
      <SidebarLinksElement text="Infantil" Icon={Balloon} path="/infantil" />
      <SidebarLinksElement text="Terror" Icon={Ghost} path="/terror" />
    </>
  );
};
