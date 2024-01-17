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
import { useTabs } from '../../hooks/useTabs';

const Crew = () => {
	const { tabNumber, changeTab } = useTabs();
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
							onClick={() => changeTab(index)}
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

export default Crew;
