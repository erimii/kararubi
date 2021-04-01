import React from 'react';
import Styled from 'styled-components';

const Container = Styled.SafeAreaView`
    margin-top:16px;
    width:100%;
    height:250px;
    background: #ffffff;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`;

const Explain = Styled.Text`
    font-size:50px;
`;

const ProfileCard = () => {
    return(
        <Container>
            <Explain>ProfileCard</Explain>
        </Container>
    );
};

export default ProfileCard;