import { styled } from 'styled-components';

const StyledTotalContainer = styled.div`
	margin: 100px;
	display: flex;
	justify-content: space-between;
`;
const StyledInfoContainer = styled.div`
	width: 488px;
	margin-top: 50px;
	margin-left: 150px;
`;
const StyledMeet = styled.p`
	color: #fff;
	font-family: Barlow Condensed;
	font-size: 28px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 4.725px;
	text-transform: uppercase;
`;
const StyledInfoCont = styled.div`
	margin-top: 250px;
`;

const StyledProfession = styled.div`
	color: #fff;
	font-family: Bellefair;
	font-size: 32px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	text-transform: uppercase;
	opacity: 0.5;
`;

const StyledName = styled.p`
	color: #fff;
	font-family: Bellefair;
	font-size: 56px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	text-transform: uppercase;
`;

const StyledInfo = styled.p`
	color: #d0d6f9;
	font-family: Barlow;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px; /* 177.778% */
`;
const StyledTabs = styled.div`
	margin-top: 90px;
`;
const StyledButton = styled.button`
	margin: 10px;
	height: 10px;
	width: 10px;
	border-radius: 100%;
	border: none;
	background-color: ${({ $active }) => ($active ? 'white' : 'black')};
	opacity: 0.8;
`;

const StyledImgContainer = styled.div`
	margin-top: 60px;
	margin-right: 100px;
`;
export {
	StyledTotalContainer,
	StyledInfoContainer,
	StyledInfoCont,
	StyledMeet,
	StyledProfession,
	StyledName,
	StyledInfo,
	StyledButton,
	StyledTabs,
	StyledImgContainer
};
