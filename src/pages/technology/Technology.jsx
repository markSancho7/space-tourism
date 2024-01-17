import { useState } from 'react';
import { TECHNOLOGY_INFO } from '../../constants/technology';
import {
	StyledContainerImg,
	StyledImg,
	StyledInfo,
	StyledInfoContainer,
	StyledSpace,
	StyledTab,
	StyledTabs,
	StyledTerminology,
	StyledTitle,
	StyledTotalContainer,
	StyledTotalInfoContainer
} from './styles';
import { TABS_TECHNOLOGY } from '../../constants/tabsTechnology';
import { useTabs } from '../../hooks/useTabs';

const Technology = () => {
	const { tabNumber, changeTab } = useTabs();
	return (
		<StyledTotalContainer>
			<div>
				<StyledSpace>03 SPACE LAUNCH 101</StyledSpace>
				<StyledTotalInfoContainer>
					<StyledTabs>
						{TABS_TECHNOLOGY.map((tabItem, index) => (
							<StyledTab
								$active={tabNumber === index}
								key={tabItem.id}
								onClick={() => changeTab(index)}
							>
								{tabItem.name}
							</StyledTab>
						))}
					</StyledTabs>
					<StyledInfoContainer>
						<StyledTerminology>THE TERMINOLOGY...</StyledTerminology>
						<StyledTitle>{TECHNOLOGY_INFO[tabNumber].name}</StyledTitle>
						<StyledInfo>{TECHNOLOGY_INFO[tabNumber].description}</StyledInfo>
					</StyledInfoContainer>
				</StyledTotalInfoContainer>
			</div>
			<StyledContainerImg>
				<StyledImg src={TECHNOLOGY_INFO[tabNumber].pathImg} alt='' />
			</StyledContainerImg>
		</StyledTotalContainer>
	);
};

export default Technology;
