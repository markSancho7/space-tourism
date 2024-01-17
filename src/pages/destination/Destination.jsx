import { useState } from 'react';
import { DESTINATION_INFO } from '../../constants/destination';
import { TABS_DESTINATION } from '../../constants/tabsDestination';
import {
	StyledImgContainer,
	StyledTab,
	StyledTitleImg,
	StyledTotalContainer,
	StyledTotalInfoContainer,
	StyledTitle,
	StyledInfo,
	StyledLine,
	StyledLittleDesc,
	StyledTotalContainerLittleDesc,
	StyledImg
} from './styles';
import { useTabs } from '../../hooks/useTabs';

const Destination = () => {
	const { tabNumber, changeTab } = useTabs();
	return (
		<StyledTotalContainer>
			<StyledImgContainer>
				<StyledTitleImg>01 PICK YOUR DESTINATION</StyledTitleImg>
				<StyledImg src={DESTINATION_INFO[tabNumber].pathImg} alt='' />
			</StyledImgContainer>
			<StyledTotalInfoContainer>
				<div>
					{TABS_DESTINATION.map((tabItem, index) => (
						<StyledTab
							key={tabItem.id}
							$active={index === tabNumber}
							onClick={() => changeTab(index)}
						>
							{tabItem.name}
						</StyledTab>
					))}
				</div>
				<div>
					<StyledTitle>{DESTINATION_INFO[tabNumber].satName}</StyledTitle>
					<StyledInfo>{DESTINATION_INFO[tabNumber].satDesription}</StyledInfo>
				</div>

				<StyledLine></StyledLine>

				<StyledTotalContainerLittleDesc>
					<div>
						<StyledTab>AVG.DISTANCE</StyledTab>
						<StyledLittleDesc>
							{DESTINATION_INFO[tabNumber].satAvgDistance}
						</StyledLittleDesc>
					</div>
					<div>
						<StyledTab>EST. TRAVEL TIME</StyledTab>
						<StyledLittleDesc>
							{DESTINATION_INFO[tabNumber].satEstTravelTime}
						</StyledLittleDesc>
					</div>
				</StyledTotalContainerLittleDesc>
			</StyledTotalInfoContainer>
		</StyledTotalContainer>
	);
};
export default Destination;
