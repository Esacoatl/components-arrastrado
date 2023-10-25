import React from 'react';

import { ButtonSB } from './Button';
import './header.css';

interface HeaderProps {
	user?: {};
	onLogin: () => void;
	onLogout: () => void;
	onCreateAccount: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
	<header>
		<div className="wrapper">
			<div>
				<h1 className="app-name">VisualCX</h1>
			</div>
			<div>
				{user ? (
					<ButtonSB size="small" onClick={onLogout} label="Log out" />
				) : (
					<>
						<ButtonSB size="small" onClick={onLogin} label="Log in" />
						<ButtonSB primary size="small" onClick={onCreateAccount} label="Sign up" />
					</>
				)}
			</div>
		</div>
	</header>
);

export default Header;
