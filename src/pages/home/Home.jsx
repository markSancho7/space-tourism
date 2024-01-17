import {
	StyledContainerImg,
	StyledDescription,
	StyledDescriptionContainer,
	StyledImgText,
	StyledIntro,
	StyledName,
	StyledTotalContainer
} from './styles';

const Home = () => {
	return (
		<StyledTotalContainer>
			<StyledDescriptionContainer>
				<StyledIntro>SO, YOU WANT TO TRAVEL TO</StyledIntro>
				<StyledName>SPACE</StyledName>
				<StyledDescription>
					Let’s face it; if you want to go to space, you might as well genuinely
					go to outer space and not hover kind of on the edge of it. Well sit
					back, and relax because we’ll give you a truly out of this world
					experience!
				</StyledDescription>
			</StyledDescriptionContainer>
			<StyledContainerImg>
				<StyledImgText>EXPLORE</StyledImgText>
			</StyledContainerImg>
		</StyledTotalContainer>
	);
};
export default Home;
