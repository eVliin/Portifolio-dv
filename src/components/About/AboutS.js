import styled, { keyframes } from 'styled-components';
import ReactModal from 'react-modal';

const appearAn = keyframes`
0% {opacity: 0.5;}
100% {opacity: 1;}
`;

export const Section = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 100vh;
	min-height: -webkit-fill-available; /* mobile viewport bug fix */
	overflow-x: hidden;
	scroll-behavior: smooth;

	@media screen and (orientation: landscape) {
	}
`;

export const Circle = styled.img`
	height: 90vw;
	position: absolute;
	top: -40vw;
	right: -40vw;
	transform: scaleX(-1);
	filter: ${(props) => props.theme.convert1};

	@media screen and (orientation: landscape) {
		height: 45vw;
		position: absolute;
		top: -20vw;
		right: -15vw;
	}
`;

export const BgCut = styled.img`
	position: absolute;
	top: -80vw;
	width: 150%;
	z-index: 0;
	@media screen and (orientation: landscape) {
		transform: rotate(-10deg);
		width: 110%;
		top: -55vw;
	}
`;

export const Div = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	min-height: 100vh;

	@media screen and (orientation: landscape) {
		min-height: 130vh;
	}
`;

export const Div1 = styled(Div)`
	min-height: 100vh;
	justify-content: center;
`;

export const Div2 = styled(Div)`
	position: relative;
	background: #000;
`;

export const H2 = styled.h2`
	position: relative;
	transform: rotate(-10deg);
	right: 20vw;
	bottom: 10vh;
`;

export const Proramslng = styled.ul`
	width: 60%;
	height: 40vh;
	position: relative;
	right: 8vw;
	background: ${(props) => props.theme.background};
	border-radius: 50px;
	z-index: 1;
	border: solid ${(props) => props.theme.pallete2};
	-webkit-box-shadow: inset 0px 0px 24px -3px rgba(77, 124, 138, 1);
	box-shadow: inset 0px 0px 24px -3px rgba(77, 124, 138, 0.1);
	overflow: hidden;

	ul {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow-y: scroll;
	}

	@media screen and (orientation: landscape) {
		ul {
			flex-direction: row;
			overflow-y: hidden;
			overflow-x: scroll;
		}
	}
`;

export const Li = styled.li`
	width: 90%;
	padding: 5px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	transition: ease-in 0.1s;
	cursor: pointer;

	img {
		height: 20vw;
		filter: ${(props) => props.theme.convert2}
			drop-shadow(8px 10px 3px rgba(0, 0, 0, 0.3));
	}
	&:hover {
		transform: scale(1.05);
	}

	@media screen and (orientation: landscape) {
		flex-direction: column;
		img {
			height: 10vw;
		}
	}
`;

// Modal styles
export const Button = styled.button`
	background: none;
	position: absolute;
	top: 10px;
	left: 10px;
	z-index: 100;
	img {
		width: 50px;
		filter: ${(props) => props.theme.convertw};
		opacity: 0.5;
	}
`;

export const Modal = styled(ReactModal)`
	background: ${(props) => props.theme.background};
	display: flex;
	flex-direction: column;
	align-items: center;
	color: ${(props) => props.theme.color};
	section {
		width: 100%;
		height: 100%;
		* {
			border: solid;
		}
	}
`;

export const Icon = styled.img`
  align-self: flex-start;
	width: 100%;
	filter: ${(props) => props.theme.convert1};
`;

export const Nome = styled.h2`
	width: 100%;
  height: min-content;
  text-align: center;
`;

export const Desc = styled.p`
	width: 100%;
  padding: 4%;
`;

export const MStyle = {
	overlay: {
		backdropFilter: 'blur(20px)',
		backgroundColor: 'rgba(0, 0, 0, 0.1)'
	},
	content: {
		position: 'absolute',
		top: '40px',
		left: '40px',
		right: '40px',
		bottom: '40px',
		overflow: 'auto',
		WebkitOverflowScrolling: 'touch',
		borderRadius: '30px',
		padding: '20px'
	}
};
