import React from 'react';
import styled from 'styled-components';

const FooterComponent = () => {
	return (
		<Footer className="page-footer font-small">
			<div className="footer-copyright text-center py-3">
				© 2019 Copyright:
				<span> Uche Akogwu</span>
			</div>
		</Footer>
	);
};

const Footer = styled.footer`
	background-color: orange;
	margin-top: 350px;
	margin-bottom: 0;
`;
export default FooterComponent;
