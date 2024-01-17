import { styled } from 'styled-components';

const StyledTotalContainer = styled.div`
	padding-top: 200px;
	height: 100vh;
	display: flex;
	justify-content: space-between;
	background-image: url('public/assets/destination/background-destination-desktop.jpg');
	background-repeat: no-repeat;
	background-size: cover;
`;

const StyledImgContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 678px;
	height: 678px;
	flex-shrink: 0;
	padding: 50px;
`;

const StyledTitleImg = styled.p`
	color: #fff;
	font-family: Barlow Condensed;
	font-size: 28px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 4.725px;
	text-transform: uppercase;
`;

const StyledImg = styled.img`
	margin-top: 100px;
`;

const StyledTotalInfoContainer = styled.div`
	width: 445px;
	height: 472px;
	flex-shrink: 0;
	margin-top: 80px;
`;

const StyledTab = styled.button`
	background: none;
	margin-right: 10px;
	border: none;
	color: #d0d6f9;
	font-family: Barlow Condensed;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 2.7px;
	border-bottom: ${({ $active }) => ($active ? '4px solid white' : 'none')};
`;

const StyledContainerInfo = styled.div`
	width: 445px;
	height: 472px;
	flex-shrink: 0;
`;

const StyledTitle = styled.p`
	margin-top: 200px;
	color: #fff;
	font-family: Bellefair;
	font-size: 100px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`;

const StyledInfo = styled.p`
	color: #d0d6f9;
	font-family: Barlow;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px;
`;

const StyledLine = styled.div`
	height: 2px;
	background-color: white;
	opacity: 0.5;
`;
const StyledTotalContainerLittleDesc = styled.div`
	display: flex;
	justify-content: space-between;
	padding-right: 50px;
	padding-top: 20px;
`;
const StyledContLittleDesc = styled.div``;

const StyledLittleDesc = styled.p`
	color: #fff;
	font-family: Bellefair;
	font-size: 28px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	text-transform: uppercase;
`;

export {
	StyledTotalContainer,
	StyledImgContainer,
	StyledTitleImg,
	StyledImg,
	StyledTotalInfoContainer,
	StyledTab,
	StyledContainerInfo,
	StyledTitle,
	StyledInfo,
	StyledLine,
	StyledContLittleDesc,
	StyledLittleDesc,
	StyledTotalContainerLittleDesc
};
