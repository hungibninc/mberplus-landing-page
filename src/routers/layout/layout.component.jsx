import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import {
	Header,
	HeaderContainer,
	LogoContainer,
	NavLinks,
	NavLink,
} from './layout.styles';

const Layout = () => {
	const mailToHandler = (e) => {
		e.preventDefault();
		window.location.href = 'mailto:no-reply@tpfsports.com.au/';
	};

	return (
		<Fragment>
			<Header>
				<HeaderContainer>
					<LogoContainer to='/'>
						<Logo />
					</LogoContainer>
					<NavLinks>
						<NavLink to='#' onClick={mailToHandler}>
							<div>Let's talk</div>
						</NavLink>
					</NavLinks>
				</HeaderContainer>
			</Header>
			<Outlet />
		</Fragment>
	);
};

export default Layout;
