import { useState } from 'react';
import { CREW_INFO } from '../../constants/crew';
import { TABS_CREW } from '../../constants/tabsCrew';
import {
	StyledButton,
	StyledImgContainer,
	StyledInfo,
	StyledInfoCont,
	StyledInfoContainer,
	StyledMeet,
	StyledName,
	StyledProfession,
	StyledTabs,
	StyledTotalContainer
} from './styles';

const Crew = () => {
	const [tabNumber, setTabNumber] = useState(0);
	return (
		<StyledTotalContainer>
			<StyledInfoContainer>
				<StyledMeet>02 MEET YOUR CREW</StyledMeet>
				<StyledInfoCont>
					<StyledProfession>{CREW_INFO[tabNumber].profession}</StyledProfession>
					<StyledName>{CREW_INFO[tabNumber].name}</StyledName>
					<StyledInfo>{CREW_INFO[tabNumber].description}</StyledInfo>
				</StyledInfoCont>
				<StyledTabs>
					{TABS_CREW.map((tabItem, index) => (
						<StyledButton
							$active={tabNumber === index}
							key={tabItem.id}
							onClick={() => changeTabNumber(setTabNumber, index)}
						></StyledButton>
					))}
				</StyledTabs>
			</StyledInfoContainer>
			<StyledImgContainer>
				<img src={CREW_INFO[tabNumber].pathImg} alt='' />
			</StyledImgContainer>
		</StyledTotalContainer>
	);
};
const changeTabNumber = (setTabNumber, index) => {
	setTabNumber(index);
};
export default Crew;
