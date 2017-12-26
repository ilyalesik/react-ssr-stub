import React from "react";
import styled from "styled-components";

const HomePageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HomePageTitle = styled.h1``;

export default class HomePage extends React.PureComponent {
    render() {
        return (
            <HomePageContainer>
                <HomePageTitle>React SSR stub</HomePageTitle>
            </HomePageContainer>
        );
    }
}
