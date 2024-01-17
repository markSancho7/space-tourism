import { styled } from 'styled-components';

const StyledTotalContainer = styled.div`
	margin-left: 250px;
	margin-top: 100px;
	display: flex;
	justify-content: space-between;
`;
const StyledSpace = styled.p`
	color: #fff;
	font-family: Barlow Condensed;
	font-size: 28px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 4.725px;
`;
const StyledTotalInfoContainer = styled.div`
	display: flex;
	width: 700px;
	margin-top: 150px;
`;
const StyledTabs = styled.div``;

const StyledTab = styled.button`
	width: 80px;
	height: 80px;
	flex-shrink: 0;
	border-radius: 100%;
	border: none;
	margin-top: 20px;
	font-size: 25px;
	font-family: Bellefair;
	border: 1px solid white;
	color: ${({ $active }) => ($active ? 'black' : 'white')};
	background-color: ${({ $active }) => ($active ? 'white' : 'black')};
`;
const StyledInfoContainer = styled.div`
	margin-left: 50px;
`;
const StyledTerminology = styled.p`
	color: #d0d6f9;
	font-family: Barlow Condensed;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 2.7px;
`;
const StyledTitle = styled.p`
	margin-top: 0px;
	color: #fff;
	font-family: Bellefair;
	font-size: 56px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	margin-bottom: 30px;
`;
const StyledInfo = styled.p`
	color: #d0d6f9;
	margin-top: 0px;
	font-family: Barlow;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px;
`;

const StyledContainerImg = styled.div`
	width: 552px;
	height: 858px;
	flex-shrink: 0;
	margin-right: 100px;
	margin-top: 220px;
`;

export {
	StyledTotalContainer,
	StyledTotalInfoContainer,
	StyledInfoContainer,
	StyledSpace,
	StyledTabs,
	StyledTab,
	StyledTerminology,
	StyledTitle,
	StyledInfo,
	StyledContainerImg
};
