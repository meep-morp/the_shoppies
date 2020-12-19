import React from "react";
import styled from "styled-components";
import CTA from "./CTA";

const Home = () => {
	return (
		<HomeContainer>
			<CTA />
		</HomeContainer>
	);
};

export default Home;

const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
