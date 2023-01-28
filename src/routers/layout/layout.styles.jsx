import tw from 'tailwind-styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoSvg } from '../../assets/logo.svg';

export const Header = tw.div`
  bg-black
`;

export const HeaderContainer = tw.div`
  container
  flex
  flex-row
  justify-between
  py-5
`;

export const LogoContainer = tw.div`
  w-32
  sm:w-48
  cursor-pointer
`;

export const Logo = tw(LogoSvg)`
  
`;

export const NavLinks = tw.div`
  Gotham-Black
  text-primary
  text-[16px] sm:text-[32px]
  leading-[32px] sm:leading-[48px]
`;

export const NavLink = tw(Link)`
  
`;
