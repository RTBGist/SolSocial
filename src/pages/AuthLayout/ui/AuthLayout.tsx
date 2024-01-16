import React from 'react';
import {Outlet, Navigate} from 'react-router-dom';

const AuthLayout = () => {
	const isAuth = false;

	return (
			<>
				{isAuth ?
						(
								<Navigate to="/" />
						)
						:
						(
								<>
									<Outlet />
								</>
						)
				}
			</>
	);
};

export default AuthLayout;