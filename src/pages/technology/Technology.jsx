import { useState } from 'react';
import { TECHNOLOGY_INFO } from '../../constants/technology';
import {
	StyledContainerImg,
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

const Technology = () => {
	const [tabNumber, setTabNumber] = useState(0);
	return (
		<StyledTotalContainer>
			<div>
				<StyledSpace>SPACE LAUNCH 101</StyledSpace>
				<StyledTotalInfoContainer>
					<StyledTabs>
						{TABS_TECHNOLOGY.map((tabItem, index) => (
							<StyledTab
								$active={tabNumber === index}
								key={tabItem.id}
								onClick={() => changeTabNumber(index, setTabNumber)}
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
				<img src={TECHNOLOGY_INFO[tabNumber].pathImg} alt='' />
			</StyledContainerImg>
		</StyledTotalContainer>
	);
};
const changeTabNumber = (index, setTAbNumber) => {
	setTAbNumber(index);
};
export default Technology;
