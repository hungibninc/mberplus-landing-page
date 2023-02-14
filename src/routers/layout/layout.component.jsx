import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import {
	Header,
	HeaderContainer,
	LogoContainer,
	Logo,
	NavLinks,
	NavLink,
	Footer,
	FooterContainer,
	LogoFooter,
	Copyright,
} from './layout.styles';

const Layout = () => {
	const navigate = useNavigate();

	const mailToHandler = (e) => {
		e.preventDefault();
		window.location.href = 'mailto:no-reply@tpfsports.com.au';
	};

	const logoHandler = () => {
		navigate('/');
	};

	return (
		<Fragment>
			<Header>
				<HeaderContainer>
					<LogoContainer onClick={logoHandler}>
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
			<Footer>
				<FooterContainer>
					<LogoContainer onClick={logoHandler}>
						<LogoFooter />
					</LogoContainer>
					<Copyright>
						Mber+<sup>®</sup>&nbsp;is a registered trademark
					</Copyright>
				</FooterContainer>
			</Footer>
		</Fragment>
	);
};

export default Layout;
