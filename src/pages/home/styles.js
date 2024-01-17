import { styled } from 'styled-components';
const StyledTotalContainer = styled.div`
	width: 90%;
	margin: 100px;
	display: flex;
`;

const StyledDescriptionContainer = styled.div`
	width: 444px;
	margin-top: 400px;
`;

const StyledIntro = styled.p`
	color: #d0d6f9;
	font-family: Barlow Condensed;
	font-size: 28px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 4.725px;
`;

const StyledName = styled.p`
	color: #fff;
	font-family: Bellefair;
	font-size: 150px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`;

const StyledDescription = styled.p`
	color: #d0d6f9;
	font-family: Barlow;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px; /* 177.778% */
`;

const StyledContainerImg = styled.div`
	margin-top: auto;
	margin-left: auto;
	margin-right: 100px;
	border-radius: 274px;
	background: #fff;
	width: 274px;
	height: 274px;
	flex-shrink: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const StyledImgText = styled.p`
	color: #0b0d17;
	font-family: Bellefair;
	font-size: 32px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 2px;
`;

export {
	StyledIntro,
	StyledName,
	StyledDescription,
	StyledDescriptionContainer,
	StyledTotalContainer,
	StyledContainerImg,
	StyledImgText
};
