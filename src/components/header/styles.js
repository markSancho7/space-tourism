import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
const StyledTotalContainer = styled.div`
	display: flex;
	margin-top: 30px;
	justify-content: space-between;
	position: absolute;
	width: 100%;
`;
const StyledImgContainer = styled.div`
	margin-top: auto;
	margin-bottom: auto;
	margin-left: 50px;
`;

const StyledNav = styled.nav`
	background: rgba(255, 255, 255, 0.04);
	backdrop-filter: blur(40.774227142333984px);
	width: 830px;
	height: 96px;
	flex-shrink: 0;
	margin-left: auto;
	display: flex;
	justify-content: start;
	align-items: center;
`;

const StyledUl = styled.ul`
	display: flex;
	list-style: none;
	margin-left: 100px;
`;

const StyledNavLink = styled(NavLink)`
	font-size: 20px;
	text-decoration: none;
	margin: 20px;
	color: #fff;
	font-family: Barlow Condensed;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 2.7px;
	padding-bottom: 30px;
	&.active {
		border-bottom: 4px solid white;
	}
`;

export {
	StyledNav,
	StyledUl,
	StyledNavLink,
	StyledTotalContainer,
	StyledImgContainer
};
