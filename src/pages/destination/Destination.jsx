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

const Destination = () => {
	const [tabNumber, setTabnumber] = useState(0);
	return (
		<StyledTotalContainer>
			<StyledImgContainer>
				<StyledTitleImg>PICK YOUR DESTINATION</StyledTitleImg>
				<StyledImg src={DESTINATION_INFO[tabNumber].pathImg} alt='' />
			</StyledImgContainer>
			<StyledTotalInfoContainer>
				<div>
					{TABS_DESTINATION.map((tabItem, index) => (
						<StyledTab
							key={tabItem.id}
							$active={index === tabNumber}
							onClick={() => changeTab(setTabnumber, index)}
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
const changeTab = (setTabNumber, index) => {
	setTabNumber(index);
};
export default Destination;
