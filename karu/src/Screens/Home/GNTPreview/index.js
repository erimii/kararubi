import React from 'react';
import Styled from 'styled-components';

const Container = Styled.SafeAreaView`
    margin:16px 0 ;
    width:100%;
    height:350px;
    background: #ffffff;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`;

const Explain = Styled.Text`
    font-size:50px;
`;

const GNTPreview = () => {
    return(
        <Container>
            <Explain>GNTPreview</Explain>
        </Container>
    );
};

export default GNTPreview;