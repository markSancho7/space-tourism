import { MENU } from '../../constants/menu';
import {
	StyledImgContainer,
	StyledNav,
	StyledNavLink,
	StyledTotalContainer,
	StyledUl
} from './styles';

const Header = () => {
	return (
		<StyledTotalContainer>
			<StyledImgContainer>
				<img src='./public/assets/shared/logo.svg' alt='' />
			</StyledImgContainer>
			<StyledNav>
				<StyledUl>
					{MENU.map(menuItem => (
						<li key={menuItem.id}>
							<StyledNavLink to={menuItem.path}>{menuItem.name}</StyledNavLink>
						</li>
					))}
				</StyledUl>
			</StyledNav>
		</StyledTotalContainer>
	);
};
export default Header;
