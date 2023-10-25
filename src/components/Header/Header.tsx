import React from 'react';

import './header.css';
// import Button from '../Button';

export interface HeaderProps {
	user?: {};
	onLogin: () => void;
	onLogout: () => void;
	onCreateAccount: () => void;
}

const Header2 = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
	<header>
		<div className="wrapper">
			<div>
				<h1 className="app-name">VisualCX</h1>
			</div>
			<div>
				{/* {user ? (
					<Button label="Log out" />
				) : (
					<>
						<Button label="Log in" />
						<Button label="Sign up" />
					</>
				)} */}
			</div>
		</div>
	</header>
);

export interface ButtonProps {
	label: string;
}

const Header = (props: ButtonProps) => {
	return <button>{props.label}</button>;
};

export default Header;
