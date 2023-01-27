import tw from 'tailwind-styled-components';
import { Link } from 'react-router-dom';

export const Header = tw.div`
  bg-black
`;

export const HeaderContainer = tw.div`
  Container
  flex
  flex-row
  justify-between
  pt-5
  pb-3
`;

export const LogoContainer = tw(Link)`
	
`;

export const NavLinks = tw.div`
  Gotham-Black
  text-primary
  text-[32px]
  leading-[48px]
`;

export const NavLink = tw(Link)`
  
`;
